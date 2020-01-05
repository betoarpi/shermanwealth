import React, { useState } from 'react'
import { SubmitForm } from './styles'
import { CTABtn } from '../Buttons/styles'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email, {
      FNAME: FirstName,
      LNAME: LastName
    })
     .then((data => {
      alert(data.result);
     }))
     .catch((error) => {
      // Errors in here are client side
      // Mailchimp always returns a 200
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.currentTarget.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.currentTarget.value);
  };

  return (
    <>
      <SubmitForm onSubmit={handleSubmit}>
        <h3>
          <small>
            Subscribe to our
          </small> Newsletter
        </h3>
        <div className="input-div">
          <label>
            Your Email <sup>*</sup>
          </label>
          <input
            placeholder="Email address"
            name="email"
            type="email"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-div">
          <label>
            First Name <sup>*</sup>
          </label>
          <input
            placeholder="First Name"
            name="first_name"
            type="text"
            required
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="input-div">
          <label>
            Last Name <sup>*</sup>
          </label>
          <input
            placeholder="Last Name"
            name="last_name"
            type="text"
            required
            onChange={handleLastNameChange}
          />
        </div>
        <CTABtn type="submit">SEND</CTABtn>
      </SubmitForm>
    </>
  )
}
