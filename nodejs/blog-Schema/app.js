
    db.blog.find().pretty()
    db.comments.find().pretty()
    db.Post.find().pretty()
    db.user.find().pretty()

//!=================================>

   


     db.blog.find().pretty()
[
  {
    _id: ObjectId("6396fa7247ae6b81c6d5e4e9"),
    postsId: [
      ObjectId("6396f68547ae6b81c6d5e4e3"),   
      ObjectId("6396f68547ae6b81c6d5e4e4"),   
      ObjectId("6396f68547ae6b81c6d5e4e5")    
    ]
  },
  {
    _id: ObjectId("6396fa7247ae6b81c6d5e4ea"),
    commentsId: [
      ObjectId("6396f5d147ae6b81c6d5e4e0"),   
      ObjectId("6396f5d147ae6b81c6d5e4e1"),   
      ObjectId("6396f5d147ae6b81c6d5e4e2")    
    ]
  },
  {
    _id: ObjectId("6396fa7247ae6b81c6d5e4eb"),
    users: [
      ObjectId("6396f80747ae6b81c6d5e4e6"),
      ObjectId("6396f80747ae6b81c6d5e4e7"),
      ObjectId("6396f80747ae6b81c6d5e4e8")
    ]
  }
]
Users> db.user.find().pretty()
[
  {
    _id: ObjectId("6396f80747ae6b81c6d5e4e6"),
    name: 'john',
    age: 34,
    email: 'john@doe.com',
    comments: [ ObjectId("6396f5d147ae6b81c6d5e4e0") ]
  },
  {
    _id: ObjectId("6396f80747ae6b81c6d5e4e7"),
    name: 'jane',
    age: 33,
    email: 'jane@doe.com',
    comments: [ ObjectId("6396f5d147ae6b81c6d5e4e1") ]
  },
  {
    _id: ObjectId("6396f80747ae6b81c6d5e4e8"),
    name: 'jax',
    age: 22,
    email: 'jax@doe.com',
    comments: [ ObjectId("6396f5d147ae6b81c6d5e4e2") ]
  }
]
Users> db.Post.find().pretty()
[
  { _id: ObjectId("6396f68547ae6b81c6d5e4e3"), title: 'Marvel Movie' },
  { _id: ObjectId("6396f68547ae6b81c6d5e4e4"), title: 'IronMan Movie' },
  { _id: ObjectId("6396f68547ae6b81c6d5e4e5"), title: 'Avengers' }
]
Users>  db.comments.find().pretty()
[
  {
    _id: ObjectId("6396f5d147ae6b81c6d5e4e0"),
    text: 'Great Post',
    postId: ObjectId("6396f68547ae6b81c6d5e4e3")
  },
  {
    _id: ObjectId("6396f5d147ae6b81c6d5e4e1"),
    text2: 'Awesome',
    postId: ObjectId("6396f68547ae6b81c6d5e4e4")
  },
  {
    _id: ObjectId("6396f5d147ae6b81c6d5e4e2"),
    text3: 'Amazing',
    postId: ObjectId("6396f68547ae6b81c6d5e4e5")
  }
]