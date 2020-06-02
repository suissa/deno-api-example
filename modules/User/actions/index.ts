import { walkSync } from "https://deno.land/std/fs/mod.ts"
import getGlobals from "./getGlobals.ts"

const MODULES:any = []
const FORBIDEN = getGlobals(import.meta.url)


for await (const {name} of walkSync("./modules/User/actions")) {
  if (!FORBIDEN.includes(name)){
    MODULES.push({
      name: name.replace('.ts', ''),
      module: (await import('./' + name)).default
    })
  }
}

export default MODULES

