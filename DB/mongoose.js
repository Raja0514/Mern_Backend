const mongoose=require('mongoose')
mongoose
 .connect('mongodb://root:root@test-shard-00-00.mxh9k.mongodb.net:27017,test-shard-00-01.mxh9k.mongodb.net:27017,test-shard-00-02.mxh9k.mongodb.net:27017/?ssl=true&replicaSet=atlas-7pqd3j-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then((db) => console.log("DB Connected"))
 .catch((err) => console.log(err));

 module.exports=mongoose;
