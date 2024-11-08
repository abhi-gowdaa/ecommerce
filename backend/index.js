const express=require('express')
const axios=require('axios')
const cors=require('cors')

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",async(req,res)=>{
    const ipp=req.ip
    res.send(ipp)
})

app.get("/product",async(req,res)=>{
    try{
      const response=await axios.get("https://dummyjson.com/products")
       res.send(response.data)
    }catch{
       console.log("error");
    }
})

 
app.get("/product/:productId",async(req,res)=>{
    const id=req.params.productId

    try{
      const response=await axios.get(`https://dummyjson.com/products/${id}`)
       res.send(response.data)
    }catch{
       console.log("error");
    }
})

app.post('/checkout', (req, res) => {
    
    const isPaymentSuccessful = Math.random() > 0.5;  
    
    if (isPaymentSuccessful) {
      res.send({ success: true, message: "Payment Successful!" });
    } else {
      res.send({ success: false, message: "Payment Failed. Please try again." });
    }
  });


app.listen("5000",()=>{
    console.log("server is running in port 5000");
});