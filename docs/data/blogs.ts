export interface Blog {
  title: string;
  href: string;
  cover: string;
  detail: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    title: "Hedystia 2.4 - Secure APIs, Dialect-Aware Data, and Stronger Types",
    href: "/blog/2.4",
    cover: "/blog/2.4/cover.png",
    detail:
      "Built-in request security, portable database migrations, smarter inserts, safer routing, and async validation",
    date: "15 August 2026",
  },
  {
    title: "Hedystia 2.3 - Universal WebSocket, PostgreSQL, and Enhanced Validations",
    href: "/blog/2.3",
    cover: "/blog/2.3/cover.png",
    detail:
      "Native Node.js support, @hedystia/ws package, PostgreSQL driver, and 20+ new validation schema factories",
    date: "09 May 2026",
  },
  {
    title: "Hedystia 2.2 - Ecosystem Integrations",
    href: "/blog/2.2",
    cover: "/blog/2.2/cover.png",
    detail:
      "Astro integration for @hedystia/view and Better Auth adapter for @hedystia/db",
    date: "28 Apr 2026",
  },
  {
    title: "Hedystia 2.1 - Reactive UI Engine",
    href: "/blog/2.1",
    cover: "/blog/2.1/cover.png",
    detail:
      "Fine-grained reactive UI framework with no Virtual DOM, surgical DOM updates, and full JSX support",
    date: "04 Apr 2026",
  },
  {
    title: "Hedystia 2.0 - Database ORM",
    href: "/blog/2.0",
    cover: "/blog/2.0/cover.png",
    detail: "Type-safe ORM with multi-database support, smart caching, and migration system",
    date: "16 Mar 2026",
  },
  {
    title: "Hedystia 1.10 - Type Mastery",
    href: "/blog/1.10",
    cover: "/blog/1.10/cover.png",
    detail:
      "Type-safe route testing, conditional routes, real-time WebSockets, and framework-agnostic type generation",
    date: "12 Mar 2026",
  },
  {
    title: "Welcome to Hedystia",
    href: "/blog/welcome",
    cover: "/blog/welcome/cover.png",
    detail: "An introduction to the Hedystia framework and what makes it different.",
    date: "06 Mar 2026",
  },
];
