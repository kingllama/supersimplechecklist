const http = require('http')
const url = require('url');
const fs = require('fs')

var checklist_path = "/Users/Keithh/Documents/Code/supersimplechecklist/templates/checklist.html"

const s = http.createServer((req,res)=>{
    var user_url = url.parse(req.url).pathname
    console.log(user_url)
    open_file = fs.readFile(checklist_path, {encoding:"utf8"},(err,data)=>{
        if (err) throw err;
        res.end(data)
    })

})

s.listen(5000,"",()=>{console.log("Running on port 5000")})