import React from 'react';
import ReactDOM from 'react-dom';
import { Info } from '../Info'
import { render } from '@testing-library/react';

it('renders info correctly', () => {
    const { getByText } = render(<Info></Info>)
    const header = getByText('Info')
    expect(header).toBeInTheDocument()
})

