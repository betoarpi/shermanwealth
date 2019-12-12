import styled from 'styled-components'

const BlogGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2rem;
  @media screen and (max-width:1023px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width:767px){
    grid-template-columns: 320px;
    justify-content: center;
  }
  @media screen and (max-width:479px){
    grid-template-columns: 1fr;
  }
`

export default BlogGrid;
