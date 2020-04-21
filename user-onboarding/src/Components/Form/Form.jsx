import React, {useState} from 'react';
import Name from '../Name/Name';
import Email from '../Email/Email';
import Password from '../Password/Password';
import CheckBox from '../TermsOfService/CheckBox';
import Submit from '../SubmitButton/Submit';

const Form = (props) => {

    // Form State
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        checkbox: true,
        submit: '',
    });

    // handle state when form is submitted
    const sumbitForm = event => {
        event.preventDefauly();
        console.log('form submitted!');
    };

    // keep track of input state
    const inputChanged = event => {
        console.log('input changed!', event.target.value);
        setFormState({name: event.target.value})
    }

    return (
        <React.Fragment>
            <Name 
                value={formState.name}
                input={inputChanged}
            />
            <Email/>
            <Password/>
            <CheckBox/>
            <Submit/>
        </React.Fragment>
    );
};

export default Form;