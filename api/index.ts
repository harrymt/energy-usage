import Koa from 'koa';
import KoaRouter, { RouterContext } from 'koa-router';
import { getAllUsage, setup } from './src/usage-repository';

const PORT = process.env.PORT || 9000;

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

  // Allow CORs
  server.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
  });

  router.get('/', (ctx, next) => {
    ctx.body = 'OK';
    ctx.status = 200;
    next();
  });

  router.get('/healthcheck', (ctx, next) => {
    ctx.body = 'OK';
    ctx.status = 200;
    next();
  });

  router.get('/usage', async (ctx, next) => {
    const data = await getAllUsage();
    ctx.body = data;
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
