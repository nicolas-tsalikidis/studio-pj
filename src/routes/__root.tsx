import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="font-serif text-7xl">404</p>
      <h1 className="mt-3 font-serif text-2xl">Deze pagina bestaat niet</h1>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm">
        De pagina die je zoekt is verplaatst of bestaat niet meer.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block text-xs uppercase tracking-[0.2em] border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
      >
        Terug naar home
      </Link>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Studio pj — Barbier in Gent" },
      { name: "description", content: "Studio pj is een atelier voor moderne barbering in Gent. Vakmanschap, rust en karakter — voor elk hoofd dat binnenkomt." },
      { name: "author", content: "Studio pj" },
      { property: "og:title", content: "Studio pj — Barbier in Gent" },
      { property: "og:description", content: "Studio pj is een atelier voor moderne barbering in Gent. Vakmanschap, rust en karakter — voor elk hoofd dat binnenkomt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Studio pj — Barbier in Gent" },
      { name: "twitter:description", content: "Studio pj is een atelier voor moderne barbering in Gent. Vakmanschap, rust en karakter — voor elk hoofd dat binnenkomt." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d613e029-e791-4478-9674-1d097bf9fbf4/id-preview-1667610d--a4f9211f-d33d-4d41-8b3e-878a4c8ab502.lovable.app-1777308427068.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d613e029-e791-4478-9674-1d097bf9fbf4/id-preview-1667610d--a4f9211f-d33d-4d41-8b3e-878a4c8ab502.lovable.app-1777308427068.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      // Behold.so widget loader — wordt alleen actief als InstagramFeed een widget ID rendert.
      { src: "https://w.behold.so/widget.js", type: "module", async: true },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
