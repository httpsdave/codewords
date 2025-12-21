# CodeWords - CS & IT Dictionary

A comprehensive dictionary for computer science and IT terminology built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

### Core Features
- 🔍 **Real-time Search** with debouncing and loading states
- 🏷️ **Category Filtering** - Filter terms by programming language, algorithms, concepts, etc.
- 🔤 **A-Z Navigation** - Quick alphabetical browsing
- 📄 **Individual Term Pages** - SEO-optimized pages for each term
- 📱 **Fully Responsive** - Mobile-first design

### User Experience
- 📋 **Copy to Clipboard** - One-click code example copying
- ⬆️ **Share Functionality** - Share terms via native share or copy link
- 🔗 **Related Terms** - Navigate between connected concepts
- 🍞 **Breadcrumbs** - Clear navigation hierarchy
- 🎯 **Smart Filtering** - Combine search, category, and letter filters

### Technical Features
- ⚡ **Static Generation** - Fast page loads with SSG
- 🔎 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- 🗺️ **Sitemap & Robots.txt** - Search engine friendly
- 🌙 **Dark Mode** - Automatic theme support
- 🎨 **Clean UI** - Modern design with Tailwind CSS

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## Project Structure

```
CodeWords/
├── app/
│   ├── term/[slug]/     # Individual term pages
│   ├── layout.tsx       # Root layout with SEO
│   ├── page.tsx         # Home page with search & filters
│   ├── not-found.tsx    # Custom 404 page
│   ├── sitemap.ts       # Auto-generated sitemap
│   └── robots.ts        # Robots.txt configuration
├── components/
│   ├── SearchBar.tsx         # Search with debouncing
│   ├── TermCard.tsx          # Term preview card
│   ├── CategoryFilter.tsx    # Category filtering
│   ├── AlphabetNav.tsx       # A-Z navigation
│   ├── CopyButton.tsx        # Code copy functionality
│   └── ShareButton.tsx       # Share functionality
├── data/
│   └── terms.ts         # Term definitions
└── public/              # Static assets
```

## Adding New Terms

Edit `data/terms.ts` and add a new term object:

```typescript
{
  id: "unique-id",
  title: "Term Name",
  category: "Category Name",
  definition: "Clear definition...",
  example: "Code example (optional)",
  relatedTerms: ["related-id-1", "related-id-2"]
}
```

## Deploy on Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

## Features Roadmap

- [ ] Database integration for scalable term management
- [ ] Admin panel for content management
- [ ] User authentication
- [ ] Favorites/bookmarks
- [ ] Community contributions
- [ ] Advanced search with Algolia
- [ ] Code syntax highlighting

## License

MIT
