import {
  SEARCH_URL,
  fetchWithBackoff,
  type JobCard,
} from "../helpers.js"

export interface SearchOpts {
  query?: string
  location?: string
  page: number
  limit?: number
  format: "json" | "table" | "plain"
}

function buildUrl(opts: SearchOpts): string {
  const params = new URLSearchParams()
  if (opts.query) params.set("skills", opts.query)
  if (opts.location) params.set("locations", opts.location)
  const offset = (opts.page - 1) * 20
  if (offset > 0) params.set("offset", String(offset))
  return `${SEARCH_URL}?${params.toString()}`
}

function renderTable(cards: JobCard[]): string {
  if (cards.length === 0) return "No results."
  const rows = cards.map((c) => {
    const title = (c.title || "").slice(0, 36).padEnd(36)
    const company = (c.company || "—").slice(0, 24).padEnd(24)
    const loc = (c.location || "—").slice(0, 20).padEnd(20)
    return `${c.id.padEnd(8)} ${title} ${company} ${loc}`
  })
  const header =
    "ID".padEnd(8) +
    " " +
    "TITLE".padEnd(36) +
    " " +
    "COMPANY".padEnd(24) +
    " " +
    "LOCATION".padEnd(20)
  return [header, "-".repeat(header.length), ...rows].join("\n")
}

export async function runSearch(opts: SearchOpts): Promise<number> {
  try {
    const url = buildUrl(opts)
    const res = await fetchWithBackoff(url)
    if (!res.ok) {
      process.stderr.write(
        JSON.stringify({
          error: `HTTP ${res.status}: ${res.statusText}`,
          code: "HTTP_ERROR",
        }) + "\n",
      )
      return 1
    }
    const data = await res.json()
    const objects = data.objects || []
    let cards: JobCard[] = objects.map((obj: any) => ({
      id: String(obj.id),
      title: obj.candidate_title || obj.title || "Software Engineer",
      company: obj.employer?.company_name || "Confidential",
      location: obj.locations || "India",
      date: null,
      url: obj.public_url || `https://www.instahyre.com/job-${obj.id}/`,
      keywords: obj.keywords || [],
    }))

    if (opts.limit !== undefined && opts.limit >= 0) {
      cards = cards.slice(0, opts.limit)
    }

    if (opts.format === "table") {
      process.stdout.write(renderTable(cards) + "\n")
    } else if (opts.format === "plain") {
      process.stdout.write(
        cards
          .map(
            (c) =>
              `${c.title}\n  ${c.company} · ${c.location}\n  skills: ${c.keywords.join(", ")}\n  id: ${c.id}\n  ${c.url}\n`,
          )
          .join("\n"),
      )
    } else {
      process.stdout.write(
        JSON.stringify(
          {
            meta: { count: cards.length, page: opts.page },
            results: cards,
          },
          null,
          2,
        ) + "\n",
      )
    }
    return 0
  } catch (err: any) {
    process.stderr.write(
      JSON.stringify({
        error: err.message || "Failed to search Instahyre",
        code: "NETWORK_ERROR",
      }) + "\n",
    )
    return 1
  }
}
