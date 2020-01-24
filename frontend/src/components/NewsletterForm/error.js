import React from 'react'
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa';
import { NewsletterMessage } from './styles'

export default function error({ msg, WithError }) {
  return (
    <NewsletterMessage>
      <div>
        {
          !WithError
          ? <FaRegCheckCircle />
          : <FaTimes />
        }
        <h5>
          {msg}
        </h5>
      </div>
    </NewsletterMessage>
  )
}
