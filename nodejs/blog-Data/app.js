

const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb://localhost:27017/";
// Create a new MongoClient
const client = new MongoClient(uri);
// const databaseName = 'blog'
async function run() {
  try {
    // let result = await client.connect()
    // db = result.db(databaseName);
    // collection = db.collection('posts')
    // let data =collection.insertMany([
    //     {
    //         title:"Avengers Movie",
    //         comments:[],
    //         users:[]
    //     },
    //     {
        //         title:"Justice League",
        //         comments:[],
        //         users:[]
        //     }
        // ])
        await client.connect()
   
    // collection = db.collection('users')
//   await  addPost(client,[
//         {
//             title:"Iron Man",
//             comments:[],
//             users:[]
//         }
//     ])
    
    // await addUser(client,[
    //     {
    //         name:"John",
    //         age:23,
    //         email:"john@doe.com"
    //     },
    //     {
    //         name:"jane",
    //         age:24,
    //         email:"jane@doe.com"
    //     }
    // ])
   
    await addComment(client,"Justice League",{comments:['Awesome Movie','Fantastic']})
    
    // Connect the client to the server (optional starting in v4.7)
    console.log("Connected successfully to server");
 
    // Establish and verify connection
   
  } finally {
    // Ensures that the client will close when you finish/error
    client.close();
  }
}
async function addUser  (client,newUser){
    try{
const result = await client.db('blog').collection('users').insertMany(newUser)

result.find().forEach(u=>
    console.log(`New User added with the id ${u.insertedId}`))

}catch(e){
console.log('user Exist');
}


}
async function addPost  (client,newUser){
    try{
const result = await client.db('blog').collection('posts').insertMany(newUser)
console.log(`New User added with the id ${result.insertedId}`);

}catch(e){
console.log(e);
}
}
async function addComment  (client,currTitle,newComment){    
  const result =  await client.db('blog').collection('posts').updateOne({title:currTitle},{$set: newComment})
  console.log(`${result.matchedCount} document(s) matched the query critria`);
  console.log(`${result.modifiedCount} document was/were updated`);
}

run().catch(console.dir);