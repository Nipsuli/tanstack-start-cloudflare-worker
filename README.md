# example tanstack start in cloudflare workers

Example showing minimal example on tanstack start in cloudflare workers. The
core things are the config in `app.config.ts`

```ts
import { cloudflare } from "unenv";

export default defineConfig({
  server: {
    preset: "cloudflare-module",
    unenv: cloudflare,
  },
  ...
}
```

and the `getCloudflareContext` helper in the `app/lib/cloudflare-helpers.ts` It gets the cloudflare context from the vixi event. In dev mode it uses local wrangler to get teh environment.

## Bugs in tanstack

when the `getEnv` server function in the `app/routes/index.tsx` is called in the loader in deployed envrionemnt then the environment is empty. But when the server function is called from the click handler then the environment is there.

Check the console log in in the deployed version running at:
https://tanstack-start-cloudflare-worker.tgec.workers.dev/
