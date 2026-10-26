---
name: instahyre-search
version: 1.0.0
description: Search jobs on Instahyre (India's premier tech hiring platform for startups, scale-ups, and product companies) by skill keywords and locations across Bangalore, Mumbai, Delhi NCR, Hyderabad, Pune, Kolkata, and Remote.
context: fork
allowed-tools:
  - Bash(bun run .agents/skills/instahyre-search/cli/src/cli.ts *)
---

# Instahyre Search

CLI skill for searching software engineering and tech roles across Indian tech companies on Instahyre.

## Commands

```bash
# Search by skill keyword and location
bun run .agents/skills/instahyre-search/cli/src/cli.ts search -q "Flutter" -l "Bangalore" --format table

# Search all India with limit
bun run .agents/skills/instahyre-search/cli/src/cli.ts search -q "Flutter" --limit 10 --format table

# Plain text output for easy inspection
bun run .agents/skills/instahyre-search/cli/src/cli.ts search -q "Flutter" -l "Remote" --format plain
```

## Flags
- `--query, -q <text>`: Skill or job title keyword (e.g. `Flutter`, `Kotlin`, `Mobile`).
- `--location, -l <text>`: Location (e.g. `Bangalore`, `Mumbai`, `Gurgaon`, `Remote`, `India`).
- `--page <n>`: 1-indexed page number (default: 1).
- `--limit, -n <n>`: Cap maximum results emitted.
- `--format <fmt>`: `json` (default), `table`, or `plain`.
