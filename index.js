import express from "express" ;

const app = express() ;
const port=3000 ;


app.use("/",(req,res)=>{
  res.json({message:"Hello fro express app"}) ;
})
app.listen(3000,()=>{
  console.log("server is running on port 3000") ;
})
