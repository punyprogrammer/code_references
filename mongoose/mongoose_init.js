const mongoose=require('mongoose')
const { string } = require('yargs')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{

    useNewUrlParser:true,
useCreateIndex:true,
    
})
// const User=mongoose.model('User',{
//     name:{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// })
// //Create a new instance of a user
// const me =new User({
//     name:"Amardeep",
//     age:26
// })
//save the instance of the model
// me.save().then(()=>{ console.log(me)}).catch((err)=>{console.log("Error",err)})
//Creating a task object 
const Task=mongoose.model('Task',{
    decription:{
        type:String
    },
    completed:{
        type:Boolean
    }
})
//creating a new instance of  a task 
const task=new Task({
    decription:'Clean all the dirty bemurda in the house',
    completed:true
})
//saving the instance of the model 
task.save().then(()=>{console.log(task)}).catch((err)=>{console.log(err)})

