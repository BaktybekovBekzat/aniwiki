import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
    query getAllCharacter($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            characters {
                id
                name {
                    first
                    last
                }
                image {
                    medium
                }
            }
        }
    }
`
