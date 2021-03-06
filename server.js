const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:username90@ds145456.mlab.com:45456/heroku_s0gbdf0d";

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    // Although this references the build folder... Use the public folder in client/public to publish images/css/any static file
    app.use(express.static("client/build"));
    // client/public is the actual folder to use for static files
}

// You really only need API routes and not any HTML routes if you are using REACTJS as the frontend
// ******************************API ROUTES INCLUDED HERE***************************** //

// app.get("/_api/non-cached", (req, res) => {
//     res.json({ random: Math.random() });
// });
// app.get("/api/cached", (req, res) => {
//     res.json({ random: Math.random() });
// });

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// will be broken in development...
app.get("*", function (req, res) {
    if (process.env.NODE_ENV === "production") {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    }
});

//Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
