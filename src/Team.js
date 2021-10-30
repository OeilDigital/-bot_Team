import {useState} from 'react';
import './App.css';

const Team = ({add}) => {
    // const [data, setData] = useState([]);
    // setData({add});
    console.log({add});
 

    /* Affichage des joueurs selectionnés dans App */

    return (
    <div className="team">
        {add.map((item) => (
        <div className="player">
            <h1>{item.first_name}</h1>
            <p>{item.last_name}</p>
            <p>{item.gender}</p>
            <img src={item.avatar} alt=""/>
        </div>
    
        ))}
    </div>
    )
}

export default Team;