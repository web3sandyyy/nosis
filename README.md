# Nosis - Digital Book Library

Nosis is a modern digital book library application built with Next.js, React, and TypeScript. It provides a sleek interface for browsing, reading, and interacting with book summaries and insights.

Visit the live site: [nosis.vercel.app](https://nosis.vercel.app/)

## Features

- **Book Library**: Browse and discover curated books
- **Reading Experience**: Clean, distraction-free reading interface
- **AI Interactions**: Generate summaries and ask questions related to the book content
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **PWA Support**: Installable as a Progressive Web App

## Tech Stack

### Core Technologies
- **Next.js 15**: App Router, Server Components, API Routes
- **React 19**: Functional components with hooks
- **TypeScript**: Type safety throughout the codebase
- **Tailwind CSS 4**: Utility-first styling approach

### UI and State Management
- **Shadcn UI**: Component library built on Tailwind
- **Lucide Icons**: Comprehensive icon library
- **React Context**: For global state management
- **Google Generative AI**: For AI-powered book summaries and Q&A

### Performance Optimizations
- **Next.js Image**: Optimized image loading and rendering
- **Cache Control Headers**: Proper caching for static assets
- **Dynamic Build IDs**: For cache busting between deployments

## Project Structure

```
my-project/
├── public/               # Static assets and PWA manifest
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── book/         # Book-related routes
│   │   │   └── [slug]/   # Dynamic book routes
│   │   │       └── reading/[slugtwo]/ # Reading page routes
│   │   ├── explore/      # Explore/discovery page
│   │   ├── library/      # User's library page
│   │   ├── globals.css   # Global styles
│   │   └── layout.tsx    # Root layout component
│   ├── assets/           # Imported assets (images, etc.)
│   ├── components/       # Reusable React components
│   │   ├── bookPage/     # Book-specific components
│   │   ├── ui/           # UI components (buttons, cards, etc.)
│   │   └── Sidebar.tsx   # Main navigation sidebar
│   ├── constants/        # Static data (books, categories)
│   ├── helper/           # Helper functions
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   └── utils/            # Utility functions
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/nosis.git
cd nosis/my-project
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file with your Gemini API key:
```
NEXT_GEMINI_API_KEY=your_api_key_here
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm run start
# or
yarn start
```

## Deployment

The application is configured for easy deployment on Vercel or any other Next.js-compatible hosting platform. The `next.config.ts` file includes optimizations for:

- Image optimization
- Security headers
- PWA support
- Cache control
