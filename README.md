# react-superform

A monorepo containing a React component library and a Next.js marketing site built with pnpm workspaces.

## 📦 Packages

### `@react-superform/ui` (`packages/ui`)
A reusable React component library for building forms and UI components. Ready to be published to npm.

**Components:**
- `Button` - Customizable button with variants (primary, secondary, outline) and sizes
- `Input` - Input field with label, error, and helper text support

### `marketing` (`apps/marketing`)
A Next.js application showcasing the component library with interactive examples and documentation.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (automatically installed if not present)

### Installation

```bash
# Install dependencies for all packages
pnpm install
```

### Development

```bash
# Start the Next.js marketing site (with hot reload)
pnpm dev

# Build all packages
pnpm build

# Build specific packages
pnpm build:ui
pnpm build:marketing
```

### Project Structure

```
react-superform/
├── apps/
│   └── marketing/          # Next.js marketing site
│       ├── app/
│       └── package.json
├── packages/
│   └── ui/                 # React component library
│       ├── src/
│       │   ├── Button.tsx
│       │   ├── Input.tsx
│       │   └── index.ts
│       └── package.json
├── pnpm-workspace.yaml     # pnpm workspace configuration
└── package.json            # Root package.json
```

## 🔧 Development Workflow

1. **Make changes to `@react-superform/ui`**
   ```bash
   cd packages/ui
   pnpm dev  # Watch mode for the library
   ```

2. **Test changes in the marketing app**
   ```bash
   cd apps/marketing
   pnpm dev  # Next.js dev server
   ```

3. **Build for production**
   ```bash
   pnpm build  # Builds all packages
   ```

## 📝 Publishing the Component Library

To publish `@react-superform/ui` to npm:

```bash
cd packages/ui
pnpm build
npm publish
```

## 🛠️ Tech Stack

- **Build System**: pnpm workspaces
- **Component Library**: React 18, TypeScript, tsup
- **Marketing Site**: Next.js 16, React 19, Tailwind CSS
- **Type Safety**: TypeScript throughout

## 📄 License

MIT

