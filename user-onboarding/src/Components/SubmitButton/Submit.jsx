import React from 'react';

const Submit = (props) => {
    return (
        <button disabled={props.disabled}>Submit</button>
    );
};

export default Submit;