import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';

export function middlewareNextAuth(middleware: NextMiddleware): NextMiddleware {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // await withAuth({});

    return middleware(request, event);
  };
}
