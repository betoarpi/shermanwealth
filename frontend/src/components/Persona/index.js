import React from 'react'
import { BtnLinkPrimary } from '../Buttons/index'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
//import PersonaModal from './PersonaModal'

const Persona = (props) => {
  /* const [modalState, setModalState] = useState(false)

  const handleOpenModal = (title) => {
    setModalState(true)
  }
  
  const handleCloseModal = () => {
    setModalState(false)
  } */

  const { title, imgUrl, children, styling, slug, preview = false } = props

  return (
    <>
      <article className={styling || 'persona'}>
        <div className='persona__container'>
          {title &&
            <h4 className='persona__title'>{title}</h4>
          }
          {children}
          {imgUrl && (
            <BtnLinkPrimary weblink={`/persona/${slug}/`}>
              Learn More
            </BtnLinkPrimary>
          )}
        </div>
        {(imgUrl && !preview) &&
          (
            <figure>
              <Link to={`/persona/${slug}/`}>
                <Img fluid={imgUrl} alt={title} />
              </Link>
            </figure>
          )}
        {(imgUrl && preview) &&
          (
            <figure>
              <div className="gatsby-image-wrapper">
                <img src={imgUrl} alt={title} />
              </div>
            </figure>
          )}
      </article>

      {/* <PersonaModal
        modalTitle={modalTitle}
        imgUrl={imgUrl}
        isOpen={modalState}
        onClose={handleCloseModal}
        slug={slug}
        preview={preview}
      >
        {popUpDescription}
      </PersonaModal> */}
    </>
  )
}

export default Persona
