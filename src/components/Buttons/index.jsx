import React from 'react';
import {
  PrimaryBtnLink,
  LightBtnLink,
  CTABtnLink,
  PrimaryBtn,
  LightBtn,
  CTABtn,
} from './styles';

export const BtnLinkPrimary = (props) => {
  const { weblink, children } = props;
  return (
    <PrimaryBtnLink to={weblink} className='btn'>
      {children || 'Primary Button'}
    </PrimaryBtnLink>
  );
};

export const BtnLinkLight = (props) => {
  const { weblink, children } = props;
  return (
    <LightBtnLink to={weblink} className='btn'>
      {children || 'Light Button'}
    </LightBtnLink>
  );
};

export const BtnLinkCTA = (props) => {
  const { weblink, children } = props;
  return (
    <CTABtnLink to={weblink} className='btn'>
      {children || 'CTA Button'}
    </CTABtnLink>
  );
};

export const BtnPrimary = (props) => {
  const { children } = props;
  return (
    <PrimaryBtn type='button' className='btn'>
      {children || 'Primary Button'}
    </PrimaryBtn>
  );
};
export const BtnLight = (props) => {
  const { children } = props;
  return (
    <LightBtn type='button' className='btn'>
      {children || 'Light Button'}
    </LightBtn>
  );
};
export const BtnCTA = (props) => {
  const { children } = props;
  return (
    <CTABtn type='button' className='btn'>
      {children || 'CTA Button'}
    </CTABtn>
  );
};
