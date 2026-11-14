# Serverdex MCP server

Search the [Serverdex](https://serverdex.io) directory of MCP servers from any MCP client. Serverdex indexes 34,000+ Model Context Protocol servers, synced daily from the official MCP registry, across 28 categories, with install configs, GitHub signals and category rankings on every server's page.

This repository describes the **remote Serverdex MCP server**, a hosted Streamable HTTP endpoint that lets agents query the whole catalogue directly.

- **Endpoint:** `https://serverdex.io/mcp` (Streamable HTTP, no authentication)
- **Homepage:** https://serverdex.io
- **Transport:** Streamable HTTP (remote / cloud)

## Tools

| Tool | What it does |
| --- | --- |
| `search_servers` | Full-text search over the directory (names, titles, descriptions). Filter by one of 28 category slugs, sort by newest / name / stars, paginate. Returns compact rows: slug, name, author, description, category, GitHub stars, links. |
| `get_server` | Everything about one server by slug: description, category, packages (npm / PyPI / Docker), remote endpoints, GitHub facts (stars, license, last push), a README excerpt, and ready-to-paste client configs for Claude Desktop and Cursor. |
| `list_categories` | The directory's 28 categories with live server counts and their slugs. |

All tools are read-only.

## Use it

### Claude Desktop (`claude_desktop_config.json`)

```json
{
  "mcpServers": {
    "serverdex": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://serverdex.io/mcp"]
    }
  }
}
```

### Any Streamable HTTP MCP client

Point the client at `https://serverdex.io/mcp`. No API key is required.

## About

Serverdex is a directory of Model Context Protocol servers: every server in the official registry gets a page, refreshed daily, with what it does, how to install it, its GitHub stars and README, and where it ranks in its category. Owners claim their page in one click with GitHub. Browse at [serverdex.io](https://serverdex.io).
