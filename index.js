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

/*
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
*/
/*
const express=require('express');

const app=express();


app.get('',(req,res)=>
{
    res.send("Hello this Home Page");
})
app.get('/help',(req,res)=>
{
    res.send("Hello this Help Page");
})

app.listen(8000);
*/
//User of Response Object
/*
const express=require('express');

const app=express();

app.get('',(req,res)=>
{
    res.send("Hello This is my Page"+req.query.name);
});

app.listen(8000);
*/

/*
const express=require('express');

const app=express();

app.get('',(req,res)=>
{
    res.send('<h1>This is a Home Page<h1> <a href=/about>Go to About Page</a>');

})
app.get('/about',(req,res)=>
{
    res.send('<h1>This is a About Page Page<h1> <input type=text></input> <a href="/" >Go to About Page</a>');

})

app.listen(8000);
*/

/*
const express=require('express');
const path=require('path');

const app=express();
const filepath=path.join(__dirname,'public');

//app.use(express.static(filepath));
app.get('',(_,res)=>
{
    res.sendFile(`${filepath}/index.html`)

});
app.get('/info',(_,res)=>
{
    res.sendFile(`${filepath}/about.html`)

});
app.get('*',(_,res)=>
{
    res.sendFile(`${filepath}/notfound.html`)

});

app.listen(8000);
*/
/*
const express=require('express');

const app=express();
app.set('view engine','ejs');

app.get('/profile',(_,res)=>
{
    
    const user = {
        name:"RamRaje",
        Email:"Abc@gmail.com",
        Mobileno:"009707",
        skill:['C','C++','PHP']
    }
    
    res.render('profile',{user})
})
app.listen(8000);
*/
/*
const { query, response } = require('express');
const express=require('express');

const app=express();

const reqFilter=(req,res,next)=>
{
    if(!req.query.age)
    {
        res.send("Please Provide Age")
    }
    else{
        next();
    }
}
app.use(reqFilter);
app.get('',(req,res)=>
{
    res.send("Hello This is my Page");
});

app.get('/profile',(req,res)=>
{
    res.send("Hello This is Profile Page");
});

app.listen(8000);
*/

const express=require('express');
const reqFilter=require('./middleware');
const app=express();
const route=express.Router();

route.use(reqFilter);
route.get('',(req,res)=>
{
    res.send("Hello This is my Page");
});

route.get('/profile',(req,res)=>
{
    res.send("Hello This is Profile Page");
});

app.use('/',route);

app.listen(8000);