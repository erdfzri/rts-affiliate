# Contributing Guide

Thank you for considering contributing to the Affiliate Product Management System! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)

### Setup Development Environment

```bash
# Clone the repository
git clone <repository-url>
cd affiliate-product-system

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/       # Reusable components
│   ├── ui/          # Base UI components
│   └── layout/      # Layout components
├── pages/           # Page components
│   ├── admin/       # Admin pages
│   └── ...          # Public pages
├── store/           # Zustand stores
├── data/            # Mock data
├── types/           # TypeScript types
├── lib/             # Utility functions
└── App.tsx          # Main app component
```

## 🎨 Code Style

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type
- Use type inference when possible

```typescript
// Good
interface Product {
  id: string;
  name: string;
  price: number;
}

// Bad
const product: any = { ... };
```

### React Components

- Use functional components
- Use hooks for state and effects
- Keep components small and focused
- Extract reusable logic to custom hooks

```typescript
// Good
export function ProductCard({ product }: ProductCardProps) {
  return <Card>...</Card>;
}

// Bad
export default function ProductCard(props: any) {
  // 500 lines of code
}
```

### Naming Conventions

- **Components**: PascalCase (`ProductCard.tsx`)
- **Hooks**: camelCase with 'use' prefix (`useThemeStore.ts`)
- **Utilities**: camelCase (`formatCurrency`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`)
- **Types/Interfaces**: PascalCase (`Product`, `ProductCardProps`)

### File Organization

```typescript
// 1. Imports
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// 2. Types
interface Props {
  title: string;
}

// 3. Component
export function MyComponent({ title }: Props) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Functions
  const handleClick = () => {};
  
  // 6. Render
  return <div>...</div>;
}
```

## 🎯 Adding New Features

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Implement the Feature

- Write clean, readable code
- Follow existing patterns
- Add TypeScript types
- Keep components small

### 3. Test Your Changes

- Test in both light and dark mode
- Test on mobile, tablet, and desktop
- Check for console errors
- Verify all links work

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
```

#### Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(products): add bulk delete functionality
fix(navbar): resolve mobile menu not closing
docs(readme): update installation instructions
style(button): improve hover animation
refactor(store): simplify theme store logic
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 🐛 Reporting Bugs

### Before Reporting

1. Check if the bug has already been reported
2. Try to reproduce the bug
3. Gather relevant information

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 120]
- Version: [e.g. 1.0.0]

**Additional context**
Any other relevant information.
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Mockups, examples, or other context.
```

## 🧪 Testing Guidelines

### Manual Testing Checklist

- [ ] Feature works as expected
- [ ] No console errors
- [ ] Responsive on all screen sizes
- [ ] Works in light and dark mode
- [ ] Accessible (keyboard navigation)
- [ ] No TypeScript errors
- [ ] No broken links

### Future: Automated Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Check coverage
npm run test:coverage
```

## 📝 Documentation

### Code Comments

- Comment complex logic
- Explain "why", not "what"
- Keep comments up to date

```typescript
// Good
// Calculate discount percentage to show savings badge
const discount = ((original - current) / original) * 100;

// Bad
// Divide and multiply
const discount = ((original - current) / original) * 100;
```

### Component Documentation

```typescript
/**
 * ProductCard displays a product with image, price, and marketplace badges.
 * 
 * @param product - The product to display
 * @returns A card component with product information
 * 
 * @example
 * <ProductCard product={product} />
 */
export function ProductCard({ product }: ProductCardProps) {
  // ...
}
```

## 🎨 Design Guidelines

### Colors

- Use CSS variables from `index.css`
- Don't hardcode colors
- Ensure good contrast ratios

### Spacing

- Use Tailwind spacing scale
- Be consistent with padding/margin
- Follow existing patterns

### Typography

- Use Tailwind text utilities
- Maintain hierarchy
- Ensure readability

### Animations

- Keep animations subtle
- Use Framer Motion for complex animations
- Respect `prefers-reduced-motion`

## 🔍 Code Review Process

### For Contributors

1. Ensure your code follows guidelines
2. Write clear PR description
3. Link related issues
4. Respond to feedback promptly
5. Update based on review comments

### For Reviewers

1. Be respectful and constructive
2. Focus on code quality and maintainability
3. Check for potential bugs
4. Verify tests pass
5. Approve when ready

## 📚 Resources

### Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Tools

- [VS Code](https://code.visualstudio.com/)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🤝 Community

### Getting Help

- Check existing issues
- Read documentation
- Ask in discussions
- Be patient and respectful

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Report inappropriate behavior

## 🎉 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

Thank you for contributing! 🙏
