import express from 'express'
import rateLimit from 'express-rate-limit'

const app = express()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: (req, res) => res.end(`Too many requests, please try again later. Your IP: ${req.ip}`),
    headers: true, 
  });

app.use(limiter);

app.get('/',(req,res)=>{
    res.json('HomePage')
})

app.listen(3000,()=> console.log('server start : 3000'))
