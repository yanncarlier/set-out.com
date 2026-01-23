# AGENTS.md - Development Guidelines for set-out.com

This file contains essential information for AI coding agents working on the set-out.com project. Follow these guidelines to maintain consistency with the existing codebase.

## Project Overview

set-out.com is a Next.js 15 application for SET-OUT INTERNATIONAL COMPANY LIMITED, featuring:
- Multi-language support (English, French, Portuguese, Traditional Chinese, Simplified Chinese)
- Responsive design using Tailwind CSS and shadcn/ui components
- TypeScript for type safety
- Modern React patterns with hooks and contexts

## Build/Lint/Test Commands

### Development
```bash
cd my-app
pnpm dev                    # Start development server on localhost:3000
pnpm build                  # Build for production
pnpm start                  # Start production server
pnpm lint                   # Run ESLint (includes TypeScript checking)
```

### Testing
There are currently no test scripts configured. When adding tests:
- Use Jest or Vitest (common with Next.js projects)
- Test files should be named `*.test.ts` or `*.test.tsx`
- Place tests in `__tests__/` directories or alongside source files

### Single Test Execution
```bash
# When tests are added, use patterns like:
pnpm test -- <test-file>     # Run specific test file
pnpm test -- --testNamePattern="<pattern>"  # Run tests matching pattern
```

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode**: Enabled - all code must pass strict TypeScript checks
- **Target**: ES6
- **Module resolution**: Bundler (for Next.js compatibility)
- **JSX**: Preserve (handled by Next.js)
- **Path aliases**: Enabled with `@/*` mapping to `./*`

### Import Organization
```typescript
// 1. React imports first
import * as React from "react"
import { useState, useEffect } from "react"

// 2. Third-party libraries (alphabetical)
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

// 3. Local imports (with path aliases)
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/translations"
```

### Component Structure
```typescript
"use client"  // Add for client components only

import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentProps {
  // Define props interface
  className?: string
  children?: React.ReactNode
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-classes", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Component.displayName = "Component"

export { Component }
```

### Naming Conventions
- **Components**: PascalCase (`LandingPage`, `LanguageSelector`)
- **Functions/Variables**: camelCase (`useLanguage`, `handleSetLanguage`)
- **Types/Interfaces**: PascalCase (`LanguageContextType`, `ButtonProps`)
- **Files**: kebab-case for components (`landing-page.tsx`), camelCase for utilities (`utils.ts`)
- **Translation keys**: camelCase with descriptive names (`heroTitle`, `ourServices`)

### Styling with Tailwind CSS
- **CSS Variables**: Use design system variables (`--background`, `--foreground`, etc.)
- **Utility Classes**: Prefer Tailwind utilities over custom CSS
- **Component Variants**: Use `class-variance-authority` for component variants
- **Responsive Design**: Use responsive prefixes (`md:`, `lg:`) consistently
- **Dark Mode**: Supported via `darkMode: "class"` in Tailwind config

### shadcn/ui Integration
- **Component Location**: `components/ui/` directory
- **Aliases**: Use configured path aliases (`@/components`, `@/ui`, `@/lib`)
- **Base Styles**: `app/globals.css` as primary stylesheet
- **Variants**: Follow existing pattern using `cva` for variant props

### React Patterns
- **Hooks**: Prefer custom hooks for reusable logic (`useLanguage`, `useToast`)
- **Context**: Use React Context for global state (language, theme)
- **Error Boundaries**: Implement for production error handling
- **Client/Server Components**: Mark client components with `"use client"`

### Error Handling
```typescript
// Context providers should throw descriptive errors
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
```

### Translation System
- **Structure**: Flat object with language keys
- **Type Safety**: Use `keyof typeof translations.en` for type-safe keys
- **Fallback**: Always provide English fallback for missing translations
- **Organization**: Group keys by feature/page sections with comments

### File Organization
```
my-app/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── landing-page.tsx  # Page components
├── contexts/             # React contexts
├── hooks/                # Custom hooks
├── lib/                  # Utilities and translations
└── public/               # Static assets
```

### Accessibility
- **Semantic HTML**: Use appropriate HTML elements
- **ARIA Labels**: Add when necessary for screen readers
- **Focus Management**: Ensure keyboard navigation works
- **Color Contrast**: Use design system colors that meet WCAG standards

### Performance Considerations
- **Next.js Optimization**: Leverage Image component, automatic code splitting
- **Bundle Analysis**: Monitor bundle size when adding dependencies
- **Lazy Loading**: Use dynamic imports for heavy components
- **Memoization**: Use `React.memo`, `useMemo`, `useCallback` when appropriate

### Security Best Practices
- **Input Validation**: Validate and sanitize user inputs
- **XSS Prevention**: Use Next.js built-in protections
- **Secrets Management**: Never commit secrets or API keys
- **HTTPS**: Ensure all external requests use HTTPS

### Git Workflow
- **Commit Messages**: Follow conventional commits format
- **Branching**: Use feature branches for new work
- **Code Reviews**: All changes should be reviewed
- **Pre-commit Hooks**: ESLint and TypeScript checks should pass

## Development Workflow

1. **Setup**: `cd my-app && pnpm install`
2. **Development**: `pnpm dev` with hot reloading
3. **Code Quality**: `pnpm lint` before commits
4. **Build Check**: `pnpm build` to verify production build
5. **Testing**: Run tests (when implemented) before merging

## Tooling Integration

- **ESLint**: `next/core-web-vitals` and `next/typescript` rules
- **TypeScript**: Strict mode with comprehensive type checking
- **Tailwind**: CSS-in-JS approach with utility-first styling
- **shadcn/ui**: Component library with consistent API design
- **Path Aliases**: `@/*` for clean imports

Follow these guidelines to maintain code quality and consistency across the codebase.</content>
<parameter name="filePath">/home/y/MY_PROJECTS/set-out.com/AGENTS.md