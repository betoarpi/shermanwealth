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
  const { weblink, btnTxt, children } = props;
  return (
    <PrimaryBtnLink to={weblink} className='btn'>
      {btnTxt || 'Primary Button'}
      {children}
    </PrimaryBtnLink>
  );
};

export const BtnLinkLight = (props) => {
  const { weblink, btnTxt, children } = props;
  return (
    <LightBtnLink to={weblink} className='btn'>
      {btnTxt || 'Light Button'}
      {children}
    </LightBtnLink>
  );
};

export const BtnLinkCTA = (props) => {
  const { weblink, btnTxt, children } = props;
  return (
    <CTABtnLink to={weblink} className='btn'>
      {btnTxt || 'CTA Button'}
      {children}
    </CTABtnLink>
  );
};

export const BtnPrimary = (props) => {
  const { btnTxt, children } = props;
  return (
    <PrimaryBtn type='button' className='btn'>
      {btnTxt || 'Primary Button'}
      {children}
    </PrimaryBtn>
  );
};
export const BtnLight = (props) => {
  const { btnTxt, children } = props;
  return (
    <LightBtn type='button' className='btn'>
      {btnTxt || 'Light Button'}
      {children}
    </LightBtn>
  );
};
export const BtnCTA = (props) => {
  const { btnTxt, children } = props;
  return (
    <CTABtn type='button' className='btn'>
      {btnTxt || 'CTA Button'}
      {children}
    </CTABtn>
  );
};
