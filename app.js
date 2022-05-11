const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('welome to our home page')
}
if(req.url === '/about'){
    res.end('here is our short history')
}
res.end(`<h1>opps</h1> <p>cant find page</p> <a href="/">back home</a>`)
})

server.listen(5000)