const uniqid = require('uniqid'); 
const yargs = require('yargs')
const users = require('./utils.js')

// const yargs = yargs()

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'add a new user',
    builder:{
       id:{
        describe:'user ID',
        // demandOption:true,
        
       } ,
       name:{
        describe:'user Name',
        demandOption:true,
        type: 'string'
       },
       email:{
        describe:'user email',
        demandOption:true,
        type: 'string'
       } 
    },
    handler: function(argv){
      users.addUser(argv.id,argv.name,argv.email)
    }
})
yargs.command({
    command:'remove',
    describe:'remove a user',
    id:{
        describe:'user ID',
        demandOption:true,
        
       } ,
    handler: function(argv){
        users.removeUser(argv.id)
    }
})
yargs.command({
    command:'read',
    describe:'read a user',
    id:{
        describe:'user ID',
        demandOption:true,
        
       } ,
    handler: function(argv){
        users.readUser(argv.id)
    }
})
yargs.command({
    command:'update',
    describe:'update a user',
    id:{
        describe:'user ID',
        demandOption:true,
        
       } ,
       newName:{
        describe:'new name',
        demandOption:true,
       },
    handler: function(argv){
        users.updateUser(argv.id,argv.newName)
    }
})



console.log(yargs.argv);
yargs.parse()
