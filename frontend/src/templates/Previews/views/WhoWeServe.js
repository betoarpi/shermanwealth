import React from 'react'
import Layout from '../../../components/layout'
import { MiniHero } from '../../../components/Heros/index'
import Persona from '../../../components/Persona/index';
import RegularContent from '../../../components/RegularContent/index'

import WhoWeServeElement from '../../WhoWeServe/styles'
import { FaChevronDown } from 'react-icons/fa'
import ClientsIcon from '../../../images/icons8-people-100.png'
import { PersonaGrid } from '../../../components/Persona/styles';

export default function WhoWeServe({ title, content, personas, contentBlocks }) {
  return (
    <Layout>
      <MiniHero>
        <h1>{title}</h1>
        <img src={ClientsIcon} alt='Who we serve icon' />
      </MiniHero>
      <WhoWeServeElement className='container'>
        <div className='intro'
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        <h2 className='container__title'>
          Where are you in your journey?
          <FaChevronDown />
        </h2>
        <PersonaGrid className='persona__grid'>
          {
            personas.edges.map((persona) => (
              <Persona
                key={persona.node.id}
                imgUrl={persona.node.featuredImage.mediaItemUrl}
                slug={persona.node.slug}
                popUpDescription={persona.node.acf_personas_options.personaDescription}
                modalTitle={persona.node.title}
                preview={true}
              >
                <h4 dangerouslySetInnerHTML={{
                  __html: persona.node.title,
                }}
                />
              </Persona>
            ))
          }
        </PersonaGrid>
        {contentBlocks.map(block => {
          const typename = block.__typename

          switch (typename) {
            case 'Page_AcfContentBlocks_ContentBlocks_RegularContent':
              return <RegularContent key={block.id} content_text={block.contentText} />
            default:
              return <h1>No hay bloques</h1>
          }
        })}
      </WhoWeServeElement>
    </Layout>
  )
}
