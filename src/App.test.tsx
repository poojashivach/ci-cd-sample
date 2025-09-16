import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders Vite and React logos', () => {
    render(<App />);
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
  });

  it('renders the initial count', () => {
    render(<App />);
    expect(screen.getByText(/count is 0/)).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(screen.getByText(/count is 1/)).toBeInTheDocument();
  });

  it('renders the documentation links', () => {
    render(<App />);
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /vite logo/i })).toHaveAttribute(
      'href',
      'https://vite.dev'
    );
    expect(screen.getByRole('link', { name: /react logo/i })).toHaveAttribute(
      'href',
      'https://react.dev'
    );
  });
});
