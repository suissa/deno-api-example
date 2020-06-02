import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";

import Routes from "./modules/index.ts";
import autoLoader from './auto.load.routes.ts'
import notFound from "./modules/User/actions/notFound.ts";
import errorMiddleware from "./middlewares/error.ts";

const app = new Application();

autoLoader(app, Routes)

app.use(errorMiddleware)
app.use(notFound)

console.log(`Listening on ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
