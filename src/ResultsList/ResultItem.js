import React from 'react';
import './ResultItem.css';

function ResultItem(props) {
    return (
        <div className="resultItem">
        
            <div className="resultItem__row">
                <div className="resultItem_title">
                    <a
                        href={props.volumeInfo.infoLink}
                        target="_blank">
                        <h2>{props.volumeInfo.title}</h2>
                    </a>
                </div>
                <p>{props.volumeInfo.authors[0]}</p>
            </div>
            <div>
            </div>
            <div>{props.volumeInfo.description}</div>
        </div>
    )

}

export default ResultItem;