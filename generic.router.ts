export default <any>{
  'get': (router: any, route: any) => router.get(route.path, route.fn),
  'post': (router: any, route: any) => router.post(route.path, route.fn),
  'put': (router: any, route: any) => router.put(route.path, route.fn),
  'delete': (router: any, route: any) => router.delete(route.path, route.fn)
}
