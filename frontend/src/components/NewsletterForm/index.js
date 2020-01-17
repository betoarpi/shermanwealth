import React, { useState } from 'react'
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa';
import { SubmitForm, NewsletterMessage, HeaderForm } from './styles'
import { CTABtn } from '../Buttons/styles'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import NewsletterLogo from '../../images/NewsletterLogo.png'

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
  const handleMonthlyNewsletterChange = () => {
    setMonthlyNewsletter(
      !MonthlyNewsletter
    )
  }
  const handleBradChange = () => {
    setBradDaily(
      !BradDaily
    )
  }
  const handleNewBlog = () => {
    setBlog(
      !Blog
    )
  }
  const handleFinancialPodcast = () => {
    setFinancialPodcasts(
      !FinancialPodcasts
    )
  }
  const handleBeerWithBrad = () => {
    setBeerWithBrad(
      !BeerWithBrad
    )
  }
  const handleWomenWine = () => {
    setWomenWine(
      !WomenWine
    )
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

                  <div>
                    <input
                      type="checkbox"
                      name="monthly"
                      id="monthly"
                      onChange={handleMonthlyNewsletterChange}
                      value={MonthlyNewsletter}
                    />
                    <span>Monthly newsletter</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="brad"
                      id="brad"
                      onChange={handleBradChange}
                      value={BradDaily}
                    />
                    <span>Brad's daily reads</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="blog"
                      id="blog"
                      onChange={handleNewBlog}
                      value={Blog}
                    />
                    <span>New blog posts</span>
                  </div>
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

                  <div>
                    <input
                      type="checkbox"
                      name="podcast"
                      id="podcast"
                      onChange={handleFinancialPodcast}
                      value={FinancialPodcasts}
                    />
                    <span>New launch financial podcasts</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="beers"
                      id="beers"
                      onChange={handleBeerWithBrad}
                      value={BeerWithBrad}
                    />
                    <span>Beers with Brad events</span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="women"
                      id="women"
                      onChange={handleWomenWine}
                      value={WomenWine}
                    />
                    <span>Women, wine & financial fitness events</span>
                  </div>
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
