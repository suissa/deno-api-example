const __filename = import.meta.url.split('/').reverse()[0]

const getGlobals = (url:any) => [
  '.DS_Store',
  __filename,
  ...url.split('/').reverse().slice(0, 2)
]

export default getGlobals