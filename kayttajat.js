const mysql = require("mysql");

const yhteys = mysql.createConnection({
                                        "host"     : "localhost",
                                        "user"     : "root",
                                        "password" : "",
                                        "database" : "mfc"
                                    });

yhteys.connect((err) => {
    if(!err) {

        console.log("Yhteys avattu"); 

    } else {

        throw `Virhe yhdistettäessä:`;   

    }
});

module.exports = {

    "haeTreenit" : (callback) => {

        let sql = `SELECT * FROM kayttajat`;

        yhteys.query(sql, (err, data) => {

            callback(err, data);
        });
    },

    "tallennaTreenit" : (kayttaja, callback) => {

        if (kayttaja.Nimi == "" ) {

            (kayttaja.Nimi = "Lisää nimi!");

        }

        let sql = ("INSERT INTO kayttajat (`Id`, `Nimi`, `laji`, `kommentti`) VALUES ( ?, ?, ?, ?) ");

        yhteys.query(sql,[kayttaja.Id, kayttaja.Nimi, kayttaja.Laji, kayttaja.Kommentti, kayttaja.Pvm ], (err) => {

            callback(err);
        });
    }
    


}