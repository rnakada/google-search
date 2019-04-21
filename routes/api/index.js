const router = require("express").Router();
const bookRoutes = require("./book-routes.js");

//Book routes
router.use("/book-routes", bookRoutes);

module.exports = router;