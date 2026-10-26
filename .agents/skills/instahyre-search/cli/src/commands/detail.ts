import { fetchWithBackoff } from "../helpers.js"

export interface DetailOpts {
  idOrUrl: string
  format: "json" | "plain"
}

export async function runDetail(opts: DetailOpts): Promise<number> {
  const url = opts.idOrUrl.startsWith("http")
    ? opts.idOrUrl
    : `https://www.instahyre.com/job-${opts.idOrUrl}/`

  try {
    const res = await fetchWithBackoff(url)
    if (!res.ok) {
      process.stderr.write(
        JSON.stringify({
          error: `HTTP ${res.status}: ${res.statusText}`,
          code: "NOT_FOUND",
        }) + "\n",
      )
      return 1
    }
    const html = await res.text()
    if (opts.format === "json") {
      process.stdout.write(
        JSON.stringify({ url, htmlLength: html.length, status: "OK" }, null, 2) + "\n",
      )
    } else {
      process.stdout.write(`Job URL: ${url}\nFetched ${html.length} bytes.\n`)
    }
    return 0
  } catch (err: any) {
    process.stderr.write(
      JSON.stringify({
        error: err.message || "Failed to fetch detail",
        code: "NETWORK_ERROR",
      }) + "\n",
    )
    return 1
  }
}
