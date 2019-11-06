// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Controls from './Controls';

// clean up after each test, reset DOM etc
afterEach(rtl.cleanup);


// cannot be closed or opened if locked
test('<Controls />', () => {
    const wrapper = rtl.render(<Controls />)

    const element = wrapper.findAllByText(/Controls/i)

    expect(wrapper.asFragment()).toMatchSnapshot()
})