import React, { Component } from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "hitchhiker's guide",
      booksResponse: [],
      printType: "all",
      bookLang: "en"
    }
  }
  setSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
    this.fetchFunction();
  }
  setPrintType = (printOption) => {
    this.setState({
      printType: printOption
    })
  }
  setBookType = (lang) => {
    this.setState({
      bookLang: lang
    })
  }
  fetchFunction = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}&langRestrict=${this.state.bookLang}&key=AIzaSyBOeruDKJNHHtogFGbr2xL3Op_BrBv0qGU`
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const dataItems = data.items
        this.setState({
          booksResponse: dataItems
        })
        console.log('fetched vvv')
        console.log(dataItems)
      });
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.fetchFunction();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    return (
      <main className="App">
        <Header />
        <SearchForm
          handleUpdate={term => this.setSearchTerm(term)}
          handlePrintType={printOption => this.setPrintType(printOption)}
          handleBookType={lang => this.setBookType(lang)}
        />
        <ResultsList
          booksResponse={this.state.booksResponse}
        />
      </main>
    );
  }
}

export default App;
