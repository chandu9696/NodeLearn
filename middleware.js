module.exports=reqFilter=(req,res,next)=>
{
    if(!req.query.age)
    {
        res.send("Please Provide Age")
    }
    else{
        next();
    }
}