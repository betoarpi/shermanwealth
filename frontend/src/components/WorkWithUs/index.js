import React from 'react'
import { BtnCTA } from '../Buttons/index'
import Image from '../../images/WorkWithUs.png'
import { ButtonContainer, Grid } from './styles'

export default function WorkWithUs({ content }) {
  const handleFreeConsultation = () => {
    var soqueryparam = "//go.oncehub.com/BradSherman?&bt=1"
    if (window.location.href.indexOf("?") > 0) {
      soqueryparam += "&" + window.location.href.slice(window.location.href.indexOf("?") + 1)
    }
    window.open(soqueryparam)
  }
  return (
    <Grid>
      <div className="container">
        <div class="image-container">
          <img src={Image} alt="Work With Us" />
          <h1 class="title">
            Work <br />
            with us
          </h1>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <ButtonContainer>
            <BtnCTA id="SOIBTN_BradSherman" clickEvent={handleFreeConsultation}>
              Schedule a Call with Brad Today
            </BtnCTA>
          </ButtonContainer>
        </div>
      </div>
    </Grid>
  )
}
