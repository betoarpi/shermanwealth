import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Hero } from '../components/Heros/index'
import TeamMember from '../components/TeamMember/index'
//import SEO from '../components/seo'

export default class AboutPage extends Component {
  filterSelectedMembers = (teamMembers, selectedMember) => {
    const newArray = []
    selectedMember.map((item) => {
      teamMembers.map((member) => {
        if (member.node.wordpress_id === item.wordpress_id) {
          newArray.push(member)
        }
        return null
      })
      return null
    })
    return newArray
  }

  render() {
    const { data } = this.props
    const { acf } = data.wordpressPage
    const allMembers = data.allWordpressWpTeam.edges
    const selectedMembers = acf.team_members_grid

    const members = this.filterSelectedMembers(allMembers, selectedMembers)

    return (
      <Layout>
        {/* <SEO title={data.wordpressPage.yoast_title} yoastMeta={data.wordpressPage.yoast_meta} ></SEO> */}
        <Hero
          key='about_hero'
          imgSrc={acf.hero === null ? '/'
            : acf.hero.image.localFile === null ? '/'
              : acf.hero.image.localFile.childImageSharp.fluid
          }
        >
          <h2
            dangerouslySetInnerHTML={{
              __html: acf.hero.text
            }}
          />
        </Hero>
        <section className='container' >
          {data.wordpressPage.content !== "" &&
            <div className='intro'
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage.content,
              }}
            />
          }
          <h2 className='container__title'>Meet our team</h2>
          {members.map((item) => (
            <TeamMember
              key={item.node.wordpress_id}
              name={item.node.title}
              jobTitle={item.node.acf.title}
              img={item.node.featured_media === null ? '/'
                : item.node.featured_media.localFile === null ? '/'
                  : item.node.featured_media.localFile.childImageSharp.fluid
              }
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: item.node.acf.team_member_bio,
                }}
              />
            </TeamMember>
          ))}
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
      acf {
        hero {
          text
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        team_members_grid {
          wordpress_id
          post_excerpt
          post_title
          post_status
          post_name
        }
      }
    }
    allWordpressWpTeam {
      edges {
        node {
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
          wordpress_id
          acf {
            title
            team_member_bio
          }
        }
      }
    }
  }
`