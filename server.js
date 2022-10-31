const Koa = require('koa')
const bodyParser = require ('koa-bodyParser');
const storeRoutes = require ('./routes/store.router');


const app = new Koa();

app.use(bodyParser());

app.use (storeRoutes.routes());
app.use (storeRoutes.allowedMethods())

let PORT = 4000
app.listen(PORT);
console.log('Application is running on port'+' '+PORT)

