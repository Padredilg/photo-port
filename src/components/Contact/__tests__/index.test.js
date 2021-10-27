import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm />);
    });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
})

// In the next test, use the data-testid attribute for the <h1> 
// tag in the ContactForm component to match the text content to be "Contact me".

// The last test should also use the data-testid 
// attribute to locate the <button>, to match the text content "Submit".

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
        expect(getByTestId('submitButton')).toHaveTextContent('Submit');
    });
})