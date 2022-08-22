import React from 'react';

import './Book.css';

const Book = props => {
    return (
        <div className="book">
            <div className="cover">
                <p>Resume Link</p>
            </div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
            <a className="contentpage" href="https://drive.google.com/file/d/1JBfBcH-nFSr1MUY4jOakQfIkx6GzTukU/view?usp=sharing" title="" target="_blank" rel="noreferrer noopener">
                <img src='./assets/Icons/myresume.png' alt="my resume"></img>
            </a>
            <div className="back-cover"></div>
        </div>
    )
}

export default Book;