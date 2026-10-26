#!/usr/bin/env bun
import { runSearch, type SearchOpts } from "./commands/search.js"
import { runDetail, type DetailOpts } from "./commands/detail.js"

interface Flags {
  _: string[]
  [k: string]: string | boolean | string[]
}

function parseFlags(argv: string[]): Flags {
  const flags: Flags = { _: [] }
  const alias: Record<string, string> = { q: "query", l: "location", n: "limit" }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a.startsWith("--") || a.startsWith("-")) {
      const key = alias[a.replace(/^-+/, "")] ?? a.replace(/^-+/, "")
      const next = argv[i + 1]
      if (next === undefined || next.startsWith("-")) {
        flags[key] = true
      } else {
        flags[key] = next
        i++
      }
    } else {
      ;(flags._ as string[]).push(a)
    }
  }
  return flags
}

const HELP = `instahyre-cli — search tech and software engineering jobs in India on Instahyre

USAGE
  bun run src/cli.ts search [flags]
  bun run src/cli.ts detail <id|url> [--format json|plain]

SEARCH FLAGS
  --query, -q <text>      Skills or keywords (e.g. "Flutter", "Kotlin", "Mobile").
  --location, -l <text>   Location filter (e.g. "Bangalore", "Mumbai", "Remote", "Gurgaon").
  --page <n>              1-indexed page. Default 1.
  --limit, -n <n>         Max results to emit.
  --format <fmt>          json (default) | table | plain.

EXAMPLES
  bun run src/cli.ts search -q "Flutter" -l "Bangalore" --format table
  bun run src/cli.ts search -q "Flutter" --limit 10 --format table
  bun run src/cli.ts detail 443718 --format plain
`

async function main(): Promise<number> {
  const argv = process.argv.slice(2)
  const flags = parseFlags(argv)
  const cmd = (flags._ as string[])[0]

  if (!cmd || flags.help || flags.h) {
    process.stdout.write(HELP)
    return cmd ? 0 : 1
  }

  if (cmd === "search") {
    const format =
      flags.format === "table" || flags.format === "plain" ? flags.format : "json"
    const opts: SearchOpts = {
      query: typeof flags.query === "string" ? flags.query : undefined,
      location: typeof flags.location === "string" ? flags.location : undefined,
      page: typeof flags.page === "string" ? parseInt(flags.page, 10) || 1 : 1,
      limit: typeof flags.limit === "string" ? parseInt(flags.limit, 10) : undefined,
      format,
    }
    return await runSearch(opts)
  }

  if (cmd === "detail") {
    const idOrUrl = (flags._ as string[])[1]
    if (!idOrUrl) {
      process.stderr.write(
        JSON.stringify({
          error: "detail requires an id or URL argument",
          code: "MISSING_ARGUMENT",
        }) + "\n",
      )
      return 1
    }
    const format = flags.format === "plain" ? "plain" : "json"
    const opts: DetailOpts = { idOrUrl, format }
    return await runDetail(opts)
  }

  process.stderr.write(
    JSON.stringify({
      error: `unknown command '${cmd}'`,
      code: "UNKNOWN_COMMAND",
    }) + "\n",
  )
  return 1
}

main().then((code) => process.exit(code))
