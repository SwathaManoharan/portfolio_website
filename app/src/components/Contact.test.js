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

  test('shows file size error when attachment exceeds 5 MB', async () => {
    render(<Contact />);

    const fileInput = screen.getByLabelText(/attachment/i);
    const largeFile = new File(['x'], 'large.pdf', { type: 'application/pdf' });
    Object.defineProperty(largeFile, 'size', { value: 6 * 1024 * 1024 });

    fireEvent.change(fileInput, { target: { files: [largeFile] } });

    expect(await screen.findByText(/file is too large/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /message me/i })).toBeDisabled();
  });

  test('shows no error when attachment is within 5 MB', () => {
    render(<Contact />);

    const fileInput = screen.getByLabelText(/attachment/i);
    const smallFile = new File(['x'], 'small.pdf', { type: 'application/pdf' });
    Object.defineProperty(smallFile, 'size', { value: 1024 });
    fireEvent.change(fileInput, { target: { files: [smallFile] } });

    expect(screen.queryByText(/file is too large/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /message me/i })).not.toBeDisabled();
  });

  test('does not submit when attachment is too large', async () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Swatha' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'swatha@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' } });

    const fileInput = screen.getByLabelText(/attachment/i);
    const largeFile = new File(['x'], 'large.pdf', { type: 'application/pdf' });
    Object.defineProperty(largeFile, 'size', { value: 6 * 1024 * 1024 });
    fireEvent.change(fileInput, { target: { files: [largeFile] } });

    fireEvent.click(screen.getByRole('button', { name: /message me/i }));

    await waitFor(() => {
      expect(global.fetch).not.toHaveBeenCalled();
    });
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
