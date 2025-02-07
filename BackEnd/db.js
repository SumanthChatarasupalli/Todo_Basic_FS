const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://venkatasumanth04:rX6wLNgIo8zpeXs9@cluster0.sdigz.mongodb.net/todos")
/*
title:string,
description:string,
completed:boolean
*/
//defining the schema of the table
const todoschema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
//todos is table name and todoschema is the schema of the table and todo is the model of the table.
const todo=mongoose.model("todos",todoschema);

module.exports={
    todo:todo
}
