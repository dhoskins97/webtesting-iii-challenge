// Test away!
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

describe('Controls.js', () => {
    it('renders without crashing', () => {
        render(<Controls />)
    })

    it('provides lock and close buttons', () => {
        const controlsComponent = render(<Controls />);
        controlsComponent.getByText(/lock gate/i);
        controlsComponent.getByText(/close gate/i);
    })

    // it('provides unlock and open buttons when clicked', () => {
    //     const controlsComponent = render(<Controls />);
    //     const buttons = controlsComponent.querySelector('.toggle-btn');
    // })
})