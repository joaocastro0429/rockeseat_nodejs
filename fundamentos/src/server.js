import http from 'node:http'

const server=http.createServer((req,res)=>{
 const {method,url}=req

    if(method==='GET'&& url==='/users'){
        return res.end("Listagem de usuário")
    }
    if(method==='POST'&& url==='/users'){
        return res.end("Criacao de usuário")
    }
    console.log(method,url)
   
    return res.end('Hello world')
})

server.listen(3333)
