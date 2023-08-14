import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import UserForm from './UserForm';


test('it shows two inputs and a button', async()=>{
    render(<UserForm/>);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', ()=>{
    const argList = [];
    const callback = (...args)=>{
        argList.push(args);
    }

    render(<UserForm onUserAdd={callback}/>);

    const [nameInput, emailInput] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard("umer");

    user.click(emailInput);
    user.keyboard("umer@gmail.com");

    user.click(button);

    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({name:'umer',email:'umer@gmail.com'});
    

});