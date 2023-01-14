import { useHistory } from 'react-router-dom'

interface CardProps {
    item: any
}

export default function Card( { item }: CardProps ) {
    const history = useHistory()

    const handleClickCard = () => {
        history.push(`/character/${item?.id}`)
    }

    return (
        <div className='cardContainer' onClick={handleClickCard}>
            <div className='imageConainer'>
                <img src={item?.image} width="100%" alt="avatar" />
            </div>
            <div className='descDiv'>
                <span className='name'>{item?.name}</span> 
            </div>
        </div>
    )
}