// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Display from './Display';

// clean up after each test, reset DOM etc
afterEach(rtl.cleanup);

// Gate testing
// defaults to unlocked or open
test('defaults to unlocked or open', () => {
    const wrapper = rtl.render(<Display />)
    const element = wrapper.findByText(/unlocked/i || /open/i)
    wrapper.debug()

    expect(element).toBe
})



// Display testing
// displays if gate is open\closed
test('displays if gate is open or closed', () => {
    const wrapper = rtl.render(<Display />)
    const element = wrapper.getByText(/open/i || /closed/i)

    wrapper.debug();

    expect(element).toBeVisible();
})

// displays if gate is locked\unlocked
test('displays if gate is locked or unlocked', () => {
    const wrapper = rtl.render(<Display />)
    const element = wrapper.getByText(/locked/i || /unlocked/i)

    wrapper.debug();

    expect(element).toBeVisible();
})

// displays 'Closed' if closed prop is true, otherwise shows 'Open'
// test('displays Closed if closed prop is true, else Open', () => {
//     const wrapper = rtl.render(<Display />)
//     const element = wrapper.getByText(/closed/i)

//     wrapper.debug();

//     expect(element).toBeVisible();
//     expect(element).toBeTruthy();
// })

// displays 'Locked' if locked prop true, otherwise shows 'Unlocked'

// when 'locked' or 'closed', 'red-led' class used

// when 'unlocked' or 'open', 'green-led' class used