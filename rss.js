const request = require("request");
const xml2js = require("xml2js");

let haeUutiset = (url) => {

    return new Promise((resolve, reject) => {

        request(url, (err, response) => {

            if (err) {

                reject("Palvelimeen ei saada yhteyttä");

            } else {

                let data = response.body;

                xml2js.parseString(data, (err, result) => {

                    if (err) {

                        reject("Haettu data ei ole oikeassa muodossa");

                    } else {

                        let = kaikkiUudet = []

                        result.rss.channel.forEach((uudetUutiset) => {
                            uudetUutiset.item.forEach((a) => {               

                            let uudetOlio = {

                                            "otsikko" : a.title,
                                            "kuvaus" : a.description,
                                            "url" : a.link[a.link.length -1],
                                            "pvm" : a.pubDate,
                                            "aika" : a.pubDate
                                            
                                            }         
                                            
                            kaikkiUudet.push(uudetOlio)    
                            
                       });
                });

                  resolve(kaikkiUudet);

                }
            });
        }
    });
});

};

module.exports = {

    "uudetUutiset" : (callback) => {

    let url = "";

    haeUutiset(url).then((uudet) => {

        callback(null, uudet);

    }).catch((virhe) => {

        callback(virhe, null);
    });

}

}