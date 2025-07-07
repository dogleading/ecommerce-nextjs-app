# 🛒 Ecommerce Website

A modern, responsive ecommerce website built with Next.js 15, React 19, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with Tailwind CSS
- 🧭 **Smart Navigation** - Active page highlighting with smooth transitions
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Next.js App Router for optimal speed
- 🎯 **TypeScript** - Type-safe development experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Ecommerce
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── checkout/          # Checkout page
│   ├── products/          # Products page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   └── Navbar.tsx         # Navigation component
├── lib/                   # Utility functions
└── public/               # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Frontend**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Geist (Vercel's font family)

## 🎨 Styling

This project uses Tailwind CSS v4 for styling. The navbar features:

- Active page highlighting in red
- Smooth hover transitions
- Responsive design
- Modern typography with Geist font

## 🔧 Development

- Edit pages in the `app/` directory
- Components are in the `components/` directory
- The page auto-updates as you edit files
- TypeScript provides type safety and better developer experience
