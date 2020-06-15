import app from './config/app';

const port = process.env.PORT || 3000; 
console.log(port)

app.listen(port, function(){
    console.log('Server ON in port ' + port)
})