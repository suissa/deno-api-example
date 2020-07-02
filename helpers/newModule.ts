const newModule = async (name:string) => ({
  name: name.replace('.ts', ''),
  module: (await import('./' + name)).default
})

export default newModule