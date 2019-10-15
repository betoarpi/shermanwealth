import React from 'react';
import { Link } from 'react-router-dom';

export const BtnLinkPrimary = (props) => {
  const { weblink, btnTxt } = props;
  return (
    <Link to={weblink} className='btn btn--primary'>{btnTxt || 'Primary Button'}</Link>
  );
};

export const BtnLinkLight = (props) => {
  const { weblink, btnTxt } = props;
  return (
    <Link to={weblink} className='btn btn--light'>{btnTxt || 'Light Button'}</Link>
  );
};

export const BtnLinkCTA = (props) => {
  const { weblink, btnTxt } = props;
  return (
    <Link to={weblink} className='btn btn--cta'>{btnTxt || 'CTA Button'}</Link>
  );
};

export const BtnPrimary = (props) => {
  const { btnTxt } = props;
  return (
    <button type='button' className='btn btn--primary'>{btnTxt || 'Primary Button'}</button>
  );
};
export const BtnLight = (props) => {
  const { btnTxt } = props;
  return (
    <button type='button' className='btn btn--light'>{btnTxt || 'Light Button'}</button>
  );
};
export const BtnCTA = (props) => {
  const { btnTxt } = props;
  return (
    <button type='button' className='btn btn--cta'>{btnTxt || 'CTA Button'}</button>
  );
};
