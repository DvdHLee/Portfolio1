import React from 'react';

import './Book.css';

const Book = props => {
    if (props.color === "dark") {
        return (
            <div className="book">
                <div className="cover" id="dark">
                    <p>{props.cover}</p>
                </div>
                <div className="page" id="light"></div>
                <div className="page" id="light"></div>
                <div className="page" id="light"></div>
                <div className="contentpage" id="light">
                    <a href="https://arizonacoderz.github.io/meal-chewser/" title="" target="_blank" rel="noreferrer noopener">{props.content}</a>
                </div>
                <div className="back-cover" id="dark"></div>
            </div>
        )
    } else {
        return (
            <div className="book">
                <div className="cover" id="light">
                    <p>{props.cover}</p>
                </div>
                <div className="page" id="dark"></div>
                <div className="page" id="dark"></div>
                <div className="page" id="dark"></div>
                <div className="contentpage" id="dark">
                    <a href="https://drive.google.com/file/d/1JBfBcH-nFSr1MUY4jOakQfIkx6GzTukU/view?usp=sharing" title="" target="_blank" rel="noreferrer noopener">{props.content}</a>
                </div>
                <div className="back-cover" id="light"></div>
            </div>
        )
    }
}

export default Book;