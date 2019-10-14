import Koa from 'koa';
import KoaRouter, { RouterContext } from 'koa-router';
import { getAllUsage, setup } from './usage-repository';

const PORT = process.env.PORT || 9001;

const errorHandlingMiddleware = async (
  ctx: RouterContext,
  next: () => Promise<void>
) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
};

export default function createServer() {
  const server = new Koa();

  const router = new KoaRouter();

  // Allow CORS
  server.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
  });

  // Debug endpoint
  router.get('/', (ctx, next) => {
    ctx.body = { status: 200 };
    ctx.status = 200;
    ctx.req.headers['content-type'] = 'application/json';
    next();
  });

  router.get('/healthcheck', (ctx, next) => {
    ctx.body = { status: 200 };
    ctx.status = 200;
    ctx.req.headers['content-type'] = 'application/json';
    next();
  });

  router.get('/usage', async (ctx, next) => {
    try {
      const data = await getAllUsage();
      ctx.body = data;

      ctx.req.headers['content-type'] = 'application/json';
      ctx.status = 200;
    } catch (e) {
      ctx.body = { status: 500, reason: JSON.stringify(e.message) };
      ctx.status = 500;
    }

    next();
  });

  // Error handling
  server.use(errorHandlingMiddleware);
  server.use(router.allowedMethods());
  server.use(router.routes());

  return server;
}

if (!module.parent) {
  setup();
  const server = createServer();
  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
}
