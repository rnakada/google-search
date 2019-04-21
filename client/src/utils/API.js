import axios from "axios";
const GOOGLE = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

    //Search for a book
    searchBook: (query) => {
        return axios.get(GOOGLE + query);
    },
    //Get all books
    getBooks: () => {
        return axios.get("/api/books");
    },
    //Saves a book to the database
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    //Deletes the book with the given ID
    deleteBook: (id) => {
        return axios.post("/api/books", bookData)
    }

};