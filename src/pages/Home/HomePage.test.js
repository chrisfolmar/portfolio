// File: src/pages/Home/__tests__/HomePage.test.js

import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders welcome message', () => {
    const { getByText } = render(<HomePage />);
    const welcomeMessage = getByText('Welcome to My Portfolio');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders introduction paragraph', () => {
    const { getByText } = render(<HomePage />);
    const introParagraph = getByText('Hi, I\'m John Doe, a passionate and results-driven software engineer with 5+ years of experience in building web applications.');
    expect(introParagraph).toBeInTheDocument();
  });
});
