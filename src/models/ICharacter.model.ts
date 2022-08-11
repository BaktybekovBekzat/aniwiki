import IBirth from './IBirth.model'
import IImage from './IImage.model'
import IName from './IName.model'

interface ICharacter {
    id: number
    name: IName
    image: IImage
    description: string
    gender: string
    age: string
    siteUrl: string
    bloodType: string
    isFavourite: boolean
    dateOfBirth: IBirth
}

export default ICharacter
