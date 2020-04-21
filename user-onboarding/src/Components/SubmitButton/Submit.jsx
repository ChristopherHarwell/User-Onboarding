import React from 'react';

const Submit = (props) => {
    return (
        <React.Fragment>
        <label htmlFor='submit'>
            <input
                type='button'
                name='submit'
                value='submit'
            />
        </label>
        <br/>
    </React.Fragment>
    );
};

export default Submit;