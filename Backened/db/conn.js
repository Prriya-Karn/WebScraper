const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://priyakarnrn51:RM5rsehGU6pANNNe@cluster0.hz6ep.mongodb.net/webscraper?retryWrites=true&w=majority&appName=Cluster0";
const connDb = async()=>{
    try{
        const connecttodb = await mongoose.connect(dbUrl);
        if(connecttodb){
            console.log("successfully connected to db")
        }else{
            console.log("not connected");
        }
    }catch(error){
        console.log(error)
    }   
}

connDb();