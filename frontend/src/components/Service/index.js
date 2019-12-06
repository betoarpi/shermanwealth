import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ServiceItem = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  h3 {
    padding-left: 4rem;
    position:relative;
    ::before {
      background: var(--color-primary);
      clip-path: polygon(3rem 3rem, 3rem 0, 0 0);
      content: ' ';
      height:3rem;
      left:0;
      position: absolute;
      top:0;
      width:3rem;
      z-index:2;
    }
  }
  &:nth-child(6n+1){
    h3 {
      color: var(--color-primary_d2);
      ::before {
        background: var(--color-primary_d2);
      }
    }
  }
  &:nth-child(6n+2){
    h3 {
      color: var(--color-primary_d1);
      ::before {
        background: var(--color-primary_d1);
      }
    }
  }
  &:nth-child(6n+4){
    h3 {
      color: var(--color-primary_l1);
      ::before {
        background: var(--color-primary_l1);
      }
    }
  }
  &:nth-child(6n+5){
    h3 {
      color: var(--color-primary_l2);
      ::before {
        background: var(--color-primary_l2);
      }
    }
  }
  &:nth-child(6n+6){
    h3 {
      color: var(--color-highlight_d1);
      ::before {
        background: var(--color-highlight_d1);
      }
    }
  }
`

const Service = (props) => {
  const { title, children, url } = props
  return (
    <ServiceItem className='services__item'>
      <h3>{title}</h3>
      {children}
      <Link to={url || '/'}>
        Learn More
        <i className='fas fa-chevron-right'> </i>
      </Link>
    </ServiceItem>
  );
};

export default Service