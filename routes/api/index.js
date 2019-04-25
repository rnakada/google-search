const router = require("express").Router();
const bookRoutes = require("./book-routes");

//Book routes
router.use("/book-routes", bookRoutes);

module.exports = router;