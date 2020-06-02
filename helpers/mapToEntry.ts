const toEntry = (names:any) => (o:any) => 
  [names[o.name], o.module]

const mapToEntry = (modules:any, names:any) => 
  modules.map(toEntry(names))

export default mapToEntry