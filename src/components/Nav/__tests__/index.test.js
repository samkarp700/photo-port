import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

const categories = [
    { name: 'portraits', desription: 'Portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

it('renders', () => {
    render(<Nav
        categories = {categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />);
})

describe('Nav component', () => {
    //baseline test
    it('renders', () =>  {
        render(<Nav />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible' ,() => {
    it('inserts emoji into the h2', () => {
        //arrange
        const { getByLabelText } = render(<Nav />);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})