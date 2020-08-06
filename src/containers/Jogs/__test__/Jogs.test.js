import React from 'react';
import ReactDOM from 'react-dom';
import { Jogs } from '../Jogs'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

/* Mocked data */
const getJogs = () => ({})
const setJogsLoading = () => ({})
const setFilter = () => ({})
const jogsProps = {
    jogs: null,
    loading: true,
    filter: {
        filter: false,
        dateFrom: '1970-01-01',
        dateTo: new Date().toISOString().substr(0, 10)
    },
}

/* Tests */
it('renders loader if has not jogs', () => {
    const { getByAltText } = render(
        <Jogs { ...jogsProps }
            getJogs={ getJogs }
            setJogsLoading={ setJogsLoading }
            setFilter={ setFilter }
        >
        </Jogs >
    )
    const nothingText = getByAltText('Loading...')
    expect(nothingText).toBeInTheDocument()
})

it('renders jogs correctly', () => {
    const props = { ...jogsProps, loading: false, jogs: [{ id: 0, distance: 5, time: 10, date: '1970-01-01' }] };
    const { container, getByText } = render(
        <BrowserRouter>
            <Jogs { ...props }
                getJogs={ getJogs }
                setJogsLoading={ setJogsLoading }
                setFilter={ setFilter }
            >
            </Jogs >
        </BrowserRouter>
    )
    const renderedDate = getByText('01.01.1970')
    expect(renderedDate).toBeInTheDocument()
    expect(container.querySelector('.jogs__list')).not.toBeNull()
})
