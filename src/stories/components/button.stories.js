import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Button' };

export const btnLinkPrimary = () => <a href="/" class="btn btn--primary">Button Primary</a>;
export const btnLinkLight = () => <a href="/" class="btn btn--light">Button Light</a>;
export const btnLinkCTA = () => <a href="/" class="btn btn--cta">Button CTA</a>;

export const btnPrimary = () => <button type="button" class="btn btn--primary">Button Primary</button>;
export const btnLight = () => <button type="button" class="btn btn--light">Button Light</button>;
export const btnCTA = () => <button type="button" class="btn btn--cta">Button CTA</button>;
