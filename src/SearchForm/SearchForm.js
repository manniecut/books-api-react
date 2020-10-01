import React, { Component } from 'react';
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
            </form>
        )
    }

}

export default SearchForm;