import { render, screen } from '@testing-library/react';
import { HiOutlineUser } from 'react-icons/hi'; 
import Input from '../components/Input';

describe("Input component",  () => {

    test('Should input have a placeholder.', () => {

        const placeholder = "teste placeholder";

        render(<Input placeholder={placeholder} /> )

        const inputNode = screen.getByPlaceholderText(placeholder);

        expect(inputNode.getAttribute('placeholder')).toBe(placeholder);
    });

    test('Should input have a icon.', () => {

        const placeholder = "teste placeholder";

        render
        (
            <Input placeholder={placeholder} ><HiOutlineUser /></Input>
        
        )

        const inputContainer = screen.getByTestId("custom-input");
        const iconNode = inputContainer.childNodes[0].childNodes[0];

        expect(iconNode.nodeName).toBe('svg');
    });

    test("Should input be able to receive a error message.", () => {

        const errorMessage = "Error Message"

        render( <Input placeholder="test" errorMessage={errorMessage} /> )

        const inputContainer = screen.getByText(errorMessage)

        expect( inputContainer.textContent ).toBe(errorMessage)

    })
}) 


/*

    * Should input accepts only text in only-test field
    * Should input mask password field

*/