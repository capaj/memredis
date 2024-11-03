# memredis 

🚀 Redis-backed memoization for your async functions

## Features

🔄 Cache async function results in Redis  
⚡ Fast lookups using customizable cache keys  
⏰ Configurable TTL (Time To Live)  
🔍 Debug logging support  
🧹 Easy cache clearing - both complete and per-key  
🔌 Works with ioredis client  

## Installation

```bash
pnpm install memredis
```

# Usage
First, create your memRedis instance with your Redis client:

```typescript
import { createMemRedis } from '@capaj/memredis'
import { Redis } from 'ioredis' // or any other Redis client

const redis = new Redis()
const memRedis = createMemRedis(redis)

const memoizedGetUser = memRedis(
  async (userId: string) => {
    // your expensive operation here
    return await db.getUserData(userId)
  },
  {
    maxAge: 3600, // cache for 1 hour
    cachePrefix: 'user-data'
  }
)

// Use the memoized function- this will cache the result in Redis
const userData = await memoizedGetUser.memoized('user123')

const userDataFromRedis = await memoizedGetUser.memoized('user123') // this will return the cached result

// Clear specific cache entry
await memoizedGetUser.clearKey('user123')

// Clear all cache entries for this function
await memoizedGetUser.clear()
```

## License 

MIT
