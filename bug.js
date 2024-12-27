```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // ... rest of your API route code
}
```
This code snippet uses `unstable_getServerSession` which is deprecated.  This could cause unexpected behavior, especially with recent Next.js versions.