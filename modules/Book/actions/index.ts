import { walkSync } from "https://deno.land/std/fs/mod.ts"
import getGlobals from "./../../../helpers/getGlobals.ts"
import getActionsPath from "./../../../helpers/getActionsPath.ts"

const MODULES:any = []
const FORBIDEN = getGlobals(import.meta.url)

const newModule = async (name:string) => ({
  name: name.replace('.ts', ''),
  module: (await import('./' + name)).default
})

for await (const {name} of walkSync(getActionsPath(import.meta.url))) 
  if (!FORBIDEN.includes(name))
    MODULES.push(await newModule(name))

export default MODULES

