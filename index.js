//MODULARIZACION
let http = require('http')
let routes = require('./routes')


http
.createServer(function (request, response){
    let method = request.method.toLocaleLowerCase()

    let methodAllowed = typeof routes[method]

    if (methodAllowed === 'undefined') {
        return response.end('Method not allowed')
    }
    let path = request.url.toLocaleLowerCase().replace('/','')

    let routePath = typeof routes[mehod][path]

    if (routePath === 'undefined') {
        return response.end('Not found')
    }

    

    response.write(routes[method][path].html)

    response.end()
})


        
    //if(request.method === 'GET'){
        //if (request.url ==='/home' ){
            //response.write('<h1>Home</h1>')
        //}else if (request.url ==='/contact' ){
            //response.write(form)
       // }
    //}else if(request.method === 'POST'){

    //}else {
       // response.writeHead(404)
    //}


    //console.log(request.url)
    //console.log(request.method)

    
   
   
    //response.write(`<h1>hello World</h1> 
    
    
    


.listen(3000)

