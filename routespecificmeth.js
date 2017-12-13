let express =require('express');
let s=express();
let bodyparser=require('body-parser');
s.use(bodyparser());

s.get('/',function(req,res){
  
res.sendFile(__dirname+"/"+'form.html');
});

s.post('/postmeth',function(req,res){
   

   username=req.body.user_name,
    password=req.body.pwd;
  if(!username){res.send("error")}  

res.send("username is :" + username );
    
});

s.use(function(err,req,res,next){
    if(err){
        res.send("ERROR");
    }
    });

s.listen(8000,function(){
    console.log("listetning 8000");
});