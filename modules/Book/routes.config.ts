import Controller from "./controller.ts"
const BASE = '/books'

export default [
  {
    method: 'get',
    path: BASE,
    fn: Controller.find
  },
  {
    method: 'get',
    path: BASE + '/:id',
    fn: Controller.findOne
  },
  {
    method: 'post',
    path: BASE + '',
    fn: Controller.create
  },
  {
    method: 'put',
    path: BASE + '/:id',
    fn: Controller.update
  },
  {
    method: 'delete',
    path: BASE + '/:id',
    fn: Controller.remove
  }
]