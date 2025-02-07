//Basic Express Code
const express=require("express")
const app=express();
const { createtodo, updatetodo } = require("./datatypes");
const {todo}=require("./db")
const cors=require("cors")
app.use(cors());


app.use(express.json())


app.get("/todos",async function(req,res){
   const todos=await todo.find({});
   console.log("todos")
   res.json({
    todos
   })
});

app.post("/todo",async function(req,res){
     const title=req.body.title;
     const description=req.body.description;

     const result=createtodo.safeParse({title:title,description:description});
     if(result.success){
         //mongodb stuff
         //creating an instance of the model and then saving it to the db.
         const newtodo=new todo({
            title:title,
            description:description,
            completed:false
         })
        const result= await  newtodo.save();
        if(result){
            res.status(201).json({
                msg:"Todo Created"
            })
        }
        else{
            res.status(500).json({
                msg:"Internal Server Error"
            })
        }
     }
     else{
        res.status(400).json({
            msg:"Invalid Input"
        })
        return 
     }
});

app.put("/completed",async function(req,res){
     const updatedpayload=req.body;
     const parsedpayload=updatetodo.safeParse(updatedpayload);
     if(!parsedpayload.success){
        res.status(400).json({
            msg:"Wrong Input Type"
        })
        return;
     }
     else{
        //mongo db stuff
        await todo.update({
            _id:req.body.id   //for this id we need to update the completed field to true and _id is id in mongodb
        },{
            completed:true
        })
        res.status(200).json({
            msg:"Updated"
        })

     }
}); 

app.listen(3000);