import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

// mock a function that acts like toggleModal
// HOW???
/*
    const toggleModal = (image, i)=> {
      setCurrentPhoto({...image, index: i});
      setIsModalOpen(!isModalOpen);
    }
*/

// const currentPhoto = element of hardcoded values from PhotoList
// include index: 1
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup)

describe('Modal component', () => {
    it('renders', () => {
      // baseline render component test
    //   render(<Modal currentPhoto={currentPhoto} onClose={toggleModal} />});
    })

      // snapshot test
    it('matches snapshot DOM node structure', () => {
        // const { asFragment } = render();
        // expect(asFragment()).toMatchSnapshot();
    });
})