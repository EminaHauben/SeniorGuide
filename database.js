const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE whatsapp (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT UNIQUE, 
            url TEXT, 
            CONSTRAINT whatsapp_question_unique UNIQUE (question)
        )`,
        (err) => {
            if (err) {
                // Table already created
                console.log("whatsapp table creation error")
                console.log(err)
            }else{
                // Table just created, creating some rows
                var insertWhatsapp = 'INSERT INTO whatsapp (question, url) VALUES (?,?)'
                db.run(insertWhatsapp, ["How to download and install WhatsApp?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EWNE-Ym426dGlfOzYrgDtCsBFVFJTWwoneKVZ5llZhiN3w?e=RO0NRU"])
                db.run(insertWhatsapp, ["How to set up WhatsApp?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EfZvcr8HqrpIrsgFXG1X9-sBtBEfqrvi_-3FjhnAllNvUA?e=qeZD79"])
                db.run(insertWhatsapp, ["How to send a text message in WhatsApp?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EaBuNjr61EFErqK5brF8HToBNUXAR6ZP8oldnPqI7ZHnQA?e=GcnsWC"])
                db.run(insertWhatsapp, ["How to send a voice message in WhatsApp?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EVuw-l7fEkVAkXWZDKd-0GQBqhoss4WRiz0v0dRb8v1DDw?e=f5ueMs"])
                db.run(insertWhatsapp, ["How to call in WhatsApp?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/Ee8eAxFw7uRFvTj9T8fbD6ABUJa2nYG5d-qQnsWq8Src9Q?e=j6T71V"])
                db.run(insertWhatsapp, ["How to video call in WhatsApp?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EVeoXlF6j5lBuV1akoM1gfcBfHuTLTMGduXQpTwxEhq04g?e=b05xCU"])
                db.run(insertWhatsapp, ["How to send a photo in WhatsApp?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EYfVe-fB0bpCh3ZNp_Q37I4BlCEz9DxyqBNpdsTxr7Ah4A?e=hC1sjg"]) 
            }
        });  
        db.run(`CREATE TABLE photos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT UNIQUE, 
            url TEXT, 
            CONSTRAINT photos_question_unique UNIQUE (question)
        )`,
        (err) => {
            if (err) {
                // Table already created
                console.log("photos table creation error")
                console.log(err)
            }else{
                // Table just created, creating some rows 
                var insertPhotos = 'INSERT INTO photos (question, url) VALUES (?,?)'
                db.run(insertPhotos, ["How to send a photo in WhatsApp?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EYfVe-fB0bpCh3ZNp_Q37I4BlCEz9DxyqBNpdsTxr7Ah4A?e=hC1sjg"])
                db.run(insertPhotos, ["How to create a photo album?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/Eb7TLyls2klMvaMrW-Xh5xIBk9EwXkD2JMQyDqJ588kTwQ?e=87QdGL"])
                db.run(insertPhotos, ["How to add photos to an album?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EZKCHUL7aFpPogrvphkAQ5QBQBP_AFFtJZoRFpFEnJmlOg?e=eLimea"])
                db.run(insertPhotos, ["How to share photos from an album?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/ESxP7xitzJxOhewjhLrHGYYB0c66rzRYlbixD-TYNKhpNQ?e=nduuwu"])
                db.run(insertPhotos, ["How to view a memory?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/Ef7cLjjvo2FElTU8-NFWefAByvn2kY75akmSAiy2hB4naw?e=cn8mUJ"])
                db.run(insertPhotos, ["How to share memories?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EdfxdonZf0BArqPSr3wG4ZkBgIkimR_zbz1P7h5uiFV5fQ?e=2xLTCh"])
                db.run(insertPhotos, ["How to retrieve memories?","https://iubhfs-my.sharepoint.com/:b:/g/personal/emina_hauben_iu-study_org/EZjmCpqjhQJKnANGFOwzaq8BlGBKcDR3S8WUtRFXueUwkw?e=R56p00"])

                
            }
        }); 
    }
});


module.exports = db

