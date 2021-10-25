import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
        //does not actually render, just tests the capability to render
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // actually renders the about instead of just testing whether it can render
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})