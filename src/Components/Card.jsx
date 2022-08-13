import 'bootstrap/dist/css/bootstrap.min.css';


function Card(props) {
    return (
        <div className="card">
            <div><img className="img" src={props.img} alt="pic" /></div>
            <div className="title">{props.englishWord}</div>
            <div>[{props.transcription}]</div>
            <div className="title">{props.russianWord}</div>
        </div>
    );
}

export default Card