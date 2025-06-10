# Pokédex Next.js Application

This is a comprehensive [Next.js](https://nextjs.org) project

A modern Pokédex web application built with Next.js that displays Pokémon information fetched from the [PokéAPI](https://pokeapi.co/).

## Features

- Display Pokémon cards with official artwork
- Show Pokémon types with color coding
- Search functionality to filter Pokémon by name
- Responsive design that works on desktop and mobile devices
- Server-side rendering for improved performance and SEO
- Learn important concepts like Debouncing and Treeshaking

## Technologies Used

- [Next.js 15](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [PokéAPI](https://pokeapi.co/) for Pokémon data

## Getting Started

After cloning 
Install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app router files
- `components/` - React components
  - `pokemon-card.tsx` - Individual Pokémon card display
  - `pokemon-list.tsx` - Grid layout for Pokémon cards
  - `pokemon-wrapper.tsx` - Container with search functionality
  - `search-input.tsx` - Search input component
- `utils/` - Utility functions and type definitions