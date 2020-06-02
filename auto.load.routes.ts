export default (app:any, router: any) => 
  Object.keys(router).forEach((module:any) => {
    app.use(router[module].router.routes())
    app.use(router[module].router.allowedMethods())
  })

