import MODULES from './actions/index.ts'
import mapToEntry from '../../helpers/mapToEntry.ts'

const NAMES:any = {
  getUsers: 'find',
  getUserDetails: 'findOne',
  createUser: 'create',
  updateUser: 'update',
  deleteUser: 'remove'
}

export default Object.fromEntries(mapToEntry(MODULES, NAMES))

