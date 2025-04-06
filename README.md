# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

# UI Component Library

A modern, accessible, and customizable UI component library built with React, Tailwind CSS, and Radix UI primitives.

## Features

- 🎨 Customizable with CSS variables and Tailwind
- 🤝 Accessible components using Radix UI primitives
- 🌙 Light and dark mode support
- 📦 Modular components for easy importing
- 🔄 Reusable utilities for common patterns

## Components

The library includes the following components:

- **Button**: A customizable button component with various styles
- **Card**: A versatile card component with header, content, and footer
- **Checkbox**: An accessible checkbox input
- **Input**: A styled input field
- **Select**: A customizable dropdown select component

## Usage

Import the components you need:

```tsx
import { Button, Card, Input } from "@/components/ui";

function MyComponent() {
  return (
    <div>
      <Card>
        <h2>Example Card</h2>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </Card>
    </div>
  );
}
```

## Customization

The components use CSS variables for theming, which can be customized in your globals.css file. The default theme includes light and dark mode variables.

You can also extend or override the styling using Tailwind utility classes or by modifying the component variants.

## Development

To run the project locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Adding New Components

To add a new component:

1. Create a new file in `src/components/ui/`
2. Export the component in `src/components/ui/index.ts`
3. Use the `cn()` utility for class name management
