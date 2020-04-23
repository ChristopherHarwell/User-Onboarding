import React from 'react';

const CheckBox = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='checkbox'>
                <input
                    id='checkbox'
                    type='checkbox'
                    name='checkbox'
                    value={props.value}
                    onChange={props.input}
                />
                I agree to the terms and conditions
            </label>
            <br/>
        </React.Fragment>
    );
};

export default CheckBox;