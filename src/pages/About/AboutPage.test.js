// File: src/pages/About/__tests__/AboutPage.test.js

import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from '../AboutPage';

describe('AboutPage', () => {
  it('renders about me section', () => {
    const { getByText } = render(<AboutPage />);
    const aboutMeSection = getByText('About Me');
    expect(aboutMeSection).toBeInTheDocument();
  });

  it('renders personal interests and hobbies', () => {
    const { getByText } = render(<AboutPage />);
    const interestsSection = getByText('When I\'m not coding, you can find me exploring the outdoors, playing guitar, or enjoying a good book.');
    expect(interestsSection).toBeInTheDocument();
  });
});
