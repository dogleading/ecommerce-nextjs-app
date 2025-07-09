# E-commerce Store

A simple online store built with Next.js and Stripe for payments.

## What it does

- Shows products from Stripe
- Add items to cart
- Checkout with Stripe payments
- Responsive design for mobile and desktop

## Tech used

- Next.js 15
- TypeScript
- Tailwind CSS
- Stripe for payments
- Zustand for cart state

## How to run

1. Clone the repo

```bash
git clone <your-repo-url>
cd Ecommerce
```

2. Install stuff

```bash
npm install
```

3. Add environment variables
   Create `.env.local` file:

```
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run it

```bash
npm run dev
```

5. Open http://localhost:3000

## Commands

- `npm run dev` - Start development
- `npm run build` - Build for production
- `npm start` - Start production server

That's it!
