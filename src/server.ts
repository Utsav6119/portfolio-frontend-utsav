import { CommonEngine } from '@angular/ssr/node'
import { render } from '@netlify/angular-runtime/common-engine.mjs'

const commonEngine = new CommonEngine()

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
  // Example API endpoint (optional)
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from API' });
  // }

  return await render(commonEngine)
}
