import { useEffect, useState } from 'react'
import Modal from '../../Elements/Modal/Modal'
import Form from '../../Elements/Form/Form'
import GetServices from '../../../Api/GetServices'
import DelServices from '../../../Api/DelServices'
// import Card from '../../Elements/Card/Card'
import './Homepage.sass'


export default function Homepage() {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState(false)
    // const [flagDelCard, setflagDelCard] = useEffect(false)
    async function getCards() {
        const cards = await GetServices.getCards()
        setData(cards)
    }
    

    function deleteCard(id) {
        DelServices.delCard(id)
    }


    useEffect(() => {
        getCards()
    }, [])
    
    if (!data) {
        return <h1 className="error">Something went wrong...</h1>
    }

    const openModal = () => {
        setModal(true)
    }


    return (
        <div >
            {modal && <Modal closeModal={() => { setModal(false) }}><Form/></Modal>}
            {data.map((item, index) =>
                <div className="table" key={index} > 
                    <div className="table__word">{item.englishWord}</div>
                    <div className='table__word'>{item.translate}</div>
                    <div className='transcript'>
                        <div className='table__word'>{item.transcription}</div>
                        <button className='table__btn' onClick={() => { deleteCard(item.id) }}>x</button>
                    </div>
                </div>
            )}
            <div>
                <button onClick={openModal} >add word</button>
                </div>
        </div>
    )
}