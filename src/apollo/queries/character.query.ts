import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
    query getAllCharacter($page: Int) {
        Page(page: $page) {
            characters {
                name {
                    first
                    last
                }
                image {
                    medium
                }
                age
            }
        }
    }
`
