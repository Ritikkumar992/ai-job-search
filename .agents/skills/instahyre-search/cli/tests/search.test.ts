import { test, expect } from "bun:test"
import { spawnSync } from "child_process"

test("instahyre-cli search returns results", () => {
  const res = spawnSync("bun", ["run", "src/cli.ts", "search", "-q", "Flutter", "--limit", "2"], {
    cwd: import.meta.dir + "/..",
    encoding: "utf-8",
  })
  expect(res.status).toBe(0)
  const json = JSON.parse(res.stdout)
  expect(json.results.length).toBeGreaterThanOrEqual(1)
  expect(json.results[0].title).toBeDefined()
})
