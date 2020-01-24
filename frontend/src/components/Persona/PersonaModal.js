import React from 'react'
import Modal from '../Modal/index'
import { BtnLinkCTA } from '../Buttons/index'
import { PersonaModalContent } from './styles'
import Img from 'gatsby-image'

const PersonaModal = (props) => {
  const { isOpen, onClose, modalTitle, imgUrl, children, slug } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PersonaModalContent>
        <header>
          <h2 dangerouslySetInnerHTML={{ __html: modalTitle, }} />
          <figure>
            <Img fluid={imgUrl} alt={modalTitle} />
          </figure>
        </header>
        <div className='content-container'>
          <div
            dangerouslySetInnerHTML={{
              __html: children,
            }}
          />
          <BtnLinkCTA weblink={`persona/${slug}`}>Start Here</BtnLinkCTA>
        </div>
      </PersonaModalContent>
    </Modal>
  )
}

export default PersonaModal