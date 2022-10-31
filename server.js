const Koa = require('koa')
const bodyParser = require ('koa-bodyParser');
const storeRoutes = require ('./routes/store.router');
const cors = require ('cors');

const app = new Koa();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(bodyParser());
app.use (storeRoutes.routes());
app.use (storeRoutes.allowedMethods())
app.use (cors(corsOptions));

let PORT = 4000
app.listen(PORT);
console.log('Application is running on port'+' '+PORT)

