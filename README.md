# Uber Clone — Next.js Ride‑hailing Demo

> A simple Uber‑style demo built with Next.js, Google Maps, Stripe and Clerk.

<img width="1904" height="907" alt="image" src="https://github.com/user-attachments/assets/e2335ef9-cbb5-4d8f-973c-a647a094505f" />


---

## Features

- Search pickup and drop‑off addresses using Google Places autocomplete
- Interactive Google Map with markers and routing (Directions API)
- Select from multiple car types; fare estimated by distance
- Secure payment flow using Stripe Payment Intents
- Authentication with Clerk (sign in / sign up)
- Clean component structure and Context API for shared state

## Tech stack

- Next.js (App Router)
- React + Tailwind CSS
- Google Maps & Places (`@react-google-maps/api`)
- Stripe (`@stripe/react-stripe-js`, server route for PaymentIntent)
- Clerk for authentication
- React Icons, React Toastify

## Quick start

Clone and install:

```bash
git clone https://github.com/<your-username>/uber-clone.git
cd uber-clone
npm install
```

Create an environment file by copying the example and filling your keys:

```bash
cp .env.local.example .env.local
# then open .env.local and add your API keys
```

Run the dev server:

```bash
npm run dev
# open http://localhost:3000
```

## Required environment variables

Add the following to `.env.local` (or set in your deployment platform):

```env
NEXT_PUBLIC_GOOGLE_API_KEY=your-google-maps-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```


## How it works — important files

- `app/page.js` — main landing page; provides `SourceContext` and `DestinationContext`
- `components/Home/SearchSection.js` — inputs and distance calculation
- `components/Home/GoogleMapSection.js` — map, markers, and directions
- `components/Home/CarListOptions.js` & `CarListItem.js` — car options and pricing
- `components/Home/CheckouForm.js` — Stripe Elements form
- `app/api/create-intent/route.tsx` — server route that creates Stripe PaymentIntents

## Screenshots & demo

<img width="1919" height="929" alt="image" src="https://github.com/user-attachments/assets/598c0dde-2987-45fe-b5dd-f3c0040fda05" />
<img width="1907" height="901" alt="image" src="https://github.com/user-attachments/assets/4078aa84-9ff3-4d3c-b20a-5cb8cb44da41" />
<img width="1919" height="920" alt="image" src="https://github.com/user-attachments/assets/c8864c0e-8956-41b5-a07e-7b394641a08b" />


## Contributing

This repo is a personal demo — pull requests and issues are welcome. For serious contributions, open an issue first.

---

