import { walkSync } from "https://deno.land/std/fs/mod.ts"
import getGlobals from "./../../../helpers/getGlobals.ts"
import getActionsPath from "./../../../helpers/getActionsPath.ts"

const MODULES:any = []
const FORBIDEN = getGlobals(import.meta.url)

for await (const {name} of walkSync(getActionsPath(import.meta.url))) {
  if ( !FORBIDEN.includes(name) ){
    MODULES.push({
      name: name.replace('.ts', ''),
      module: (await import('./' + name)).default
    })
  }
}

export default MODULES

