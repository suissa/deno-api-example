const NAMES:any = {
  getUsers: 'find',
  getUserDetails: 'findOne',
  createUser: 'create',
  updateUser: 'update',
  deleteUser: 'remove'
}

const toEntry = (names = NAMES) => (o:any) => 
  [names[o.name], o.module]

const mapToEntry = (modules:any) => modules.map(toEntry(NAMES))

export default mapToEntry