// File: src/pages/Resume/__tests__/ResumePage.test.js

import React from 'react';
import { render } from '@testing-library/react';
import ResumePage from '../ResumePage';

describe('ResumePage', () => {
  it('renders resume download link', () => {
    const { getByText } = render(<ResumePage />);
    const downloadLink = getByText('Download Resume');
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink.getAttribute('href')).toBe('/path/to/resume.pdf');
  });
});