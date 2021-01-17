const http = require('http');

const server= http.createServer((req,res) =>{
    res.end("Hello from my side");
     if(req.url =='/')
     {
         res.end("Hello from home side")
     }
    //console.log(req.url);
    if(req.url=="/about")
    {
        res.end("This is about page")
    }
    else if (req.url== "/contact"){
        res.end("Hello User this is contact page")
    }
    else{
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("<h1>Error 404 found means no page is there</h1>")
    }
    
} );

server.listen(7000,"localhost",()=>{
  console.log("sever is listing this port");
})
