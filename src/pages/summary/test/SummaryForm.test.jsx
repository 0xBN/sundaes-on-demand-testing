import { screen, render } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

it('has checkbox unchecked and confirm button disabled initially', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

it('toggles button enabled on checkbox click, then disabled on second checkbox click', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: /terms/i });
  const confirmButton = screen.getByRole('button', { name: /confirm/i });

  await act(async () => {
    await user.click(checkbox);
  });
  expect(confirmButton).toBeEnabled();

  await act(async () => {
    await user.click(checkbox);
  });
  expect(confirmButton).toBeDisabled();
});
