import React, { Component } from 'react';
import './ResultsList.css';
import FilterResults from './FilterResults';
import ResultItem from './ResultItem';

class ResultsList extends Component {
    render() {
        return (
            <div>
                <FilterResults />
                <ResultItem />
                <ResultItem />
                <ResultItem />
            </div>
        )
    }
}

export default ResultsList;