import { Router } from "https://deno.land/x/oak/mod.ts";

import genericRouter from "./../../generic.router.ts";
import ROUTES from "./routes.config.ts";

const to = (Router:any) => (router: any, route: any) => 
  genericRouter[route.method](Router, route)

// const router = ROUTES.reduce(to(new Router()), {});

export default ROUTES.reduce(to(new Router()), {});

