# AgendaFutbol
### corregir cache crash safari

Cambiar:
```typescript
const cachedResponse = await cache.match(req, this.config.cacheQueryOptions);
```
Por:
```typescript
let cachedResponse = Response | undefined;
try {
  cachedResponse = await cache.match(req, this.config.cacheQueryOptions);
} catch (error) {
  throw new SwCriticalError(`Cache is throwing while looking for a match: ${error}`);
}
```