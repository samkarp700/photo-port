import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    // First test
            //it function - a string declares what is being tested. 2nd argument - callback function runs test. 
        it('renders', () => {
            render(<About />);
        });

    //second test
    it('matches snapshot DOM node structure', () => {
        //render about
    const { asFragment } =render(<About />);
    expect(asFragment()).toMatchSnapshot();
    });
    
})