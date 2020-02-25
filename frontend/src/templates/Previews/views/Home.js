import React from 'react'
import Layout from '../../../components/layout'
import { MiniHero } from '../../../components/Heros/index'

export default function Home({ location, title }) {
  return (
    <div>
      <Layout location={location}>
        <MiniHero>
          <h1>
            {title}
          </h1>
        </MiniHero>
      </Layout>
    </div>
  )
}
