// Create express app
const express = require("express")
const db = require("./database.js")

const app = express()

// Server port
const HTTP_PORT = 3000
app.use(express.json())
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Welcome to my backend API"})
});

app.get("/whatsapp", (req, res, next) => {
    var sql= "select question from whatsapp"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(400).json({"error":err.message});
          return; 
        }
        res.json({
            "message": "success",
            "name": rows
        })
    })
});

app.get("/photos", (req, res, next) => {
    var sql= "select question from photos"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
          return; 
        }
        res.json({
            "message": "success",
            "name": rows
        })
    })
});

app.get("/url/whatsapp", (req, res, next) => {
    var sql= "select url from whatsapp where question = ?"
    var params = [req.body.question]
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
          return; 
        }
        console.log(rows)
        
        res.json({
            "message": "success",
            "url": rows[0].url
        })
    })
});

app.get("/url/photos", (req, res, next) => {
    var sql= "select url from photos where question = ?"
    var params = [req.body.question]
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
          return; 
        }
        console.log(rows)
        
        res.json({
            "message": "success",
            "url": rows[0].url
        })
    })
});

app.use(function(req, res){
    res.status(404);
});

//Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});