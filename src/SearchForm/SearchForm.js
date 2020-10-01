import React, { Component } from 'react';
import FilterResults from './FilterResults';
import './SearchForm.css';

class SearchForm extends Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.handleUpdate(e.target.searchInput.value)
    }
    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                Search:
                <input
                    type="text"
                    id="searchInput"
                    name="searchInput"
                />
                <button type="submit">Search</button>
                <FilterResults
                    handlePrintType={this.props.handlePrintType}
                    handleBookType={this.props.handleBookType}
                />
            </form>
        )
    }

}

export default SearchForm;