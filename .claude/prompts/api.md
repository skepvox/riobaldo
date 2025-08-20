# API Endpoint Creation Prompt

When creating API endpoints for Riobaldo, follow these Nuxt 3 server API conventions:

## Server API Structure

```typescript
// server/api/endpoint.post.ts
export default defineEventHandler(async (event) => {
  // 1. Input validation
  const body = await readBody(event)
  
  // 2. Authentication check
  const user = await requireAuth(event)
  
  // 3. Business logic
  try {
    const result = await processRequest(body, user)
    
    // 4. Return response
    return {
      success: true,
      data: result
    }
  } catch (error) {
    // 5. Error handling
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message
    })
  }
})
```

## File Naming Convention

```
server/
├── api/                      # API routes
│   ├── auth/
│   │   ├── login.post.ts    # POST /api/auth/login
│   │   ├── logout.post.ts   # POST /api/auth/logout
│   │   └── me.get.ts        # GET /api/auth/me
│   ├── questions/
│   │   ├── index.get.ts     # GET /api/questions
│   │   ├── index.post.ts    # POST /api/questions
│   │   ├── [id].get.ts      # GET /api/questions/:id
│   │   ├── [id].put.ts      # PUT /api/questions/:id
│   │   └── [id].delete.ts   # DELETE /api/questions/:id
│   └── submissions/
│       └── index.post.ts    # POST /api/submissions
├── utils/                    # Server utilities
│   ├── auth.ts             # Authentication helpers
│   ├── database.ts         # Database connections
│   └── validation.ts       # Input validation
└── middleware/              # Server middleware
    └── cors.ts             # CORS configuration
```

## HTTP Methods

```typescript
// GET - Retrieve data
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { page = 1, limit = 10, filter } = query
  
  const data = await fetchData({ page, limit, filter })
  return data
})

// POST - Create resource
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const validated = validateInput(body)
  
  const created = await createResource(validated)
  
  setResponseStatus(event, 201)
  return created
})

// PUT - Update resource
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  
  const updated = await updateResource(id, body)
  return updated
})

// DELETE - Remove resource
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  await deleteResource(id)
  
  setResponseStatus(event, 204)
  return null
})
```

## Input Validation

```typescript
// Using Zod for validation
import { z } from 'zod'

const QuestionSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(10),
  type: z.enum(['math', 'philosophy']),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  tags: z.array(z.string()).optional()
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  try {
    const validated = QuestionSchema.parse(body)
    // Process validated data
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
      data: error.errors
    })
  }
})
```

## Authentication & Authorization

```typescript
// server/utils/auth.ts
export async function requireAuth(event: H3Event) {
  const token = getCookie(event, 'auth-token') || getHeader(event, 'authorization')
  
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authentication required'
    })
  }
  
  const user = await verifyToken(token)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid token'
    })
  }
  
  return user
}

// Usage in endpoint
export default defineEventHandler(async (event) => {
  const user = await requireAuth(event)
  
  // Check permissions
  if (!user.permissions.includes('create:question')) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Insufficient permissions'
    })
  }
  
  // Proceed with authorized action
})
```

## Error Handling

```typescript
export default defineEventHandler(async (event) => {
  try {
    // Main logic
    return await processRequest()
  } catch (error) {
    // Log error for monitoring
    console.error('API Error:', error)
    
    // Determine error type and response
    if (error instanceof ValidationError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation failed',
        data: error.details
      })
    }
    
    if (error instanceof NotFoundError) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Resource not found'
      })
    }
    
    // Generic error
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})
```

## Response Formatting

```typescript
// Consistent response structure
interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  meta?: {
    page?: number
    limit?: number
    total?: number
  }
}

// Success response
return {
  success: true,
  data: result,
  meta: {
    page: 1,
    limit: 10,
    total: 100
  }
}

// Error response
return {
  success: false,
  error: {
    code: 'VALIDATION_ERROR',
    message: 'Invalid input provided',
    details: validationErrors
  }
}
```

## Database Integration

```typescript
// Using Prisma
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const questions = await prisma.question.findMany({
    where: {
      type: 'math',
      difficulty: 'medium'
    },
    include: {
      author: true,
      tags: true
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 10,
    skip: 0
  })
  
  return questions
})
```

## Caching Strategy

```typescript
export default defineCachedEventHandler(async (event) => {
  // This response will be cached
  return await fetchExpensiveData()
}, {
  maxAge: 60 * 60, // 1 hour
  name: 'questions-list',
  getKey: (event) => {
    const query = getQuery(event)
    return `questions:${query.type}:${query.page}`
  }
})
```

## Rate Limiting

```typescript
// server/middleware/rateLimit.ts
const attempts = new Map()

export default defineEventHandler(async (event) => {
  if (!event.node.req.url?.startsWith('/api/')) return
  
  const ip = getClientIP(event)
  const key = `${ip}:${event.node.req.url}`
  
  const current = attempts.get(key) || 0
  if (current > 100) { // 100 requests per window
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many requests'
    })
  }
  
  attempts.set(key, current + 1)
  
  // Reset after time window
  setTimeout(() => attempts.delete(key), 60000) // 1 minute
})
```

## WebSocket Support

```typescript
// server/api/ws.ts
export default defineWebSocketHandler({
  open(peer) {
    console.log('WebSocket opened', peer)
  },
  
  message(peer, message) {
    const data = JSON.parse(message.text())
    
    // Handle different message types
    switch (data.type) {
      case 'subscribe':
        // Subscribe to updates
        break
      case 'answer':
        // Process answer
        peer.send(JSON.stringify({ type: 'feedback', data: result }))
        break
    }
  },
  
  close(peer) {
    console.log('WebSocket closed', peer)
  }
})
```

## Testing

```typescript
// tests/api/questions.test.ts
import { describe, it, expect } from 'vitest'
import { $fetch } from '@nuxt/test-utils'

describe('Questions API', () => {
  it('GET /api/questions returns list', async () => {
    const response = await $fetch('/api/questions')
    
    expect(response).toHaveProperty('success', true)
    expect(response.data).toBeInstanceOf(Array)
  })
  
  it('POST /api/questions creates question', async () => {
    const response = await $fetch('/api/questions', {
      method: 'POST',
      body: {
        title: 'Test Question',
        content: 'What is 2+2?',
        type: 'math',
        difficulty: 'easy'
      }
    })
    
    expect(response.success).toBe(true)
    expect(response.data).toHaveProperty('id')
  })
})
```

## Performance Best Practices

1. **Use streaming for large responses**
2. **Implement pagination for lists**
3. **Cache expensive operations**
4. **Use database indexes**
5. **Minimize payload size**
6. **Implement request batching**
7. **Use compression**

Remember: Keep endpoints focused, validate all inputs, handle errors gracefully, and maintain consistent response formats.