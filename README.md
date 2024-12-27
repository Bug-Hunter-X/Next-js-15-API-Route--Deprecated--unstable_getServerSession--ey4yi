# Next.js 15 API Route: Deprecated `unstable_getServerSession`

This repository demonstrates a common error encountered when using NextAuth.js with Next.js 15 API routes: the use of the deprecated `unstable_getServerSession` function.

## Bug Description
The `unstable_getServerSession` function is deprecated and may lead to unexpected behavior or errors.  This example shows how a simple API route utilizing this deprecated function may fail to correctly authenticate users.

## Solution
The recommended solution is to use `getServerSession` from `next-auth/next`. This function provides the same functionality in a stable and supported way.

## How to reproduce
1. Clone the repo.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the API route behavior. It will likely fail authentication due to the deprecated function.
5. Examine the corrected version in `bugSolution.js`.