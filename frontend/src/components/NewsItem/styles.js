import styled from 'styled-components'

const PostItem = styled.article`
  display: inline-grid;
  max-width: 100%;
  grid-template-rows: 160px auto auto auto;

  &.daily-reads {
    grid-template-rows: repeat(4, auto);
  }

  figure {
    background: var(--color-highlight_l3);
    display: grid;
    grid-row:1 / 2;
    margin: 0;
    /* min-height:255px;
    padding-top:75%; */
    position: relative;
    overflow:hidden;
    &:after {
      content: ' ';
      display: block;
      border-style: solid;
      border-width: 0 5rem 5rem 0;
      border-color: transparent var(--color-highlight) transparent transparent;
      height: 0;
      left:50%;
      position: absolute;
      top:50%;
      transform: translate(-50%, -50%);
      width: 0;
      z-index:0;
    }
    .gatsby-image-wrapper {
      height: 100%;
      position: absolute !important;
      width: 100%;
    }
    img {
      bottom:0;
      left:0;
      height:100%;
      object-fit: cover;
      object-position:center;
      position: absolute;
      right:0;
      top:0;
      width:100%;
    }
  }
  > h4 {
    margin-bottom:0;
  }
  a {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr max-content;
    justify-items: end;
    svg {
      margin-left: 0.5rem;
    }
  }
  @media screen and (max-width: 479px) {
    grid-template-rows: 180px auto auto auto;
    figure {
      min-height: initial;
    }
  }
`;

export const PostList = styled.article`
  display: grid;
  grid-template-columns: 184px 1fr;
  gap:2rem;
  max-width: 100%;
  width:100%;
  figure {
    background: var(--color-highlight_l3);
    display: grid;
    grid-column:1 / 2;
    grid-row:1 / 2;
    margin: 0;
    min-height:184px;
    padding-top:75%;
    position: relative;
    width:184px;
    &:before {
      border-width: 0 2.5rem 2.5rem 0; 
    }
    &:after {
      content: ' ';
      display: block;
      border-style: solid;
      border-width: 0 5rem 5rem 0;
      border-color: transparent var(--color-highlight) transparent transparent;
      height: 0;
      left:50%;
      position: absolute;
      top:50%;
      transform: translate(-50%, -50%);
      width: 0;
      z-index:0;
    }
    .gatsby-image-wrapper {
      height: 100%;
      position: absolute !important;
      width: 100%;
    }
    img {
      bottom:0;
      left:0;
      height:100%;
      object-fit: cover;
      object-position:center;
      position: absolute;
      right:0;
      top:0;
      width:100%;
    }
  }
  > div {
    display: grid;
  }
  > h4 {
    margin-bottom:0;
  }
  a {
    align-items: center;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-items: start;
    svg {
      margin-left: 0.5rem;
    }
  }

  &.no-thumbnail {
    border-bottom: solid 1px var(--color-highlight_l1);
    grid-template-columns: 1fr;
    padding-bottom:2rem;
  }

  @media screen and (max-width: 579px){
    grid-template-columns: 1fr;
    gap:0;
    figure {
      width:100%;
    }
  }
`;

export default PostItem;
