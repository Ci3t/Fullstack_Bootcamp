const blog ={
    
    title:"Some Post",
    users:[{
        name:"john",
        age : "43",
        email:"john@doe.com"
    },
    {
         name:"jane",
        age : "34",
        email:"jane@doe.com"
    },
    {
         name:"jax",
        age : "22",
        email:"jax@doe.com"
    }
],
comments:[{
    text:"Great Post",
    text2:"Awesome",
    text3:"Amazing"
}]
}

const users =
    [{
        name:"john",
        age : "43",
        email:"john@doe.com"
    },
    {
         name:"jane",
        age : "34",
        email:"jane@doe.com"
    },
    {
         name:"jax",
        age : "22",
        email:"jax@doe.com"
    }
]

const comments =[{

    text:"Great Post",
    text2:"Awesome",
    text3:"Amazing"
}]

// users => commentID
// commentId => PostID
([
     {name:"john",age:34,email:"john@doe.com", comments:[ObjectId("6396f5d147ae6b81c6d5e4e0")] },{name:"jane",age:33,email:"jane@doe.com",comments:[ObjectId("6396f5d147ae6b81c6d5e4e1")]},{name:"jax",age:22,email:"jax@doe.com",comments:[ObjectId("6396f5d147ae6b81c6d5e4e2")]}
    ])
    '0': ObjectId("6396f68547ae6b81c6d5e4e3"),
    '1': ObjectId("6396f68547ae6b81c6d5e4e4"),
    '2': ObjectId("6396f68547ae6b81c6d5e4e5")

    ({_id:ObjectId("6396f5d147ae6b81c6d5e4e0")},
    {$set
        {postId:ObjectId("6396f68547ae6b81c6d5e4e3")}
    })

    ({_id:ObjectId("6396f5d147ae6b81c6d5e4e0")},{$set:{postId:ObjectId("6396f68547ae6b81c6d5e4e3")}})
    ({_id:ObjectId("6396f5d147ae6b81c6d5e4e1")},{$set:{postId:ObjectId("6396f68547ae6b81c6d5e4e4")}})
    ({_id:ObjectId("6396f5d147ae6b81c6d5e4e2")},{$set:{postId:ObjectId("6396f68547ae6b81c6d5e4e5")}})

    db.blog.find().pretty()
    db.comments.find().pretty()
    db.Post.find().pretty()
    db.user.find().pretty()