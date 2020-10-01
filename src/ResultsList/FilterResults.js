import React from 'react';
import './FilterResults.css';

function FilterResults() {
    return (
        <form id="filters" className="filters">
            Print Type:
            <select name="print_type" id="print_type">
                <option value="option">Option</option>
            </select>
               Book Type:
            <select name="book_type" id="book_type">
                <option value="option">Option</option>
            </select>
        </form>
    )

}

export default FilterResults;