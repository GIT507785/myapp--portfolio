const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()
const handlebar = require('handlebars')
const fs = require('fs')
const path = require('path')
const { error, log } = require('console')

const app =  express()
app.use(express.json())
app.use(cors())
const port = process.env.port || 8800

 console.log(process.env.EMAILID);
 
function sendMail (name , email , message){
 var  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.EMAILID, 
        pass:process.env.PASSWORD
    }
 })

const subject = 'Mail Regarding feedback'
const to = 'email'
const from = process.env.EMAILID
 const template = handlebar.compile(fs.readFileSync(path.join(__dirname, 'templates/feedback.hbs'), 'utf8'))
const html = template({name:name , message:message})

const mailOptions = {
    from ,
    to, subject,
    html
}

transporter.sendMail(mailOptions, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('mail sent')
    }
})
}

app.post('/' , (req, res)=>{
 const   {name , email , message} = req.body;
       sendMail(name , email, message) 

})

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`)
})



