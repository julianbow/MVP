import React from 'react';

const SpringList = ({ springList }) => {
    if (springList.length !== 0) {
        return (
            <ul className="springs">
                <h3>Hot Springs:</h3>
                {springList.map((spring) => {
                    return (
                    <li key={spring.id}>
                        <span>{spring.name === 'null' ? spring.name = 'Not Named' : spring.name}</span>
                    </li>
                    );
                })}
            </ul>
        );
    } else {
        return '';
    }
};

export default SpringList;