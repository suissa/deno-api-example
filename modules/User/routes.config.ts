import Controller from "./controller.ts"

export default [
  {
    method: 'get',
    path: '/users',
    fn: Controller.find
  },
  {
    method: 'get',
    path: '/users/:id',
    fn: Controller.findOne
  },
  {
    method: 'post',
    path: '/users',
    fn: Controller.create
  },
  {
    method: 'put',
    path: '/users/:id',
    fn: Controller.update
  },
  {
    method: 'delete',
    path: '/users/:id',
    fn: Controller.remove
  }
]