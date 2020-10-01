import React, { Component } from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "law of one",
      booksResponse: [],
      filter: null
    }
  }
  setSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }
  componentDidMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(data => {
        const dataItems = data.items
        this.setState({
          booksResponse: dataItems
        })
      });
  }
  render() {
    return (
      <main className="App">
        <Header />
        <SearchForm
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.setSearchTerm(term)}
        />
        <ResultsList
          results={this.props.booksResponse}
        />
      </main>
    );
  }
}

export default App;
