#!/usr/bin/env node
// serverdex-mcp — thin launcher for the remote Serverdex MCP server.
// Bridges a local stdio MCP client to the hosted Streamable HTTP endpoint
// via mcp-remote. No API key required.
import { spawn } from "node:child_process";

const ENDPOINT = "https://serverdex.io/mcp";

const child = spawn(
  "npx",
  ["-y", "mcp-remote", ENDPOINT, ...process.argv.slice(2)],
  { stdio: "inherit", shell: process.platform === "win32" }
);

child.on("exit", (code) => process.exit(code ?? 0));
child.on("error", (err) => {
  console.error("serverdex-mcp: failed to start mcp-remote:", err.message);
  process.exit(1);
});
