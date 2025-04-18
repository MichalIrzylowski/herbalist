# GitHub Copilot Instructions

## Project Overview

This is a Next.js project called "herbalist-v1" that is currently a static website for an herbs dealer. The project uses TypeScript and modern web development practices with a focus on a clean, maintainable codebase and optimal user experience. While currently static, the architecture is designed to accommodate future dynamic features.

## Technology Stack

- Next.js for the React framework
- TypeScript for type safety
- Tailwind CSS for styling
- Tailwind Variants for variant-based component styling
- ESLint for code linting

## Project Structure

- `/public`: Contains static assets such as SVG files
- `/src/app`: Contains the Next.js application code following the App Router pattern
  - `layout.tsx`: The main layout component
  - `page.tsx`: The main page component
  - `globals.css`: Global CSS styles including Tailwind imports

## Coding Standards

When contributing to this project, please follow these guidelines:

1. Use TypeScript for all new code
2. Follow existing code style and formatting conventions
3. Write meaningful comments for complex logic
4. Create reusable components when appropriate
5. Follow the Next.js App Router file-based routing conventions
6. Use proper semantic HTML for accessibility
7. Use Tailwind utility classes for styling instead of custom CSS when possible
8. Optimize images and other assets for performance

## Development Workflow

1. When implementing new features, consider the overall architecture
2. Test your changes thoroughly before committing
3. Update documentation as needed
4. Consider performance implications of your changes
5. Use Next.js server-side rendering and static generation capabilities appropriately

## Specific Instructions for AI Assistance

When helping with this project:

1. Suggest TypeScript-first solutions
2. Prefer React Server Components unless client-side interactivity is required
3. Consider responsive design in all UI components using Tailwind breakpoints
4. Follow Next.js best practices for data fetching and routing
5. Optimize for performance, accessibility, and SEO
6. Suggest methods to improve code quality and maintainability
7. Use Tailwind CSS for styling components rather than custom CSS solutions
8. Consider component reusability and modularity when designing interfaces

## Tailwind CSS Guidelines

- Use Tailwind's utility-first approach
- Leverage Tailwind's responsive design utilities (sm:, md:, lg:, etc.)
- For complex components, consider using Tailwind's @apply directive in component-specific CSS modules only if necessary
- Follow the existing color scheme and design system using Tailwind classes

## Tailwind Variants Usage

- Use tailwind-variants for creating component variants with conditional styling
- Follow the API pattern for defining component variants:
  ```typescript
  const button = tv({
    base: "px-4 py-2 rounded-md",
    variants: {
      color: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-gray-800",
      },
      size: {
        small: "text-sm",
        large: "text-lg",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });
  ```
- Prefer tailwind-variants over custom CSS classes or complex conditional styling in JSX
- Maintain consistency by using the same variant names across similar components
- Document component variants in the component file

## Reusable Components

### Icon Component

The project includes a reusable Icon component located at `/src/components/Icon/index.tsx`. This component:

- Centralizes all icons in one place using react-icons packages
- Uses tailwind-variants for consistent styling
- Provides size and color variants for all icons
- Ensures accessibility with proper aria attributes

Usage example:

```tsx
import { Icon } from "@/components/Icon";

export function MyComponent() {
  return (
    <div>
      <Icon name="leaf" size="md" color="primary" />
      <span>Organic Herbs</span>
    </div>
  );
}
```

#### Available Icons

The Icon component has a predefined set of icons organized by categories:

- Nature & Plants: leaf, seedling, plant, plantOutline, etc.
- E-commerce: basket, shipping, medicines
- UI Elements: search, check, close, arrowRight
- Contact & Location: location, phone, email

#### Adding New Icons

To add a new icon to the Icon component:

1. Import the icon from an appropriate react-icons package at the top of the file:

   ```tsx
   import { NewIconName } from "react-icons/xx"; // where xx is the icon package prefix
   ```

2. Add the icon to the `icons` object with a descriptive name:

   ```tsx
   export const icons = {
     // ...existing icons...
     newIconName: NewIconName, // Add your new icon here
   };
   ```

3. The icon will automatically receive the styling variants defined in the component

This approach ensures consistency across the application and makes icon management more maintainable.

### Link Component

The project includes a reusable Link component located at `/src/components/Link/index.tsx`. This component:

- Wraps Next.js's Link component for consistent styling and behavior
- Uses tailwind-variants for conditional styling
- Provides variant and size options for different use cases
- Maintains proper accessibility attributes from Next.js Link

Usage example:

```tsx
import { Link } from "@/components/Link";

export function MyComponent() {
  return (
    <div>
      <Link href="/herbs" variant="primary" size="md">
        View Our Herbs
      </Link>
    </div>
  );
}
```

#### Available Link Variants

The Link component supports the following variants:

- **Variants**:

  - `primary`: Green background with white text (default)
  - `secondary`: Transparent background with green border and text

- **Sizes**:
  - `sm`: Small link (smaller padding and font size)
  - `md`: Medium link (default)
  - `lg`: Large link (larger padding and font size)

#### Link Props

| Prop      | Type                     | Default   | Description                     |
| --------- | ------------------------ | --------- | ------------------------------- |
| href      | string                   | required  | The destination URL             |
| variant   | 'primary' \| 'secondary' | 'primary' | The visual style of the link    |
| size      | 'sm' \| 'md' \| 'lg'     | 'md'      | The size of the link            |
| className | string                   | undefined | Optional additional CSS classes |
| children  | React.ReactNode          | required  | The content of the link         |

This document will be updated as the project evolves.
