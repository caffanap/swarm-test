# Swarm Test - Next.js Application

A modern Next.js application built with TypeScript, Tailwind CSS, and Zustand for state management.

## Setup Instructions

### Prerequisites
- Node.js 18+ or Bun runtime
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd swarm-test
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## Tech Stack & Decisions

### Core Technologies
- **Next.js 14** - React framework with App Router for modern routing and server components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Zustand** - Lightweight state management (simpler than Redux, more scalable than Context API)

### UI & Styling
- **Radix UI** - Unstyled, accessible component primitives (Tabs, Slot)
- **Lucide React** - Modern icon library
- **Motion** - Animation library for smooth interactions
- **shadcn/ui** - Reusable component system built on Radix UI
- **tailwind-merge & clsx** - Dynamic className composition
- **tailwindcss-animate** - Pre-built animations

### Architecture Decisions

1. **Feature-based structure** - Components organized by features and base components
2. **Zustand for state** - Chosen over Context API for better performance and Redux for simplicity
3. **Component composition** - Using Radix UI primitives for accessibility out-of-the-box
4. **CSS Variables** - Using CSS custom properties for theming (light/dark mode support)
5. **Bun runtime** - Faster package installation and development server

### Trade-offs

- **Zustand over Redux**: Simpler API and less boilerplate, but less ecosystem tooling
- **App Router**: Modern Next.js routing with server components, but steeper learning curve
- **Tailwind CSS**: Fast development but can lead to verbose className strings
- **Feature folders**: Better organization for larger apps but may seem over-engineered for small projects

## Improvements with More Time

### Performance
- [ ] Implement React Server Components for better performance
- [ ] Add image optimization with next/image
- [ ] Code splitting and lazy loading for heavy components
- [ ] Add bundle analyzer to optimize bundle size
- [ ] Implement proper caching strategies

### Developer Experience
- [ ] Add Storybook for component documentation
- [ ] Setup comprehensive testing (Jest + React Testing Library)
- [ ] Add E2E tests with Playwright/Cypress
- [ ] Implement pre-commit hooks with Husky
- [ ] Add conventional commits and changelog generation

### Code Quality
- [ ] Stricter TypeScript configuration
- [ ] ESLint custom rules for project conventions
- [ ] Better error boundaries and error handling
- [ ] Add proper logging and monitoring
- [ ] Document component APIs with JSDoc

### Features
- [ ] Implement proper authentication flow
- [ ] Add internationalization (i18n)
- [ ] Progressive Web App (PWA) capabilities
- [ ] SEO optimization with metadata
- [ ] Analytics integration
- [ ] Better loading states and skeleton screens

### Infrastructure
- [ ] CI/CD pipeline setup
- [ ] Environment-specific configurations
- [ ] Docker containerization
- [ ] Performance monitoring (Lighthouse CI)
- [ ] API integration layer with proper error handling

### Accessibility
- [ ] Full WCAG 2.1 AA compliance audit
- [ ] Keyboard navigation improvements
- [ ] Screen reader testing and optimization
- [ ] Focus management
- [ ] ARIA labels and descriptions

### State Management
- [ ] Persist Zustand store to localStorage
- [ ] Add middleware for logging/devtools
- [ ] Better TypeScript types for store
- [ ] Implement proper data fetching patterns

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable components
│   ├── base/        # Layout components (navbar, footer)
│   ├── button/      # Button variants
│   ├── card/        # Card components
│   ├── list/        # List components
│   └── ui/          # shadcn/ui components
├── features/        # Feature-specific components
├── lib/             # Utility functions
├── stores/          # Zustand stores
└── types/           # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is private and proprietary.