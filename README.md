# Portfolio by Cesk.

This project was built with a modern front-end stack, serving as a personal challenge to expand my expertise beyond my core back-end skills.

## Tech Stack & Architecture

* **Framework:** **[Next.js](https://nextjs.org/)**
    * A powerful React framework used for Static Site Generation (SSG), which pre-renders the entire website into static HTML, CSS, and JavaScript files for lightning-fast load times.

* **UI Library:** **[React](https://react.dev/)**
    * The fundamental library for building the user interface with a component-based architecture.

* **Styling:** **[Tailwind CSS](https://tailwindcss.com/)**
    * A utility-first CSS framework that allows for rapid development of custom designs without leaving the HTML. All styles are co-located with the components for better maintainability.

* **Components:** **[shadcn/ui](https://ui.shadcn.com/)**
    * A collection of beautifully designed, accessible, and unstyled components. Unlike traditional component libraries, these are not installed as a dependency. Instead, they are copied into the codebase, allowing for full control and ownership over styling and behavior.

* **Package Manager:** **[pnpm](https://pnpm.io/)**
    * A fast and disk-space-efficient package manager. It uses a content-addressable store to avoid duplicating packages, resulting in faster installation times and smaller `node_modules` directories.

* **Development Server:** **[Turbopack](https://turbo.build/pack)**
    * An incremental bundler written in Rust, used via the `next dev --turbopack` command to provide a significantly faster development experience compared to Webpack.
