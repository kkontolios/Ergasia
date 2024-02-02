const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs");
const collection = require("./mongo")
app.use(express.json())
var ObjectID = require('./mongo').ObjectID;
app.use(express.urlencoded({extended:false}))
const mongo = require('mongodb');

const main_path = path.join(__dirname,'../')
const css_path = path.join(__dirname, '../css')
const js_path = path.join(__dirname, '../js')

app.set("view engine","hbs")
app.set("views",main_path)

app.use(express.static(css_path))
app.use(express.static(js_path))

const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res) => {
    res.render("index.hbs")
})

app.get('/login', (req, res) => {
    res.render('/')
})



//register


app.post("/reg",async(req,res) => {
    const data = 
    {
        email: req.body.email,
        password: req.body.password
    }
    await collection.insertMany([data])
    res.render("index")
})


//login

app.post("/",async(req,res) => {
    try
    {
        console.log(req.body.email)
        console.log(req.body.password)
        const check = await collection.findOne({email: req.body.email})
        //console.log(ObjectID())
        if(check.password === req.body.password)
        {
            res.status(201).render("index", 
                {
                    email: req.body.email,
                    password: req.body.password,

                }
            )
            console.log("Logged In")
        }
        else
        {
            res.send("Wrong Password")
        }
    }
    catch(e)
    {
        res.render("index.hbs")
        //res.send("Wrong Details")
        console.log("Wrong Details");
    }
})

app.get('/logout',(req, res) => {
    req.session.destroy(function(err){
       if(err)
       {
            console.log("err");
            res.send("Error")
       }
       else
       {
            res.render('base,',{title: "Express",logout:"logout successfully"})
       } 
    })
  });

app.listen(3000, () => {
    console.log("Server Started");
})