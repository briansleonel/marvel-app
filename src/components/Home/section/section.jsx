import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import styles from './section.module.css'

const Section = (props) => {

    const [limit, setLimit] = useState(20);
    const [response, setResponse] = useState(null);
    //const [characters, setCharacters] = useState(null);

    //console.log(process.env.REACT_APP_API_HASH)

    //&nameStartsWith=${props.searchName}&

    const getCharactersDefault = () => {
        const res = Axios.get(`${process.env.REACT_APP_API_URL}/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}&limit=${limit}orderBy=${props.order === 'ASC' ? 'name' : '-name'}`)

        setResponse(res.data)
        //setCharacters(res.data.data.results)
        //await fetch(`${process.env.REACT_APP_API_URL}/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}&limit=${limit}orderBy=${props.order === 'ASC' ? 'name' : '-name'}`).then(info => info.json()).then(data => setResponse(data)).catch(err => console.log(err));

        //loadCharacters();
    }

    useEffect(() => {
        Axios.get(
            `${process.env.REACT_APP_API_URL}/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}&limit=${limit}&orderBy=${props.order === 'ASC' ? 'name' : '-name'}`
        )
            .then(res => { setResponse(res.data.data) })
            .catch(err => console.log(err))
        
    }, [props.order, limit])

    const characters = () => {
        if(response === null) {
            return <h4>Vacio</h4>
        } else {
            return response.results.map((element) => {
                return <CardCharacter key={element.id} character={element} />
            })
        }
        
    }

    return(
        <section className={styles.sectionContainer}>
            <h2>Section</h2>
            <p>
                {props.order}
            </p>
            <p>
                {props.searchName}
            </p>
            <div className={styles.charactersContainer}>
                { characters() }
            </div>
        </section>
    )
}

const CardCharacter = (props) => {
    const {name, thumbnail} = props.character;

    return(
        <div className={styles.cardContainer}>
            <img src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`} title={`Imagen de ${name}`} alt={`Imagen de ${name}`} />
            <h4> {name} </h4>
        </div>
    )
}

export default Section;