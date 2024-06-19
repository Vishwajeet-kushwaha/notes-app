const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/miniprojectscs', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected to MongoDB'))
 .catch(err => console.error('Error connecting to MongoDB:', err));

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  posts:[
    {type:mongoose.Schema.Types.ObjectId ,ref:'post'}
  ]
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;