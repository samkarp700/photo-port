import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        if (!errorMessage) {
        //name in target refers to name in form. [] creates dynamic property names
        setFormState({ [e.target.name]: e.target.value })
        console.log('Form', formState);
    }
};
    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        
    }

    console.log(formState);

    

    return (
        <section>
            <h1> Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email}  onBlur={handleChange} name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
                </div>
                {errorMessage && (
                    <div>
                        <p className = "error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
               </form>
        </section>
    )

}


export default ContactForm;