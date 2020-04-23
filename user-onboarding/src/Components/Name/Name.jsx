import React from 'react';

const Name = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='name'>
                Name:
                <input
                    id='name'
                    type='text'
                    name='name'
                    value={props.value}
                    onChange={props.input}
                />
            </label>
            <br/>
        </React.Fragment>
    );
};

export default Name;