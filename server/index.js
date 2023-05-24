// importing express
const path = require('path');
const express = require("express")

// define PORT for server
const PORT = 8000

//initialize express app
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));




//define route
app.po



app.get("/",(req,res)=>{
    res.send({message:"Testing Route/API!"});
    //send msg to clie
})


app.get("/api",(req,res)=>{
    res.json({message:"Testing Route/API!!"});
    //send msg to client
    
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

//start app
app.listen(PORT,()=>{

    console.log(`server is listening on PORT ${PORT}`)
})

//
