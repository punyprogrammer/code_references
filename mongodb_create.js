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
    db.collection('users').insertOne(
        {
            name:'Amardeep',
            age:20
        },(error,result)=>{
            if(error) 
            console.log(error)
            else
            console.log(result.ops)
        }
    )
   // INSERTING MULTIPLE ENTRIES USING ARRAYS
    db.collection('users').insertMany([
        {
            name:"Andrew",
            age :28
        },
        {
            name:"Sunil",
            age:34 
        },
        {
            name:"Anirudh",
            age:40
        }
    ])
    db.collection('tasks').insertMany([
        {
            task:"Bathroom",
            description:"Bathroom saaf karo sahabjii"
        },
        {
            task:"dishes",
            description:"Bashon fashon sab maaj lo sahabji "
        }
    ],(error,res)=>{
        if(error) console.log(error)
        else console.log(res.ops)
    })


})
