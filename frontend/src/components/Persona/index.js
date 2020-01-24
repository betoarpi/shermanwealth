import React, { useState } from 'react'
import PersonaModal from './PersonaModal'
import { BtnPrimary } from '../Buttons/index'
import Img from 'gatsby-image'

const Persona = (props) => {
  const [modalState, setModalState] = useState(false)

  const { title, imgUrl, children, styling, popUpDescription, slug, modalTitle } = props

  const handleOpenModal = (title) => {
    setModalState(true)
  }

  const handleCloseModal = () => {
    setModalState(false)
  }

  return (
    <>
      <article className={styling || 'persona'}>
        <div className='persona__container'>
          {title &&
            <h4 className='persona__title'>{title}</h4>
          }
          {children}
          {imgUrl && (
            <BtnPrimary clickEvent={handleOpenModal}>
              Learn More
            </BtnPrimary>
          )}
        </div>
        {imgUrl &&
          (
            <figure>
              <Img fluid={imgUrl} alt={title} />
            </figure>
          )}
      </article>

      <PersonaModal
        modalTitle={modalTitle}
        imgUrl={imgUrl}
        isOpen={modalState}
        onClose={handleCloseModal}
        slug={slug}
      >
        {popUpDescription}
      </PersonaModal>
    </>
  )
}

export default Persona
