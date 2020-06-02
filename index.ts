import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
// import router from "./modules/User/routes.ts";

import router from "./modules/routes.ts";
import autoLoader from './auto.load.routes.ts'
import notFound from "./modules/User/actions/notFound.ts";
import errorMiddleware from "./middlewares/error.ts";

const app = new Application();

autoLoader(app, router)

app.use(errorMiddleware)
app.use(notFound)

console.log(`Listening on ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
