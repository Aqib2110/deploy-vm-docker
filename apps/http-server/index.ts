import express, { type Request, type Response } from 'express';
import {prismaClient} from 'db/client'
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post("/signup",async(req:Request,res:Response)=>{
    const {username,password} = req.body;
    try {
     const user = await prismaClient.user.create({
    data:{
        username,
        password
    }
  })
    res.json({
        message:"signup successfully",
        id:user.id

    })
    } catch (err) {
        res.json({
            error:err
        })
    }
})

app.post("/todo",async(req:Request,res:Response)=>{
   const {task,done,userId} = req.body;
   console.log(req.body);
   try {
await prismaClient.todo.create({
    data:{
        task,
        done,
        userId

    }
})
     res.json("todo added")
   } catch (error) {
     res.json({
        err:error
     })
   }
  
})
app.listen(3001);
