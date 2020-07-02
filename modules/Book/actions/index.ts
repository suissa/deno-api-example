import { walkSync } from "https://deno.land/std/fs/mod.ts"
import getGlobals from "./../../../helpers/getGlobals.ts"
import getModuleName from "./../../../helpers/getModuleName.ts"

const MODULES:any = []
const FORBIDEN = getGlobals(import.meta.url)
const MODULE_NAME = getModuleName(import.meta.url)
const ACTIONS_PATH = `./modules/${MODULE_NAME}/actions`

for await (const {name} of walkSync(ACTIONS_PATH)) {
  if ( !FORBIDEN.includes(name) ){
    MODULES.push({
      name: name.replace('.ts', ''),
      module: (await import('./' + name)).default
    })
  }
}

export default MODULES

