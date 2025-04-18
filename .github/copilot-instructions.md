# GitHub Copilot Instructions

## Project Overview

This is a Next.js project called "herbalist-v1" that is currently a static website for an herbs dealer. The project uses TypeScript and modern web development practices with a focus on a clean, maintainable codebase and optimal user experience. While currently static, the architecture is designed to accommodate future dynamic features.

## Technology Stack

- Next.js for the React framework
- TypeScript for type safety
- Tailwind CSS for styling
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

This document will be updated as the project evolves.
