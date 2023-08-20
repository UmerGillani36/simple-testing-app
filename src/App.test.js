import { render, screen } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';

test('can receive a new user and show it on list',()=>{
    render(<App/>);

    const nameInput = screen.getByRole('textbox',{name: /name/i});
    const emailInput = screen.getByRole('textbox',{name:/email/i});
    
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard("umer");

    user.click(emailInput);
    user.keyboard("umer@gmail.com");

    user.click(button);

    // screen.debug()
    const name = screen.getByRole('cell', { name: 'umer' });
    const email = screen.getByRole('cell', { name: 'umer@gmail.com' });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
})
