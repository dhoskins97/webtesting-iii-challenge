// Test away!
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Dashboard from './Dashboard';

afterEach(cleanup);

describe('Dashboard.js', () => {
    it("renders without crashing", () => {
        render(<Dashboard />)
    })

    // it("cannot be opened or closed if locked",() => {
    //     const displayLocked = render(<Display locked={true} />);
    //     displayLocked.fireEvent.clicked.getByText(//i)
    // })
    
});