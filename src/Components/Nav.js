import React from 'react';

import "./Nav.css";

const Nav = props => {
    const onTab1 = () => {
        props.onChangeTab(1);
    }

    const onTab2 = () => {
        props.onChangeTab(2);
    }

    const onTab3 = () => {
        props.onChangeTab(3);
    }

    return (
        <div className="nav">
            <div className="navbar">
                <button className='button' onClick={onTab1}>About</button>
                <button className='button' onClick={onTab2}>Work</button>
                <button className='button' onClick={onTab3}>Contact</button>
            </div>
        </div>
    );
};

export default Nav;