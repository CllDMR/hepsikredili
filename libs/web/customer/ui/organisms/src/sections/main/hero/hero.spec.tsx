import { render } from '@testing-library/react';
import SectionMainHero from './hero';

//TODO: Create example hero
const heroImage = {
  src: 'string',
  height: 0,
  width: 0,
  blurDataURL: '',
};

describe('Section Main Hero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionMainHero bgImg={heroImage} />);
    expect(baseElement).toBeTruthy();
  });
});
