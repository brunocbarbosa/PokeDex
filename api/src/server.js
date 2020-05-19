const app = require('./config/app');

const port = process.env.PORT || 3000; 

app.listen(port, function(){
    console.log('Server ON in port ' + port)
})