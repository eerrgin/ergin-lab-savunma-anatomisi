import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#100b0b" },
      { title: "ERGİN LAB · Savunma Anatomisi" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
