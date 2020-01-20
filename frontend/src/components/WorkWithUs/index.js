import React from 'react'
import { BtnCTA } from '../Buttons/index'
import Image from '../../images/WorkWithUs.png'
import { ButtonContainer, Grid } from './styles'

export default function WorkWithUs({content}) {
  return (
    <Grid>
      <div className="container">
        <div class="image-container">
          <img src={Image} alt="Work With Us" />
          <h1 class="title">
            Work <br/>
            with us
          </h1>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{__html: content}} />
          <ButtonContainer>
            <BtnCTA>
              Schedule a Call with Brad today
            </BtnCTA>
          </ButtonContainer>
        </div>
      </div>
    </Grid>
  )
}
