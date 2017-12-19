var express = require("express");
var bodyParser = require("body-parser"); 
var watson = require("watson-developer-cloud");
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());

var conversation = watson.conversation({
  url: "https://gateway.watsonplatform.net/conversation/api",
  username: "993dba8c-1979-47bd-898d-7abb5c49349b",
  password: "7EdHOJncOuBn",
  version: "v1",
  version_date: '2016-05-26'
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Has Started!");
});


app.post("/message", function(req, res){
    const text = req.body.text;
    
    conversation.message({
        workspace_id: "41471c09-d2f8-49b8-b2d3-022b9e03c51d",
        input: {'text': text}},
        function(err, response) {
            if (err)
                console.log('error:', err);
            else
                console.log(JSON.stringify(response, null, 2));
                
                let url = "";
                let text = response.output.text[0]
                //find url
                const urlPatt=new RegExp("http.*");
                const urlArray = urlPatt.exec(response.output.text[0]);
                
                if(urlArray){
                    url = urlArray[0];
                    text = response.output.text[0].replace(url,"");
                }
                
                console.log("**")
                console.log(url)
                console.log("**")
                console.log(text)
                
                res.json({
                    "sender":"bot",
                    "data":text,
                    "url":url
                });
    });
});

app.get("/test/test/", function(req,res){
    res.send("goodpage");
})


