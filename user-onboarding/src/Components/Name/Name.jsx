import React from 'react';

const Name = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='name'>
                Name:
                <input
                    type='text'
                    name='name'
                />
            </label>
            <br/>
        </React.Fragment>
    );
};

export default Name;