import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ border: '2px solid orange', height: '100%'}}>
            {props.children}
        </div>
    );
};

export default Scroll;