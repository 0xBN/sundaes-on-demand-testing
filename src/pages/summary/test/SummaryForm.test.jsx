import { screen, render, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

it('has checkbox unchecked and confirm button disabled initially', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

it('toggles button enabled on checkbox click, then disabled on second checkbox click', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: /terms/i });
  const confirmButton = screen.getByRole('button', { name: /confirm/i });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
