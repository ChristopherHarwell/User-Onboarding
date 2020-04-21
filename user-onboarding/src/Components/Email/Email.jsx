import React from 'react';

const Email = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='email'>
                Email:
                <input
                    type='text'
                    name='email'
                />
            </label>
            <br/>
        </React.Fragment>
    );
};

export default Email;