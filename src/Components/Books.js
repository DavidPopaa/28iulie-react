import React, {Component} from 'react';

class Books extends Component {
    state = {
        books: []
    }

    loadBooks = () => {
        fetch("http://127.0.0.1:8000/accounts/books/", {
            method: "GET",
            headers: {"Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(data => this.setState({books: data}))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Books</h1>
                {this.state.books.map(book => {
                    return <h3 key={book.id}>{book.title}</h3>
                })}
                <button onClick={this.loadBooks}>Fetch Books</button>
            </div>
        );
    }
   
};

export default Books;