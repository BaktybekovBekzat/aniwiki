import { useQuery } from '@apollo/client'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { GET_ALL_CHARACTERS } from '../../apollo/queries/character.query'
import ICharacter from '../../models/ICharacter.model'

interface IVars {
    page: number
    perPage: number
}

interface ICharactersData {
    Page: {
        characters: ICharacter[]
    }
}

const Characters: FC = () => {
    const [page, setPage] = useState<number>(1)
    const { data, loading, error } = useQuery<ICharactersData, IVars>(GET_ALL_CHARACTERS, {
        variables: { page: page, perPage: 16 },
    })

    return (
        <div className='characters'>
            <div className='container'>
                <h1 className='characters-title' data-testid='characters-page'>
                    Characters
                </h1>
                <Link to='/medias' data-testid='characters'>
                    Medias link
                </Link>
                <ul className='characters-list'>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error.message}</p>}

                    {data?.Page.characters.map((char) => (
                        <li key={char.id} data-testid='characters-item'>
                            <img src={char.image.medium} alt='' />
                            <p>
                                {char.name.last} {char.name.first}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Characters
