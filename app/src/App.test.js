import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Navbar', () => () => <div>Navbar</div>);
jest.mock('./components/Hero', () => () => <div>Hero</div>);
jest.mock('./components/About', () => () => <div>About</div>);
jest.mock('./components/Skills', () => () => <div>Skills</div>);
jest.mock('./components/Experience', () => () => <div>Experience</div>);
jest.mock('./components/Projects', () => () => <div>Projects</div>);
jest.mock('./components/Certifications', () => () => <div>Certifications</div>);
jest.mock('./components/Contact', () => () => <div>Contact</div>);

test('renders portfolio footer content', () => {
  render(<App />);
  expect(screen.getByText(/Built with ❤️ by/i)).toBeInTheDocument();
});
