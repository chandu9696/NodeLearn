/*http=require('http');//import http module(inbuilt module)

http.createServer(function(req,res)
{
    res.write(JSON.stringify({name:"tt"}));//Write date using response objevt
    res.end();//Tell server we are end
}).listen(8000);//Listen to this port(we have ip adderess(locahost in this case): 8000 is port)*/
//var colors = require('colors');
 
//console.log('hello'.blue);
http=require('http');//import http module(inbuilt module)
data=require('./data')
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-type':'application/json'});
    res.write(JSON.stringify(data));//Write date using response objevt
    res.end();//Tell server we are end
}).listen(8000);//Listen to this port(we have ip adderess(locahost in this case): 8000 is port)*/