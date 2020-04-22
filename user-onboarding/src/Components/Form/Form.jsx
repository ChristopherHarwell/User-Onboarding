import React, {useState} from 'react';
import * as yup from 'yup';
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
        checkbox: '',
        submit: '',
    });

    // state for errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        checkbox: '',
    })

    // use yup to create form schema
    const formSchema = yup.object().shape({
        name: yup
                .string()
                .required("Name is a required field"),
        email: yup
                .string()
                .email()
                .required(),
        password: yup
                .string()
                .required('Please provide a valid password'),
        terms: yup
                .boolean()
                .oneOf([true], 'Must agree to terms to continue'),

    });

    // keep track of input state
    const inputChanged = event => {
        console.log('input changed!', event.target.value);
        setFormState({
            ...formState, 
            [event.target.name]: event.target.value
        });
    }

  // handle state when form is submitted
  const sumbitForm = event => {
    event.preventDefault();
    return console.log('form submitted!');
  };

  // submit button state
  const [buttonDisabled, setButtonDisabled] = useState(true);

    return (
        <form onSubmit={sumbitForm}> 
            <Name 
                value={formState.name}
                input={inputChanged}
            />
            <Email
                value={formState.email}
                input={inputChanged}
            />
            <Password
                value={formState.password}
                input={inputChanged} 
            />
            <CheckBox
                value={formState.checkbox}
                input={inputChanged}
            />
            <Submit
                value={formState.submit}
                input={inputChanged}
            />
        </form>
    );
};

export default Form;