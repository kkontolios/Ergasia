const db = "mongodb+srv://kkontolios:<4HynY9BkQWKSCWo8>@cluster0.zq0xeex.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const toId = mongoose.Types.ObjectId;

mongoose.set('strictQuery',false);
try
{
    mongoose.connect(db);
    console.log("Connected to MongoDB");
    
}
catch(error)
{
    console.error(error);
}

const LogInSchema = new mongoose.Schema({
    username:
    {
        type:String,
        required: true
    },
    email:
    {
        type:String,
        required: true
    },
    password:
    {
        type: String,
        required:true
    },
    permission:
    {
        type:String,
        required: true
    }
});

const collection = new mongoose.model("users",LogInSchema);
module.exports = collection;
//console.log(mongoose.Schema.ObjectId.user);
