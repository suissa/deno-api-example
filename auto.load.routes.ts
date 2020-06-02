export default (app:any, router: any) => {
  Object.keys(router).forEach((r:any) => {
    // console.log({r})
    app.use(router[r].router.routes())
    app.use(router[r].router.allowedMethods())
  })
}
