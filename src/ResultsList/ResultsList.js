import React, { Component } from 'react';
import './ResultsList.css';
import ResultItem from './ResultItem';

class ResultsList extends Component {
    render() {
        return (
            <div>
                <ResultItem />
                <ResultItem />
                <ResultItem />
            </div>
        )
    }
}

export default ResultsList;