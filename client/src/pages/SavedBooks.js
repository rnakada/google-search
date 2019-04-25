import React, { Component } from "react";
import API from "../utils/API";
import SavedJumbotron from "../components/SavedJumbotron";
import Container from "../components/Container";
import SavedBox from "../components/SavedBox";


class SavedBooks extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        API.getBook()
            .then(res => this.setState({
                books: res.data
            }, console.log(res.data)
            ))
            .catch(error => console.log(error));
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(error => console.log(error));
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(error => console.log(error));
    };

    render() {
        return (

            <Container>
                <SavedJumbotron />
                <SavedBox />

                {/* {this.state.books.map((book) => {
                    <SavedBox
                        key={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No Author's Listed"}
                        src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : book.volumeInfo.imageLinks}
                        description={book.volumeInfo.description}
                        saveBook={() => this.saveBook({
                            title: book.volumeInfo.title,
                            author: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No Author's Listed",
                            src: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : book.volumeInfo.imageLinks,
                            description: book.volumeInfo.description
                        })}
                    />
                }
                )} */}
            </Container>

        )
    }



}

export default SavedBooks;