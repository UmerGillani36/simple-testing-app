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
    //not the best way
    // const argList = [];
    // const callback = (...args)=>{
    //     argList.push(args);
    // }

    const mock = jest.fn();

    render(<UserForm onUserAdd={mock}/>);

    // const [nameInput, emailInput] = screen.getAllByRole('textbox');
    const nameInput = screen.getByRole('textbox',{name: /name/i});
    const emailInput = screen.getByRole('textbox',{name:/email/i});
    
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard("umer");

    user.click(emailInput);
    user.keyboard("umer@gmail.com");

    user.click(button);

    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({name:'umer',email:'umer@gmail.com'});
    
expect(mock).toHaveBeenCalled();
expect(mock).toHaveBeenCalledWith({name:'umer',email:'umer@gmail.com'});
});

test('empties the two inputs when the user submit the form',()=>{
    render(<UserForm onUserAdd={()=>{}}/>);

    const nameInput = screen.getByRole('textbox',{name: /name/i});
    const emailInput = screen.getByRole('textbox',{name:/email/i});
    
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard("umer");

    user.click(emailInput);
    user.keyboard("umer@gmail.com");

    user.click(button);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');

})