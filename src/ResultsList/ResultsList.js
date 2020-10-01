import React, { Component } from 'react';
import './ResultsList.css';
import ResultItem from './ResultItem';

class ResultsList extends Component {
    render() {
        const results = this.props.booksResponse
            .map((result, i) => <ResultItem {...result} key={i} />)
        console.log(this.props);

        return (
            <div className="resultsList">
                {results}
            </div>
        )
    }
}

export default ResultsList;