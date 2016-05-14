const http = require('http')
const url = require('url');
const fs = require('fs')

const tmpl_path = "/Users/Keithh/Documents/Code/supersimplechecklist/templates/"

const s = http.createServer((req,res)=>{
    var user_url = url.parse(req.url).pathname
    switch(user_url){
        case "/about":
            res.end("This is the about page")
            break;
        default:
            fs.readFile(tmpl_path + "checklist.html", {encoding:"utf8"},(err,data)=>{
                if (err) throw err;
                res.end(data)
            });
    }

})

s.listen(5000,"",()=>{console.log("Running on port 5000")})