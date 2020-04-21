import React from 'react';

const CheckBox = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='checkbox'>
                
                <input
                    type='checkbox'
                    name='checkbox'
                />
                I agree to the terms and conditions
            </label>
            <br/>
        </React.Fragment>
    );
};

export default CheckBox;