import React from 'react'
import Layout from '../../../components/layout'
import { MiniHero } from '../../../components/Heros/index'
import TeamMember from '../../../components/TeamMember/index'
import FilterSelectedMembers from '../../../utils/FilterSelectedMembers'

export default function AboutPage({ location, title, selectedStaff, staff }) {
  const members = FilterSelectedMembers(staff, selectedStaff)
  return (
    <Layout location={location}>
      <MiniHero>
        <h1>
          Meet the team
        </h1>
      </MiniHero>
      <section className='container'>
        {
          members.map((member) => (
            <TeamMember
              key={member.id}
              name={member.title}
              jobTitle={member.acf_team_member.title}
              img={member.featuredImage.mediaItemUrl}
              isPreview={true}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: member.acf_team_member.teamMemberBio
                }}
              />
            </TeamMember>
          ))
        }
      </section>
    </Layout>
  )
}
