// app/routes/index.tsx
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getCloudflareContext } from "app/lib/cloudflare-helpers";

const getEnv = createServerFn({
  method: "GET",
}).handler(async () => {
  const { env } = await getCloudflareContext();
  return { env };
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getEnv(),
});

function Home() {
  const state = Route.useLoaderData();
  console.log("Server side data:", state);

  return (
    <button
      type="button"
      onClick={() => {
        getEnv().then((a) => {
          console.log("Client side click action:", a);
        });
      }}
    >
      Click me
    </button>
  );
}
