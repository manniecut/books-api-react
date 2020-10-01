import React, { Component } from 'react';
import './FilterResults.css';

class FilterResults extends Component {
    handlePType(value) {
        console.log('handled P ' + value)
    }
    handleBType(value) {
        console.log('handled B ' + value)
    }


    render() {
        return (
            <div id="filters" className="filters">
                Print Type:
                <select name="print_type" id="print_type" onChange={e => this.handlePType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
               Book Language:
                <select name="book_lang" id="book_lang" onChange={e => this.handleBType(e.target.value)}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                </select>
            </div>
        )
    }
}

export default FilterResults;