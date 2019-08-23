// Test away!
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

afterEach(cleanup);

describe('Display.js', () => {
    it("renders without crashing", () => {
        render(<Display />)
    })

    it("renders proper default values", () => {
        const displayDefault= render(<Display />);
        displayDefault.getByText(/unlocked/i);
        displayDefault.getByText(/open/i);
    })

    it("renders proper text on closed locked", () => {
        const displayLockedClosed = render(<Display closed={true} locked={true} />);
        displayLockedClosed.getByText(/locked/i);
        displayLockedClosed.getByText(/closed/i);
    })

    it("renders proper text on open unlocked", () => {
        const displayOpenLocked = render(<Display closed={false} locked={false} />);
        displayOpenLocked.getByText(/unlocked/i);
        displayOpenLocked.getByText(/open/i);
    })
    it("renders the right colors closed unlocked", () => {
        const { getByText } = render(<Display closed={true} locked={false} />);
        const closedDisplay = getByText(/closed/i);
        const unlockedDisplay = getByText(/unlocked/i);
        expect(closedDisplay.className).toMatch(/red-led/i);
        expect(unlockedDisplay.className).toMatch(/green-led/i)
    })
});