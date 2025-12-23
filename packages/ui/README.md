# @react-superform/ui

A React component library for building forms and UI components.

## Installation

```bash
npm install @react-superform/ui
# or
pnpm add @react-superform/ui
```

## Components

### Button

A customizable button component with variants and sizes.

```tsx
import { Button } from '@react-superform/ui';

<Button variant="primary" size="md">Click me</Button>
```

### Input

An input component with label, error, and helper text support.

```tsx
import { Input } from '@react-superform/ui';

<Input 
  label="Email" 
  type="email" 
  error="Invalid email"
  helperText="Enter your email address"
/>
```

## Development

```bash
# Build the library
pnpm build

# Watch mode for development
pnpm dev
```
