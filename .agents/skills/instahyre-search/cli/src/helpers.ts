export interface JobCard {
  id: string
  title: string
  company: string
  location: string
  date: string | null
  url: string
  keywords: string[]
}

export const SEARCH_URL = "https://www.instahyre.com/api/v1/job_search"

export async function fetchWithBackoff(url: string, retries = 3): Promise<Response> {
  const headers = {
    "User-Agent": "Mozilla/5.0 (compatible; instahyre-cli/1.0)",
    "Accept": "application/json",
  }
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers })
      if (res.ok) return res
      if (res.status === 429 || res.status >= 500) {
        if (attempt === retries) return res
        const delay = Math.pow(2, attempt) * 500 + Math.random() * 200
        await new Promise((r) => setTimeout(r, delay))
        continue
      }
      return res
    } catch (err) {
      if (attempt === retries) throw err
      await new Promise((r) => setTimeout(r, 500))
    }
  }
  throw new Error(`Failed to fetch ${url}`)
}

export function writeError(msg: string, code: string): void {
  process.stderr.write(JSON.stringify({ error: msg, code }) + "\n")
}
