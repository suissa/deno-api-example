const getModuleName = (path:any) => 
  path.split('/modules/')[1].split('/')[0]

const getActionsPath = (url = import.meta.url) => 
  `./modules/${getModuleName(url)}/actions`

export default getActionsPath