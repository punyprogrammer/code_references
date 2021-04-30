// const 
const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const ObjectID=mongodb.ObjectID
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'
//creates a new id
const id= new ObjectID()
console.log(id)
//prints the time when the id was generated 
console.log(id.getTimestamp())
//To get the data stored in binary form
console.log(id.id)
//To get the data stored in hex string
console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true },(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database')
    }
    const db= client.db(databaseName);
    //Find single user
    db.collection('users').findOne({_id:new ObjectID("608a47d4aca2642e4023b7bd")},(error,response)=>{
    if(error) console.log(error)
    else console.log(response)
    })
//     Find multiple users having the age of 20
    db.collection('users').find({age:20}).toArray((error,response)=>{
        if(error)
            {
                return  console.log("No valid users found")
            }
        else 
         console.log(response);
    })
    db.collection('users').find({age:20}).count((error,count)=>{
        if(error)
            {
                return  console.log("No valid users found")
            }
        else 
         console.log(count);
    })


})
