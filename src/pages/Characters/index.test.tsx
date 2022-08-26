import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { Characters } from '../index'
import { GET_ALL_CHARACTERS } from '../../apollo/queries/character.query'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

const mocks = [
    {
        request: {
            query: GET_ALL_CHARACTERS,
            variables: {
                page: 1,
                perPage: 16,
            },
        },
        result: {
            data: {
                Page: {
                    characters: [
                        {
                            id: 1,
                            image: {
                                medium: 'https://us22.worksnaps.com/app/images/logo_worksnaps_xsmall.png',
                            },
                            name: { first: 'Ichigo', last: 'Kurosaki' },
                        },
                        {
                            id: 2,
                            image: {
                                medium: 'https://us22.worksnaps.com/app/images/logo_worksnaps_xsmall.png',
                            },
                            name: { first: 'Almaz', last: 'Dzhumaev' },
                        },
                    ],
                },
            },
        },
    },
]

describe('Test characters component', () => {
    it('should render loading state initially', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MemoryRouter>
                    <Characters />
                </MemoryRouter>
            </MockedProvider>,
        )

        expect(await findByText('Loading...')).toBeInTheDocument()
    })

    it('should render list without errors', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MemoryRouter>
                    <Characters />
                </MemoryRouter>
            </MockedProvider>,
        )

        expect(await findByText(/Kurosaki/)).toBeInTheDocument()
        expect(await findByText(/Dzhumaev/)).toBeInTheDocument()
    })

    it('should show error UI', async () => {
        const errorMock = {
            request: {
                query: GET_ALL_CHARACTERS,
                variables: {
                    page: 1,
                    perPage: 16,
                },
            },
            error: new Error('An error occurred'),
        }

        const { findByText } = render(
            <MockedProvider mocks={[errorMock]} addTypename={false}>
                <MemoryRouter>
                    <Characters />
                </MemoryRouter>
            </MockedProvider>,
        )

        expect(await findByText(/An error occurred/)).toBeInTheDocument()
    })
})
