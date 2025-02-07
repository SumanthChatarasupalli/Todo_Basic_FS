const zod=require("zod")
/*
For post request we need to send the data as title and description
title:string 
description:string
This should be the body of the request and its data input format
*/

const createtodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

/*
For the put request we need the id
id:string
*/

const updatetodo=zod.object({
    id:zod.string(),
})

//Exporting the both zod validation objects.
//If we are exporting using module.exports then we need to use require in the other file to import the module.
module.exports={
    createtodo:createtodo,
    updatetodo:updatetodo
}