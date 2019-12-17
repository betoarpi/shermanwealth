import styled from 'styled-components'

export const BlogGrid = styled.div`
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

export const PaginationGrid = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;

  a {
    margin-left: 5px;
    margin-right: 5px;
  }
`


// export default BlogGrid;
