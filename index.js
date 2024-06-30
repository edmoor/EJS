import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const today = new Date();
const dayOfWeek = today.getDay();
const nameWeekList = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    var nameWeek = nameWeekList[dayOfWeek];
    req.nameWeek = nameWeek;
    let adv = "it's time to work hard"

    if (nameWeek === "Domingo" || nameWeek === "Sabado") {
        adv = "it's time relax"

    }
    res.render(`index.ejs`, {dayType: nameWeek, advice: adv});
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
