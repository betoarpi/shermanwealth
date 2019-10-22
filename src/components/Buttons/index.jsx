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
  const { weblink, btnTxt } = props;
  return (
    <PrimaryBtnLink to={weblink} className='btn'>{btnTxt || 'Primary Button'}</PrimaryBtnLink>
  );
};

export const BtnLinkLight = (props) => {
  const { weblink, btnTxt } = props;
  return (
    <LightBtnLink to={weblink} className='btn'>{btnTxt || 'Light Button'}</LightBtnLink>
  );
};

export const BtnLinkCTA = (props) => {
  const { weblink, btnTxt } = props;
  return (
    <CTABtnLink to={weblink} className='btn'>{btnTxt || 'CTA Button'}</CTABtnLink>
  );
};

export const BtnPrimary = (props) => {
  const { btnTxt } = props;
  return (
    <PrimaryBtn type='button' className='btn'>{btnTxt || 'Primary Button'}</PrimaryBtn>
  );
};
export const BtnLight = (props) => {
  const { btnTxt } = props;
  return (
    <LightBtn type='button' className='btn'>{btnTxt || 'Light Button'}</LightBtn>
  );
};
export const BtnCTA = (props) => {
  const { btnTxt } = props;
  return (
    <CTABtn type='button' className='btn'>{btnTxt || 'CTA Button'}</CTABtn>
  );
};
