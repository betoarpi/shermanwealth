import React, { useState } from 'react'
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa';
import { SubmitForm, NewsletterMessage } from './styles'
import { CTABtn } from '../Buttons/styles'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function NewsletterForm() {
  const [IsSubmitted, setIsSubmitted] = useState(false)
  const [WithError, setWithError] = useState(false)
  const [ErrorMsg, setErrorMsg] = useState('')
  const [email, setEmail] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    addToMailchimp(email, {
      FNAME: FirstName,
      LNAME: LastName
    })
    .then((data) => {
      setWithError(false);
    })
    .catch((error) => {
      setWithError(true);
      setErrorMsg(error);
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
      {
        !IsSubmitted ? (
          <SubmitForm onSubmit={handleSubmit}>
            <h3>
              <small>
                Subscribe to our
              </small> Newsletter
            </h3>
            <div className="input-div">
              <label htmlFor="email">
                Your Email <sup>*</sup>
              </label>
              <input
                placeholder="Email address"
                name="email"
                id="email"
                type="email"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-div">
              <label htmlFor="first_name">
                First Name <sup>*</sup>
              </label>
              <input
                placeholder="First Name"
                name="first_name"
                id="first_name"
                type="text"
                required
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="input-div">
              <label htmlFor="last_name">
                Last Name <sup>*</sup>
              </label>
              <input
                placeholder="Last Name"
                name="last_name"
                id="last_name"
                type="text"
                required
                onChange={handleLastNameChange}
              />
            </div>
            <CTABtn type="submit">SEND</CTABtn>
          </SubmitForm>
        ) : null
      }

      {
        IsSubmitted && !WithError ? (
          <>
            <NewsletterMessage>
              <div>
                <FaRegCheckCircle />
                <h5>
                  Thank you for subscribing!
                </h5>
              </div>
            </NewsletterMessage>
          </>
        ) : null
      }
      {
        IsSubmitted && WithError ? (
          <>
            <NewsletterMessage>
              <div>
                <FaTimes />
                <h5>
                  {ErrorMsg}
                </h5>
              </div>
            </NewsletterMessage>
          </>
        ) : null
      }
    </>
  )
}
