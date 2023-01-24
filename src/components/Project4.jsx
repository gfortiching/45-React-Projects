import "./css/Project4.css";
import { useState } from "react";

function BasicRegistration() {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [submitted, setSubmitted] =useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({...values, firstName: event.target.value})
    }

    const handleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value})
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Uncomment the next line to show the success message */}
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {/* Uncomment the next line to show the error message */}
          <span id="first-name-error">Please enter a first name</span>
          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {/* Uncomment the next line to show the error message */}
          <span id="last-name-error">Please enter a last name</span>
          <input
            onChange={handleEmailInputChange}
            value={values.email}
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {/* Uncomment the next line to show the error message */}
          <span id="email-error">Please enter an email address</span>
          <button className="form-field" type="submit">
            Register
          </button>
          { submitted ? <div className="success-message">Success! Thank you for registering.</div> : null}
        </form>
      </div>
    )
}

export default BasicRegistration;