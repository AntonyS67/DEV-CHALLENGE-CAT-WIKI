import React from 'react'

function ScoreIndicator({name,score}) {
    let items = [];
    const maxPainted = 5;
    const paintedMore = maxPainted - score;

    for (let index = 0; index < score; index++) {
        items.push(
            <div
                key={`${name}-${index}-${new Date().getMilliseconds()+new Date().getTimezoneOffset()}`}
                className="description-score"
                style={{backgroundColor:'#544439'}}
            >
            </div>
        )
    }

    for (let index = 0; index < paintedMore; index++) {
        items.push(
            <div
                key={`${name}-${index}-${new Date().getMilliseconds()+new Date().getSeconds()}`}
                className="description-score"
                style={{backgroundColor:'#e0e0e0'}}
            >
            </div>
        )
    }

    return (
        <div className="score-container">
            {items}
        </div>
    )
}

export default ScoreIndicator
