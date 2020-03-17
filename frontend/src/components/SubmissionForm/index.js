import React, { useState } from 'react';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import { FaCheckCircle } from 'react-icons/fa'

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $clientMutationId: String!,
    $userName: String!,
    $userEmail: String!,
    $userMessage: String!, 
    $userReferrer: String!
  ){createSubmission(
    input: {
      clientMutationId: $clientMutationId,
      userName: $userName,
      userEmail: $userEmail,
      userMessage: $userMessage, 
      userReferrer: $userReferrer
    }){
      success
      data
    }
  }
`
const SubmissionForm = ({ children }) => {
  const [userNameValue, setUserNameValue] = useState('')
  const [userEmailValue, setUserEmailValue] = useState('')
  const [userMessageValue, setUserMessageValue] = useState('')
  const [userReferrerValue, setUserReferrerValue] = useState('')

  return (
    <Mutation mutation={CONTACT_MUTATION}>
      {(createSubmission, { loading, error, data }) => (
        <>
          <form
            onSubmit={async event => {
              event.preventDefault()
              createSubmission({
                variables: {
                  clientMutationId: 'example',
                  userName: userNameValue,
                  userEmail: userEmailValue,
                  userMessage: userMessageValue,
                  userReferrer: userReferrerValue
                }
              })
            }}
          >
            <h3>Questions? Just ask!</h3>

            <label htmlFor='userNameInput'>Your Name <span>*</span></label>
            <input id='userNameInput' value={userNameValue} required
              onChange={event => {
                setUserNameValue(event.target.value)
              }}
            />

            <label htmlFor='userEmailInput'>Your Email <span>*</span></label>
            <input id='userEmailInput' value={userEmailValue} required
              onChange={event => {
                setUserEmailValue(event.target.value)
              }}
            />

            <label htmlFor='userMessageInput'>Your Message <span>*</span></label>
            <textarea id='userMessageInput' value={userMessageValue} required
              onChange={event => {
                setUserMessageValue(event.target.value)
              }}
            />

            <label htmlFor='userReferrerInput'>How did you hear of us?</label>
            <input id='userReferrerInput' value={userReferrerValue} required
              onChange={event => {
                setUserReferrerValue(event.target.value)
              }}
            />

            <button>send</button>

            {children}

            <div>
              {loading && <p>Sending</p>}
              {error && (
                `An unknouwn error has occured, please try again later. ${error}`
              )}
              {data && <div className='success'>
                <FaCheckCircle />
                <p>Your message was sent successfully!</p>
              </div>}
            </div>
          </form>
        </>
      )}
    </Mutation>
  );
};

export default SubmissionForm;