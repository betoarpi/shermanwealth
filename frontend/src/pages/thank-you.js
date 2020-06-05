import React from 'react'
import Helmet from "react-helmet"
import Layout from '../components/layout'
import { BtnLinkPrimary } from '../components/Buttons/index'

export default function ThanksPage() {
  return (
    <Layout>
      <Helmet title="Thanks for submitting - Sherman Wealth Management | Financial Planning Investment" />
      <section className="container">
        <h1>Thanks for submitting</h1>
        <p>
          We will getting in contact as soon as posible for us
        </p>

        <BtnLinkPrimary href="/">
          Return to Home
        </BtnLinkPrimary>
      </section>
    </Layout>
  )
}
