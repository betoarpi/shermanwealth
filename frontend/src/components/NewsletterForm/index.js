import React, { useState } from 'react'
import { SubmitForm, HeaderForm } from './styles'
import { CTABtn } from '../Buttons/styles'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import NewsletterLogo from '../../images/NewsletterLogo.png'
import Check from './check'
import Error from './error'

export default function NewsletterForm() {
  const [IsSubmitted, setIsSubmitted] = useState(false)
  const [WithError, setWithError] = useState(false)
  const [ErrorMsg, setErrorMsg] = useState('')

  const [email, setEmail] = useState('')
  const [FullName, setFullName] = useState('')

  const [MonthlyNewsletter, setMonthlyNewsletter] = useState(false)
  const [BradDaily, setBradDaily] = useState(false)
  const [Blog, setBlog] = useState(false)

  const [FinancialPodcasts, setFinancialPodcasts] = useState(false)
  const [BeerWithBrad, setBeerWithBrad] = useState(false)
  const [WomenWine, setWomenWine] = useState(false)

  const [all, setAll] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    addToMailchimp(email, {
      FNAME: FullName,
      "group[17045][8192]": MonthlyNewsletter,
      "group[17045][16384]": BradDaily,
      "group[17045][32768]": Blog,
      "group[17053][65536]": FinancialPodcasts,
      "group[17053][131072]": BeerWithBrad,
      "group[17053][262144]": WomenWine,
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
  }
  const handleFullNameChange = (event) => {
    setFullName(event.currentTarget.value);
  }

  const constHandleChecks = (event) => {
    if (event.currentTarget.name === 'monthly') { setMonthlyNewsletter(!MonthlyNewsletter) }
    if (event.currentTarget.name === 'brad') { setBradDaily(!BradDaily) }
    if (event.currentTarget.name === 'blog') { setBlog(!Blog) }
    if (event.currentTarget.name === 'podcast') { setFinancialPodcasts(!FinancialPodcasts) }
    if (event.currentTarget.name === 'beers') { setBeerWithBrad(!BeerWithBrad) }
    if (event.currentTarget.name === 'woman') { setWomenWine(!WomenWine) }
  }

  const setAllTrue = () => {
    const band = !all
    setAll(!all)
    setMonthlyNewsletter(band)
    setBradDaily(band)
    setBlog(band)
    setFinancialPodcasts(band)
    setBeerWithBrad(band)
    setWomenWine(band)

    document.getElementById("monthly").checked = band
    document.getElementById("brad").checked = band
    document.getElementById("blog").checked = band
    document.getElementById("podcast").checked = band
    document.getElementById("beers").checked = band
    document.getElementById("women").checked = band
  }

  return (
    <>
      {
        !IsSubmitted ? (
          <SubmitForm onSubmit={handleSubmit}>
            <HeaderForm>
              <img src={NewsletterLogo} alt="Newsletter logo" />

              <h3>
                <small>
                  Subscribe to our
                </small> <br />
                <big>
                  Newsletter
                </big>
              </h3>
            </HeaderForm>

            <div className="input-div">
              <label htmlFor="name">
                Your Name <sup>*</sup>
              </label>
              <input
                placeholder=""
                name="name"
                id="name"
                type="name"
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="input-div">
              <label htmlFor="email">
                Your Email <sup>*</sup>
              </label>
              <input
                placeholder=""
                name="email"
                id="email"
                type="email"
                onChange={handleEmailChange}
                required
              />
            </div>

            <section className="checks-grid">
              <div>
                <div className="checks-div">
                  <label htmlFor="monthly">
                    Yes, send me
                  </label>

                  <Check name="monthly" checkValue={MonthlyNewsletter} onHandle={constHandleChecks} label="Monthly newsletter" />
                  <Check name="brad" checkValue={BradDaily} onHandle={constHandleChecks} label="Brad's daily reads" />
                  <Check name="blog" checkValue={Blog} onHandle={constHandleChecks} label="New blog posts" />
                </div>

                <div className="checks-div">
                  <label htmlFor="all">
                    On second thought:
                  </label>
                  <div>
                    <input type="checkbox" name="all" id="" onChange={setAllTrue} value={all} />
                    <span>I want to get it all!</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="checks-div">
                  <label htmlFor="podcast">
                    Notify me about:
                  </label>

                  <Check name="podcast" checkValue={FinancialPodcasts} onHandle={constHandleChecks} label="New launch financial podcasts" />
                  <Check name="beers" checkValue={BeerWithBrad} onHandle={constHandleChecks} label="Beers with Brad events" />
                  <Check name="women" checkValue={WomenWine} onHandle={constHandleChecks} label="Women, wine & financial fitness events" />
                </div>
              </div>
            </section>
            <CTABtn type="submit">Subscribe</CTABtn>
          </SubmitForm>
        ) : null
      }

      {
        IsSubmitted && !WithError ? (
          <>
            <Error WithError={WithError} msg="Thank you for subscribing!" />
          </>
        ) : null
      }
      {
        IsSubmitted && WithError ? (
          <>
            <Error WithError={WithError} msg={ErrorMsg} />
          </>
        ) : null
      }
    </>
  )
}
