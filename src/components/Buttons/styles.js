import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PrimaryBtnLink = styled(Link)`
  background: var(--color-primary);
  color: white;
  :hover {
    background: var(--color-primary_l1);
  }
  :active {
    background: var(--color-primary_d1);
  }
`;

export const LightBtnLink = styled(Link)`
  background: var(--color-highlight);
  color: var(--color-primary);
  :hover {
    background: var(--color-highlight_l2);
  }
  :active {
    background: var(--color-highlight_d1);
  }
`;

export const CTABtnLink = styled(Link)`
  background: var(--color-secondary);
  color: white;
  :hover {
    background: var(--color-secondary_l1);
  }
  :active {
    background: var(--color-secondary_d1);
  }
`;

export const PrimaryBtn = styled.button`
  background: var(--color-primary);
  color: white;
  :hover {
    background: var(--color-primary_l1);
  }
  :active {
    background: var(--color-primary_d1);
  }
`;

export const LightBtn = styled.button`
  background: var(--color-highlight);
  color: var(--color-primary);
  :hover {
    background: var(--color-highlight_l2);
  }
  :active {
    background: var(--color-highlight_d1);
  }
`;

export const CTABtn = styled.button`
  background: var(--color-secondary);
  color: white;
  :hover {
    background: var(--color-secondary_l1);
  }
  :active {
    background: var(--color-secondary_d1);
  }
`;
