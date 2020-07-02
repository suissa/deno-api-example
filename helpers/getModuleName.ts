const getModuleName = (path:any) => 
  path.split('/modules/')[1].split('/')[0]

export default getModuleName