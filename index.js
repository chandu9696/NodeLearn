/*http=require('http');//import http module(inbuilt module)

http.createServer(function(req,res)
{
    res.write(JSON.stringify({name:"tt"}));//Write date using response objevt
    res.end();//Tell server we are end
}).listen(8000);//Listen to this port(we have ip adderess(locahost in this case): 8000 is port)*/
//var colors = require('colors');
 
//console.log('hello'.blue);
/*
http=require('http');//import http module(inbuilt module)
data=require('./data')
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-type':'application/json'});
    res.write(JSON.stringify(data));//Write date using response objevt
    res.end();//Tell server we are end
}).listen(8000);//Listen to this port(we have ip adderess(locahost in this case): 8000 is port)*/

//Add command input
/*
fs=require('fs');

const input=process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove')
{
    fs.unlinkSync(input[3]);
}
else
{
    console.log('invalid input')
}
*/

a=10
b=0

let waitingdata=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(30);//it can be anyting object array
    },2000);
    
})

waitingdata.then((data)=>
{
    console.log(a+data);
})