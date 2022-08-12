import { useQuery } from '@apollo/client'
import { FC, useState } from 'react'
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
    const { data, loading } = useQuery<ICharactersData, IVars>(GET_ALL_CHARACTERS, {
        variables: { page: page, perPage: 16 },
    })

    return (
        <div className='characters'>
            <div className="container">
                <h1 className='characters-title'>Characters</h1>
                <ul className='characters-list'>
                    {data?.Page.characters.map((char) => (
                        <li key={char.id}>
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
