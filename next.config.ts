import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Aplica a cualquier ruta que no sea assets estáticos de Next
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            // Importante: `s-maxage=0` evita que un CDN/edge cachee el HTML.
            // `private` desalienta caching compartido y `proxy-revalidate` fuerza revalidación en proxies.
            value:
              "private, no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate, s-maxage=0",
          },
          // Compatibilidad adicional (algunos proxies antiguos)
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
};

export default nextConfig;
