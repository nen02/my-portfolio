import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Top-level public/ folders that hold standalone pages. Keep in sync with the
// rewrite exclusions in vercel.json.
const STATIC_SUBPAGE_ROOTS = ['docs', 'privacy', 'nummz', 'tan-aw']

// Serve static sub-page index.html files in dev (e.g. /docs/ntrack, /privacy/nummz).
// Vite's SPA fallback would otherwise intercept these before the public/ files are reached.
function serveStaticSubpages(): import('vite').Plugin {
  return {
    name: 'serve-static-subpages',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url ?? '/').split('?')[0].replace(/\/$/, '')
        const root = url.split('/')[1]
        if (STATIC_SUBPAGE_ROOTS.includes(root)) {
          const candidate = path.resolve('public', url.slice(1), 'index.html')
          if (fs.existsSync(candidate)) {
            res.setHeader('Content-Type', 'text/html')
            res.end(fs.readFileSync(candidate))
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), serveStaticSubpages()],
})
