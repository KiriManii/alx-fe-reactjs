import { render, screen, fireEvent } from '@testing-library/react';
import FormikForm from './FormikForm';
import { Formik } from 'formik';

test('renders the registration form', () => {
  render(
    <Formik initialValues={{ username: '', email: '', password: '' }}>
      <FormikForm />
    </Formik>
  );
  
  // Check if form fields are displayed
  screen.getByLabelText(/username/i);
  screen.getByLabelText(/email/i);
  screen.getByLabelText(/password/i);
});

test('validates the form fields', async () => {
  render(
    <Formik initialValues={{ username: '', email: '', password: '' }}>
      <FormikForm />
    </Formik>
  );

  const submitButton = screen.getByRole('button', { name: /submit/i });

  // Try submitting the form with empty fields
  fireEvent.click(submitButton);

  // Check for validation error messages
  await screen.findByText(/username is required/i);
  await screen.findByText(/email is required/i);
  await screen.findByText(/password is required/i);
});
