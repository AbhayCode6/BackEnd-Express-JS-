const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req,res)=>{
    res.send("HOME PAGE")
})

app.use(express.urlencoded())
app.use(express.static('public'))
app.use((req,res,next)=>{
    console.log("request passed through middeware..")
    next()
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/submit', (req, res) => {
  console.log(req.body);  // ❌ Without express.urlencoded(), this will be undefined
  res.send("Form Submitted");
});

app.listen(3000,()=>{
    console.log("Server Started...")
})