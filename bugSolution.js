```javascript
import {getServerSession} from 'next-auth/next';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // ... rest of your API route code
}
```
This corrected code snippet uses the stable `getServerSession` function from `next-auth/next`, ensuring compatibility and avoiding potential issues with future updates.