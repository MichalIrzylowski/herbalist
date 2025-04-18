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
- `/src/components`: Contains reusable UI components
  - `Hero/`: Hero section component
  - `Icon/`: Reusable icon component with standardized styling
  - `Link/`: Custom link component with consistent styling and behavior

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

### Hero Component

The project includes a Hero component located at `/src/components/Hero/index.tsx`. This component:

- Creates a visually appealing banner section for the top of pages
- Includes customizable title, subtitle, and call-to-action elements
- Features decorative icons and a gradient background
- Uses responsive design with Tailwind CSS for all screen sizes
- Integrates with the Link and Icon components

Usage example:

```tsx
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Custom Title Here"
        subtitle="Your custom subtitle text goes here"
        ctaText="Shop Now"
        ctaLink="/shop"
      />
      {/* Other page content */}
    </main>
  );
}
```

#### Hero Props

| Prop     | Type   | Default                                                            | Description                        |
| -------- | ------ | ------------------------------------------------------------------ | ---------------------------------- |
| title    | string | "Nature's Remedies, Delivered to Your Door"                        | Main heading text                  |
| subtitle | string | "Premium quality herbs sourced directly from sustainable farms..." | Supporting text below the title    |
| ctaText  | string | "Explore Our Collection"                                           | Primary call-to-action button text |
| ctaLink  | string | "/collection"                                                      | URL for the primary CTA button     |

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

### Heading Component

The project includes a reusable Heading component located at `/src/components/Heading/index.tsx`. This component:

- Provides consistent heading styles across the application
- Allows flexible heading levels (h1-h6) that map to the appropriate HTML tags
- Uses tailwind-variants for conditional styling
- Supports different sizes, colors, font weights, and margin spacing
- Ensures semantic HTML structure while allowing visual flexibility

Usage example:

```tsx
import { Heading } from "@/components/Heading";

export function MyComponent() {
  return (
    <div>
      <Heading level={1} color="primary" marginBottom="large">
        Main Heading
      </Heading>
      <Heading
        level={2}
        size="h3"
        color="secondary"
        weight="medium"
        marginBottom="small"
      >
        Subheading with Custom Size
      </Heading>
    </div>
  );
}
```

#### Available Heading Variants

The Heading component supports the following variants:

- **Size**:

  - `h1`: Extra large text (default for level 1)
  - `h2`: Very large text (default for level 2)
  - `h3`: Large text (default for level 3)
  - `h4`: Medium-large text (default for level 4)
  - `h5`: Medium text (default for level 5)
  - `h6`: Regular text (default for level 6)

- **Color**:

  - `default`: Dark slate (default)
  - `primary`: Emerald/green
  - `secondary`: Medium slate
  - `light`: White

- **Weight**:

  - `normal`: Regular font weight
  - `medium`: Medium font weight
  - `semibold`: Semi-bold font weight
  - `bold`: Bold font weight (default)

- **Margin Bottom**:
  - `none`: No bottom margin
  - `small`: Small bottom margin (0.5rem)
  - `medium`: Medium bottom margin (1rem) (default)
  - `large`: Large bottom margin (1.5rem)
  - `xlarge`: Extra large bottom margin (2rem)

#### Heading Props

| Prop         | Type                                                 | Default                | Description                             |
| ------------ | ---------------------------------------------------- | ---------------------- | --------------------------------------- |
| level        | 1 \| 2 \| 3 \| 4 \| 5 \| 6                           | required               | The semantic HTML heading level         |
| size         | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'         | Matches the level prop | The visual size (can differ from level) |
| color        | 'default' \| 'primary' \| 'secondary' \| 'light'     | 'default'              | The text color                          |
| weight       | 'normal' \| 'medium' \| 'semibold' \| 'bold'         | 'bold'                 | The font weight                         |
| marginBottom | 'none' \| 'small' \| 'medium' \| 'large' \| 'xlarge' | 'medium'               | The bottom margin spacing               |
| className    | string                                               | undefined              | Optional additional CSS classes         |
| children     | React.ReactNode                                      | required               | The content of the heading              |

This document will be updated as the project evolves.
