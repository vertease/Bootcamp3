//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there
module.exports = {
  db: {
    uri: 'mongodb+srv://test:WHBVunRNXoOaENp1@clusterfunk-khezf.mongodb.net/test?retryWrites=true&w=majority'
  }, 
  openCage: {
    key: '054bfa765f2f4175a80d6ee1e3d81868' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};

//WHBVunRNXoOaENp1