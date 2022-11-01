const Router = require('@koa/router');
let mysql = require('mysql')
const cors = require ('@koa/cors');
const router = new Router({
    prefix: '/store'
});

router.use (cors())

router.get('/model1', ctx => {
    ctx.body = 'model1'
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'contactformdatabase'
    });
    
    var queryFunc = () => {
        connection.connect(function(err){
        if (err) {
            console.error('Error connecting to database' + err.message)
            return;
        }
        console.log('Connected to database' + connection.threadId)
        let model1 = "SELECT `model`, `price`, `description`, `image` FROM `products` WHERE `id` =1";

        connection.query(model1, function(err, result){
            if (err) throw err;
            // console.log(result)
            
            let queryValues = [];
            result.forEach(item => {
                queryValues.push({
                  model:item.model,
                  price:item.price,
                  description:item.description,
                })
                console.log(queryValues)   
                })
            });
            
        });
        // connection.end();
    }; 
    queryFunc()
    
});

router.get('/model2', ctx => {
    ctx.body = 'product2'
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'contactformdatabase'
    });
    
    var queryFunc = () => {
        connection.connect(function(err){
        if (err) {
            console.error('Error connecting to database' + err.message)
            return;
        }
        console.log('Connected to database' + connection.threadId)

        let model2 = "SELECT `model`, `price`, `description`, `image` FROM `products` WHERE `id` =2";

        connection.query(model2, function(err, result){
            if (err) throw err;
            // console.log(result)
            let queryValues2 = [];
            result.forEach(item => {
                queryValues2.push({
                  model:item.model,
                  price:item.price,
                  description:item.description,
                })
                console.log(queryValues2)
            })
        });
        // connection.end();
        }); 
    };
    queryFunc()
});

router.get('/model3', ctx => {
    ctx.body = 'product3'
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'contactformdatabase'
    });
    
    var queryFunc = () => {
        connection.connect(function(err){
        if (err) {
            console.error('Error connecting to database' + err.message)
            return;
        }
        console.log('Connected to database' + connection.threadId)
        let model3 = "SELECT `model`, `price`, `description`, `image` FROM `products` WHERE `id` =8";

        connection.query(model3, function(err, result){
            if (err) throw err;
            // console.log(result)
            let queryValues = [];
            result.forEach(item => {
                queryValues.push({
                  model:item.model,
                  price:item.price,
                  description:item.description,
                })
                console.log(queryValues)   
                })
            });
        });
        // connection.end();
    }; 
    queryFunc()
    
});

let models = [
    {model: 'model1', price:10000, description: 'Sykkel med gode egenskaper - for deg som vil ha kvalitet og god pris'},
    {model: 'model2', price:17000, description: 'For deg som ønsker bedre kvalitet og som ønsker fart og spenning'},
    {model: 'model3', price:25000, description: 'Vår beste sykkel - kompromissløs - for deg som ønsker det beste'}
]
let bicycles = JSON.stringify(models)

router.get ('/models', ctx => {
    ctx.body = bicycles
})

router.post('/', ctx => {
    ctx.body = 'Test2 - post'
    
});

module.exports = router;




