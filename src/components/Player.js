import './Player.css';

function Player(props) {
    return(
        <div className="player">
            <div className="row">
                <div className="col col-1 num-col">{props.num}</div>
                <div className="col col-5 name-col">{props.name}</div>
                <div className="col pos-col">{props.pos}</div>
            </div>
        </div>
    );
}

export default Player;