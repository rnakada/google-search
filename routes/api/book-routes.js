const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

//Matches with "/api/book-routes"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

//Matches with "/api/book-routes/:id"
router.route("/:id")
    .get(booksController.findById)
    .delete(booksController.remove);

module.exports = router;
