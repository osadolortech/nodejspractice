console.log("start")
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
   const first = result
   readFile('./content/text.txt','utf8',(err,result)=>{
       if(err){
           console.log(err)
           return 
       }
       const second = result
       writeFile('./content/resultt-sync.txt', `here is the result: ${first} ${second}`, (err,result)=>{ 
        if(err){
            console.log(err)
            return
        }
        console.log("done with this task")
       })
   })
})

console.log("starting a new task")

