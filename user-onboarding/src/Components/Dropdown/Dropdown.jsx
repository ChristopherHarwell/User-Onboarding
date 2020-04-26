import React from 'react';

const Dropdown = props => {
    return(
        <label htmlFor='role'>
            <select id='role' name='role' onChange={props.onChange}>
                <option value='Front-End Engineer'>Front-End Engineer</option>
                <option value='Back-End Engineer'>Back-End Engineer</option>
                <option value='Full-Stack Engineer'>Full-Stack Engineer</option>
            </select>
            <br/>
        </label>
    );
};

export default Dropdown;