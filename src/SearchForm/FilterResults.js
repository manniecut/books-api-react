import React, { Component } from 'react';
import './FilterResults.css';

class FilterResults extends Component {
    handlePType() {
        this.props.handleUpdate(target.print_type.value)
    }
    handleBType() {
        this.props.handleUpdate(target.book_lang.option)
    }
    render() {
        return (
            <form id="filters" className="filters">
                Print Type:
                <select name="print_type" id="print_type" onChange={this.handlePType}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
               Book Language:
                <select name="book_lang" id="book_lang" onChange={this.handleBType}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                </select>
            </form>
        )
    }
}

export default FilterResults;