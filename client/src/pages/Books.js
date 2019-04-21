import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/Search";
import Container from "../components/Container";
import ResultBox from "../components/ResultBox";

class Books extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    search: ""
  };

  // componentDidMount() {
  //     this.loadBooks();
  // };

  // loadBooks = () => {
  //     API.getBook()
  //         .then(res => this.setState({
  //             books: res.data,
  //             title: "",
  //             author: "",
  //             search: ""
  //         }))
  //         .catch(error => console.log(error));
  // };

  // searchBooks = query => {
  //     API.searchBooks(query)
  //         .then(res => this.setState({
  //             books: res.data.items,
  //             title: "",
  //             author: "",
  //             search: ""
  //         }, console.log(res.data.items)))
  //         .catch(error => console.log(error));
  // };

  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
          },
          console.log(res.data.items)
        )
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(error => console.log(error));
  };

  saveBook = bookData => {
    API.saveBook(bookData)
      .then(res => alert("Book has been saved!"))
      .catch(error => console.log(error));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <Jumbotron />
        <SearchBox
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        
          {this.state.books.map((book) => {
            return (
              <ResultBox
              key={book.id} 
              title={book.volumeInfo.title} 
              author={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No Author's Listed"}
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : book.volumeInfo.imageLinks}
              description={book.volumeInfo.description}
              />
            )
          })}

      </Container>
    )
  }
}
export default Books;