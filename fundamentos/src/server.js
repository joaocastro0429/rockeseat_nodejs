import http from 'node:http'
const ussers=[]
const server=http.createServer((req,res)=>{
 const {method,url}=req

    if(method==='GET'&& url==='/users'){
        return res
        .setHeader('Content-type','application/json')
        .end(JSON.stringify(ussers))
    }
    if(method==='POST'&& url==='/users'){
        ussers.push({
            id:1,
            name:"joao",
            email:"joaocastro@gmail.com"
        })
        return res.end("Criacao de usuário")
    }
    console.log(method,url)
   
    return res.end('Hello world')
})

server.listen(3333)
