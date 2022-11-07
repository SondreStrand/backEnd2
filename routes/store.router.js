const Router = require('@koa/router');
let mysql = require('mysql')
const cors = require ('@koa/cors');
const router = new Router({
    prefix: '/store'
});

router.use (cors())

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactformdatabase'
});
    
var connectDbFunc =  () => {
    connection.connect(function(err){
    if (err) {
        console.error('Error connecting to database' + err.message)
        return;
    }
        console.log('Connected to database' + connection.threadId)
    });
}
connectDbFunc()

let model1 = "SELECT `model`, `price`, `description`, `image` FROM `products` WHERE `id` =1";
let model2 = "SELECT `model`, `price`, `description`, `image` FROM `products` WHERE `id` =2";
let model3 = "SELECT `model`, `price`, `description`, `image` FROM `products` WHERE `id` =8";
let allModels = "SELECT `model`, `price`, `description`, `image`, `id` FROM `products`";

var queryValues = [];
var queryValues2 = [];
var queryValues3 = [];
var queryValues4 = [];

var queryData = connection.query(model1, function(err, result){
    if (err) throw err;
    // console.log(result)    
    result.forEach(item => {
        queryValues.push({
          model:item.model,
          price:item.price,
          description:item.description,
        })
        console.log(queryValues)
    });           
    return queryData
});

var queryData2 = connection.query(model2, function(err, result){
    if (err) throw err;
    // console.log(result)      
    result.forEach(item => {
        queryValues2.push({
          model:item.model,
          price:item.price,
          description:item.description,
        })
        console.log(queryValues2)
    });           
    return queryData2
});

var queryData3 = connection.query(model3, function(err, result){
    if (err) throw err;
    // console.log(result)     
    result.forEach(item => {
        queryValues3.push({
          model:item.model,
          price:item.price,
          description:item.description,
        })
        console.log(queryValues3)
    });           
    return queryData3
});

var queryDataAllModels = connection.query(allModels, function(err, result){
    if (err) throw err;
    // console.log(result)     
    result.forEach(item => {
        queryValues4.push({
          model:item.model,
          price:item.price,
          description:item.description,
          id: item.id,
        })
        console.log(queryValues4)
    });           
    return queryDataAllModels
});

router.get('/model1', ctx => {  
   ctx.body = JSON.stringify(queryValues)
});

router.get('/model2', ctx => {
    ctx.body = JSON.stringify(queryValues2)  
});

router.get('/model3', ctx => {
    ctx.body = JSON.stringify(queryValues3)
});

// let models = [
//     {model: 'model1', price:10000, description: 'Sykkel med gode egenskaper - for deg som vil ha kvalitet og god pris'},
//     {model: 'model2', price:17000, description: 'For deg som ønsker bedre kvalitet og som ønsker fart og spenning'},
//     {model: 'model3', price:25000, description: 'Vår beste sykkel - kompromissløs - for deg som ønsker det beste'}
// ]
// let bicycles = JSON.stringify(models)

router.get ('/models', ctx => {
    ctx.body = JSON.stringify(queryValues4)
})



router.post('/', ctx => {
    ctx.body = 'Test2 - post'
    
});


connection.end()
module.exports = router;




