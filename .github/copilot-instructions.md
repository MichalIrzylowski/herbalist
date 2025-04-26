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
    <>
      <Hero
        title="Custom Title Here"
        subtitle="Your custom subtitle text goes here"
        ctaText="Shop Now"
        ctaLink="/shop"
      />
      {/* Other page content */}
    </>
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

### CompactHero Component

The project includes a CompactHero component located at `/src/components/CompactHero/index.tsx`. This component:

- Creates a more compact version of the Hero component for secondary pages
- Includes customizable title, subtitle, and optional call-to-action elements
- Features a clean design with subtle decorative elements
- Uses responsive design that adapts to different screen sizes
- Integrates with the Link, Icon, and Heading components

Usage example:

```tsx
import CompactHero from "@/components/CompactHero";

export default function ProductsPage() {
  return (
    <>
      <CompactHero
        title="Our Products"
        subtitle="Browse our selection of premium herbs"
        ctaText="Filter"
        ctaLink="#filters"
      />
      {/* Other page content */}
    </>
  );
}
```

#### CompactHero Props

| Prop     | Type   | Default                             | Description                         |
| -------- | ------ | ----------------------------------- | ----------------------------------- |
| title    | string | "Page Title"                        | Main heading text                   |
| subtitle | string | "Short description of this section" | Supporting text below the title     |
| ctaText  | string | undefined                           | Optional call-to-action button text |
| ctaLink  | string | undefined                           | Optional URL for the CTA button     |

### Feature Component

The project includes a Feature component located at `/src/components/Feature/index.tsx`. This component:

- Creates a feature highlight with an icon, title, and description
- Supports different layouts and padding options
- Uses tailwind-variants for conditional styling
- Integrates with the Icon and Heading components

Usage example:

```tsx
import { Feature } from "@/components/Feature";

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Feature
        iconName="leaf"
        title="Organic"
        description="All our herbs are certified organic and sustainably sourced."
        layout="verticalCentered"
        padding="medium"
      />
      <Feature
        iconName="seedling"
        title="Fresh"
        description="We ensure maximum freshness with careful harvesting and packaging."
        layout="verticalCentered"
        padding="medium"
      />
      <Feature
        iconName="shipping"
        title="Fast Delivery"
        description="Quick and reliable delivery to your doorstep."
        layout="verticalCentered"
        padding="medium"
      />
    </div>
  );
}
```

#### Feature Props

| Prop        | Type                                     | Default    | Description                        |
| ----------- | ---------------------------------------- | ---------- | ---------------------------------- |
| title       | string                                   | required   | Feature title                      |
| description | string                                   | required   | Feature description                |
| iconName    | IconName                                 | undefined  | Optional icon to display           |
| layout      | 'vertical' \| 'verticalCentered'         | 'vertical' | Layout style for the feature       |
| padding     | 'none' \| 'small' \| 'medium' \| 'large' | 'none'     | Padding around the feature content |

### ProductCard Component

The project includes a ProductCard component located at `/src/components/ProductCard/index.tsx`. This component:

- Displays product information in a card format
- Features an icon, product name, description, weight, and tag
- Uses tailwind-variants for conditional styling
- Includes hover effects for better user interaction

Usage example:

```tsx
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard
        name="Chamomile"
        description="A gentle herb known for its calming effects."
        weight="50g"
        tag="Relaxing"
        iconName="flower"
      />
      <ProductCard
        name="Peppermint"
        description="Refreshing herb with cooling properties."
        weight="30g"
        tag="Digestive"
        iconName="leaf"
        size="large"
      />
    </div>
  );
}
```

#### ProductCard Props

| Prop        | Type                 | Default   | Description                     |
| ----------- | -------------------- | --------- | ------------------------------- |
| name        | string               | required  | Product name                    |
| description | string               | required  | Product description             |
| weight      | string               | required  | Product weight/quantity         |
| tag         | string               | required  | Product category/tag            |
| iconName    | IconName             | required  | Icon to represent the product   |
| size        | 'default' \| 'large' | 'default' | Size variant for the card       |
| className   | string               | undefined | Optional additional CSS classes |

### Color Palette

The project uses a carefully selected color palette from Tailwind CSS to maintain visual consistency across the application. The primary colors are from Tailwind's emerald, slate, and stone families, providing a natural and organic feel that aligns with the herbalist theme.

#### Primary Color Families

- **Emerald**: Used for primary elements, CTAs, and decorative accents
- **Slate**: Used for text and secondary UI elements
- **Stone**: Used for subtle backgrounds and neutral areas

#### Tailwind Color Usage

The project uses the following Tailwind color classes:

```
emerald-50   # Very light green, used for subtle backgrounds
emerald-100  # Light green, used for borders and subtle accents
emerald-200  # Slightly darker light green, used for hover states
emerald-500  # Medium green, used for focus rings
emerald-600  # Medium-dark green, used for primary buttons
emerald-700  # Dark green, used for text on light backgrounds and secondary buttons
emerald-800  # Darker green, used for hover states and secondary backgrounds
emerald-900  # Very dark green, used for headings with primary color

slate-400    # Light gray with blue undertone, used for disabled text
slate-600    # Medium gray with blue undertone, used for secondary text
slate-700    # Dark gray with blue undertone, used for important secondary text
slate-900    # Very dark gray with blue undertone, used for primary text

gray-200     # Light gray, used for subtle backgrounds
gray-800     # Dark gray, used for text contrast on light backgrounds

stone-50     # Very light warm gray, used for natural backgrounds
```

