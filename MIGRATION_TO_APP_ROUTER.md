# Migration to App Router & TypeScript

## ✅ Completed

### 1. TypeScript Setup
- ✅ Created `tsconfig.json` with Next.js 16 configuration
- ✅ Added TypeScript and type definitions to `package.json`
- ✅ Converted utility files to TypeScript:
  - `util/util.ts`
  - `config/index.ts`

### 2. App Router Structure
- ✅ Created `app/` directory
- ✅ Created `app/layout.tsx` (root layout with metadata)
- ✅ Created `app/providers.tsx` (client-side providers for Redux, etc.)
- ✅ Created `app/page.tsx` (home page)
- ✅ Created `app/not-found.tsx` (404 page)

### 3. Dynamic Routes
- ✅ Created `app/products/[slug]/page.tsx` (product detail page)
- ✅ Migrated from `getServerSideProps` to async Server Component
- ✅ Created `app/products/page.tsx` (products listing)
- ✅ Created `app/products/products-client.tsx` (client component with hooks)

## 📋 Remaining Work

### Pages to Convert

**Shop Pages:**
- [ ] `shop-cart.js` → `app/shop/cart/page.tsx`
- [ ] `shop-checkout.js` → `app/shop/checkout/page.tsx`
- [ ] `shop-compare.js` → `app/shop/compare/page.tsx`
- [ ] `shop-filter.js` → `app/shop/filter/page.tsx`
- [ ] `shop-fullwidth.js` → `app/shop/fullwidth/page.tsx`
- [ ] `shop-grid-right.js` → `app/shop/grid-right/page.tsx`
- [ ] `shop-list-left.js` → `app/shop/list-left/page.tsx`
- [ ] `shop-list-right.js` → `app/shop/list-right/page.tsx`
- [ ] `shop-wishlist.js` → `app/shop/wishlist/page.tsx`

**Blog Pages:**
- [ ] `blog-category-big.js` → `app/blog/category-big/page.tsx`
- [ ] `blog-category-fullwidth.js` → `app/blog/category-fullwidth/page.tsx`
- [ ] `blog-category-grid.js` → `app/blog/category-grid/page.tsx`
- [ ] `blog-category-list.js` → `app/blog/category-list/page.tsx`
- [ ] `blog-post-fullwidth.js` → `app/blog/post/[slug]/page.tsx`
- [ ] `blog-post-left.js` → `app/blog/post/[slug]/left/page.tsx`
- [ ] `blog-post-right.js` → `app/blog/post/[slug]/right/page.tsx`

**Vendor Pages:**
- [ ] `vendors.js` → `app/vendors/page.tsx`
- [ ] `vendors-list.js` → `app/vendors/list/page.tsx`
- [ ] `vendor/[id].js` → `app/vendor/[id]/page.tsx`
- [ ] `vendor-dashboard.js` → `app/vendor/dashboard/page.tsx`
- [ ] `vendor-guide.js` → `app/vendor/guide/page.tsx`

**Static Pages:**
- [ ] `page-about.js` → `app/about/page.tsx`
- [ ] `page-account.js` → `app/account/page.tsx`
- [ ] `page-contact.js` → `app/contact/page.tsx`
- [ ] `page-login.js` → `app/login/page.tsx`
- [ ] `page-register.js` → `app/register/page.tsx`
- [ ] `page-privacy-policy.js` → `app/privacy-policy/page.tsx`
- [ ] `page-purchase-guide.js` → `app/purchase-guide/page.tsx`
- [ ] `page-terms.js` → `app/terms/page.tsx`

**Home Variants:**
- [ ] `index-2.js` → `app/(home)/index-2/page.tsx`
- [ ] `index-3.js` → `app/(home)/index-3/page.tsx`
- [ ] `index-4.js` → `app/(home)/index-4/page.tsx`

### Components to Convert to TypeScript
- [ ] All components in `components/` directory
- [ ] Redux store and actions
- [ ] Redux reducers

## 🔄 Migration Patterns

### Pages Router → App Router

**Before (Pages Router):**
```jsx
// pages/products/[slug].js
export async function getServerSideProps(context) {
  const { slug } = context.params;
  // fetch data
  return { props: { product } };
}

export default function Product({ product }) {
  return <div>{product.title}</div>;
}
```

**After (App Router):**
```tsx
// app/products/[slug]/page.tsx
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  return <div>{product.title}</div>;
}
```

### Client Components

For components using hooks, Redux, or browser APIs:
```tsx
'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [state, setState] = useState();
  // ...
}
```

### Metadata

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

## 📝 Notes

- The `pages/` directory can coexist with `app/` during migration
- Next.js will prioritize `app/` routes over `pages/` routes
- All client-side code (hooks, Redux) must be in `'use client'` components
- Server Components are the default in App Router
- Use `useSearchParams()` from `next/navigation` instead of `useRouter().query`

## 🚀 Next Steps

1. Continue converting remaining pages
2. Convert components to TypeScript gradually
3. Add proper TypeScript types for Redux state
4. Test all routes after migration
5. Remove `pages/` directory once migration is complete

