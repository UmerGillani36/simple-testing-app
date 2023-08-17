import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  const users = [
    { name: 'umer', email: 'umer@gmail.com' },
    { name: 'ahsan', email: 'ahsan@gmail.com' },
  ];
  const { container } = render(<UserList users={users} />);

  // screen.logTestingPlaygroundURL();
  // const rows = screen.getAllByRole('row');
  // const rows = within(screen.getByTestId('users')).getAllByRole('row');

  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const users = [
    { name: 'umer', email: 'umer@gmail.com' },
    { name: 'ahsan', email: 'ahsan@gmail.com' },
  ];
  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