#### Semantic Color Usage

| Element Type      | Color                                                 |
| ----------------- | ----------------------------------------------------- |
| Primary Text      | slate-900                                             |
| Secondary Text    | slate-700, slate-600                                  |
| Headings          | emerald-900 (primary), slate-900 (default)            |
| Primary Buttons   | emerald-700 (background), white (text)                |
| Secondary Buttons | transparent with emerald-700 border                   |
| Backgrounds       | white, emerald-50, stone-50                           |
| Section Borders   | emerald-100                                           |
| Gradients         | emerald-50 to emerald-100                             |
| Hover States      | emerald-50 (for secondary), emerald-800 (for primary) |
| Focus Rings       | emerald-500                                           |

#### Dark Mode Considerations

The project is currently designed for light mode, but Tailwind's color system will facilitate adding dark mode support in the future using the `dark:` variant prefix.

#### Usage Guidelines

1. Use emerald colors for primary interactive elements and brand emphasis
2. Use slate colors for text content with appropriate contrast ratios for accessibility
3. Use stone and lighter emerald shades for secondary backgrounds and subtle emphasis
4. Maintain consistent color application across similar UI elements
5. Use Tailwind color classes directly rather than creating custom CSS variables
6. Follow the semantic color roles defined in component variants
7. Use the appropriate color intensity for the intended purpose (e.g., emerald-700 for text on light backgrounds)

### Section Component

The project includes a Section component located at `/src/components/Section/index.tsx`. This component:

- Provides a consistent and flexible container for page sections
- Supports multiple background colors, spacing options, and border styles
- Uses tailwind-variants for conditional styling
- Can render as different HTML elements through the `as` prop
- Handles container width and responsive padding automatically

Usage example:

```tsx
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Section background="light" spacing="large" border="bottom">
        <h2 className="text-2xl font-bold">Welcome to Our Store</h2>
        <p>Discover our amazing collection of herbs.</p>
      </Section>

      <Section
        background="gradient"
        spacing="medium"
        containerSize="md"
        as="aside"
      >
        <h3 className="text-xl font-bold">Featured Products</h3>
        {/* Product listings */}
      </Section>
    </>
  );
}
```

#### Section Props

| Prop           | Type                                                                      | Default     | Description                         |
| -------------- | ------------------------------------------------------------------------- | ----------- | ----------------------------------- |
| as             | ElementType                                                               | 'section'   | HTML element to render as           |
| children       | React.ReactNode                                                           | required    | Content of the section              |
| background     | 'white' \| 'light' \| 'primary' \| 'secondary' \| 'gradient' \| 'natural' | 'white'     | Background color/style              |
| spacing        | 'none' \| 'small' \| 'medium' \| 'large'                                  | 'medium'    | Vertical padding amount             |
| width          | 'full' \| 'container'                                                     | 'container' | Width behavior                      |
| border         | 'none' \| 'top' \| 'bottom' \| 'both'                                     | 'none'      | Border placement                    |
| className      | string                                                                    | undefined   | Optional additional CSS classes     |
| innerClassName | string                                                                    | undefined   | Classes for the inner container     |
| containerSize  | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'                                    | 'xl'        | Max width for the content container |

### MarketingSection Component

The project includes a MarketingSection component located at `/src/components/MarketingSection/index.tsx`. This component:

- Creates a full marketing section with title, subtitle, features, and CTA
- Integrates the Feature component to display multiple features in a grid
- Supports different background styles, spacing options, and text alignments
- Uses tailwind-variants for conditional styling
- Provides a customizable layout for marketing content

Usage example:

```tsx
import MarketingSection from "@/components/MarketingSection";

export default function AboutPage() {
  return (
    <>
      <MarketingSection
        title="Why Choose Our Herbs"
        subtitle="We provide the highest quality herbs with sustainable sourcing"
        background="light"
        alignment="center"
        featureColumns={3}
        features={[
          {
            iconName: "leaf",
            title: "100% Organic",
            description:
              "All our herbs are certified organic and free from pesticides.",
          },
          {
            iconName: "shipping",
            title: "Fast Delivery",
            description: "Quick and reliable shipping across the country.",
          },
          {
            iconName: "check",
            title: "Quality Guarantee",
            description: "We stand behind the quality of all our products.",
          },
        ]}
        ctaText="Shop Now"
        ctaLink="/products"
      />
    </>
  );
}
```

#### MarketingSection Props

| Prop           | Type                                | Default   | Description                       |
| -------------- | ----------------------------------- | --------- | --------------------------------- |
| title          | string                              | required  | Section title                     |
| subtitle       | string                              | undefined | Optional subtitle text            |
| features       | FeatureProps[]                      | []        | Array of feature objects          |
| ctaText        | string                              | undefined | Call-to-action button text        |
| ctaLink        | string                              | undefined | Call-to-action button link        |
| background     | 'white' \| 'light' \| 'gradient'    | 'white'   | Background style                  |
| spacing        | 'normal' \| 'compact' \| 'spacious' | 'normal'  | Vertical padding amount           |
| alignment      | 'left' \| 'center' \| 'right'       | 'left'    | Text alignment                    |
| className      | string                              | undefined | Optional additional CSS classes   |
| featureColumns | 1 \| 2 \| 3 \| 4                    | 3         | Number of columns in feature grid |

This document will be updated as the project evolves.
