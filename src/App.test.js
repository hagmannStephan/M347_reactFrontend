// src/App.test.js
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test("renders welcome message", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const welcomeMessage = screen.getByText(/Business Trips and Wishlist!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
