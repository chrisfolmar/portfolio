// File: src/pages/Contact/__tests__/ContactPage.test.js

import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from '../ContactPage';

describe('ContactPage', () => {
  it('renders contact details', () => {
    const { getByText } = render(<ContactPage />);
    const email = getByText('Email: john.doe@example.com');
    const phone = getByText('Phone: +1 (123) 456-7890');
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
  });
});