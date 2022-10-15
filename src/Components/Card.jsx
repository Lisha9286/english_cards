import './Homepage.sass';

export default function Card(props) {
    return (
        <>
            <div className="table__word">{props.englishWord}</div>
            <div className='table__word'>{props.russianWord}</div>
            <div className='table__word'>{props.transcription}</div>
        </>
        
    )
}