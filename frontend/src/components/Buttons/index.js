import React from 'react';
import {
  PrimaryBtnLink,
  LightBtnLink,
  CTABtnLink,
  PrimaryBtn,
  LightBtn,
  CTABtn,
  SecondaryBtnLink
} from './styles';

export const BtnLinkPrimary = (props) => {
  const { weblink, children } = props;
  return (
    <PrimaryBtnLink to={weblink} className='btn'>
      {children || 'Primary Button'}
    </PrimaryBtnLink>
  );
};


export const BtnLinkSecondary = (props) => {
  const { weblink, children } = props;
  return (
    <SecondaryBtnLink to={weblink} className='btn'>
      {children || 'Secondary Button'}
    </SecondaryBtnLink>
  );
}

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
  const { children, clickEvent, id } = props;
  return (
    <PrimaryBtn type='button' className='btn' id={id || ''} onClick={() => clickEvent()}>
      {children || 'Primary Button'}
    </PrimaryBtn>
  );
};

BtnPrimary.defaultProps = {
  clickEvent: () => { },
};

export const BtnLight = (props) => {
  const { children, clickEvent, id } = props;
  return (
    <LightBtn type='button' className='btn' id={id || ''} onClick={() => clickEvent()}>
      {children || 'Light Button'}
    </LightBtn>
  );
};

BtnLight.defaultProps = {
  clickEvent: () => { },
};

export const BtnCTA = (props) => {
  const { children, clickEvent, id } = props;
  return (
    <CTABtn type='button' className='btn' id={id || ''} onClick={() => clickEvent()}>
      {children || 'CTA Button'}
    </CTABtn>
  );
};

BtnCTA.defaultProps = {
  clickEvent: () => { },
};
