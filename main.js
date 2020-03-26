const express = require("express");
const app = express();

const fs=require("fs");

const xml2js = require("xml2js");

const jwt = require("restify-jwt-community");

const bodyParser = require("body-parser");

const kayttajat = require("./models/kayttajat");

const rss = require("./models/rss");

const portti = 3113;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true}));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./public"));

    app.get("/", (req, res) => {

    kayttajat.haeTreenit((err, data) => {

        if (err) throw err;

    res.render("index" , {"kayttajat" : data});
    
        })

    });

    app.get("/aloita/", (req, res) => {

    kayttajat.haeTreenit((err, data) => {

        if (err) throw err;

    res.render("aloita" , {"aloita" : []});

        })

    });

    app.post("/tallenna/", (req, res) => {

        kayttajat.tallennaTreenit(req.body, (err) => {

            if (err) throw err;

            res.redirect("/");;

        }) 

    });

    app.get("/kaikki", (req, res) => {
        
     rss.uudetUutiset((virhe, uudet) => {  
         
        if (uudet.length > 5) {

            uudet.length = 5;

        }

        res.render("kaikki", {"uudet" : uudet, "virhe" : virhe});

    });
    
    });

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});
