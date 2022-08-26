import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from './App'
import { MockedProvider } from '@apollo/client/testing'

describe('Routes Test', () => {
    it('Characters page', async () => {
        render(
            <MockedProvider>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </MockedProvider>,
        )
        const charactersLink = await screen.getByTestId('characters')
        userEvent.click(charactersLink)
        expect(screen.getByTestId('medias-page')).toBeInTheDocument()
    })

    it('Medias page', async () => {
        render(
            <MockedProvider>
                <MemoryRouter initialEntries={['/medias']}>
                    <App />
                </MemoryRouter>
            </MockedProvider>,
        )

        const mediasLink = screen.getByTestId('medias')
        userEvent.click(mediasLink)
        expect(screen.getByTestId('characters-page')).toBeInTheDocument()
    })
})
