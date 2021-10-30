import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Team from './Team';

const baseURL = "https://random-data-api.com/api/users/random_user/";

function App() {

    const [post, setPost] = useState(null);
    const [array, setArray] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);


    // Je requete sur mon API (cf.baseURL) en appliquant une requete axios

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, [refreshKey]);

    /* fonction de callback pour relancer une requete sur l'api  */

    const handleCreateNewBot = (bot) => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
        setRefreshKey(oldKey => oldKey +1)
      };
    
    /* fonction pour selectionner un joueur et l'ajouter au tableau qui sera addressé 
     à <Team > en attribut */

    const add = () => {
      if(array.length < 6){
      setArray(array => [...array,post]);
      console.log(array);
    }else{};
    };

    if (!post) return null;


    return (
    <div className="App">
        <h1>{post.first_name}</h1>
        <p>{post.last_name}</p>
        <p>{post.gender}</p>
        <img src={post.avatar} alt=""></img>
        <br></br>
        <button onClick={add} className="btn btn-success">Select 'bot</button>
        <button onClick={handleCreateNewBot} className="btn btn-success mx-2">Other 'bot</button>
        <hr/>
        {<Team add={array} />}
        
    </div>
    );
  }
export default App;
