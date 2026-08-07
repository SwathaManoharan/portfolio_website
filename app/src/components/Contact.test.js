import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Contact from './Contact';
import { FORMSPREE_ENDPOINT } from '../config/formspree';

jest.mock('framer-motion', () => {
  const React = require('react');
  const scrubMotionProps = (props) => {
    const {
      whileHover,
      whileTap,
      initial,
      animate,
      transition,
      exit,
      ...rest
    } = props;
    return rest;
  };

  return {
    motion: new Proxy({}, {
      get: (_, tag) => ({ children, ...props }) => React.createElement(tag, scrubMotionProps(props), children),
    }),
    useInView: () => true,
    useReducedMotion: () => true,
  };
});

describe('Contact form', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('submits successfully and shows success message', async () => {
    global.fetch.mockResolvedValue({ ok: true });

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Swatha' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'swatha@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there' } });
    fireEvent.click(screen.getByRole('button', { name: /message me/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        FORMSPREE_ENDPOINT,
        expect.objectContaining({
          method: 'POST',
          headers: { Accept: 'application/json' },
        })
      );
    });
    expect(await screen.findByText(/message was sent successfully/i)).toBeInTheDocument();
  });

  test('shows error message when submit fails', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ errors: [{ message: 'Submission failed' }] }),
    });

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Swatha' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'swatha@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there' } });
    fireEvent.click(screen.getByRole('button', { name: /message me/i }));

    expect(await screen.findByText(/submission failed/i)).toBeInTheDocument();
  });
});
