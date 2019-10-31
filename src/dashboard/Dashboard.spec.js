// Test away

import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Dashboard from './Dashboard';

// clean up after each test, reset DOM etc
afterEach(rtl.cleanup);

// renders controls
test('does it render the controls component', () => {
    const wrapper = rtl.render(<Dashboard />)

    const element = wrapper.findByTitle(/controls/i)

    wrapper.debug()

    expect(element).toBeTruthy();
})

// renders display
test('does it render display component', () => {
    const wrapper = rtl.render(<Dashboard />)

    const element = wrapper.findByTitle(/display/i)

    wrapper.debug()

    expect(element).toBeTruthy();
})
