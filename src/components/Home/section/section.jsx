import Axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import styles from './section.module.css'

const Section = (props) => {

    const [limit, setLimit] = useState(20);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        Axios.get(
            `${process.env.REACT_APP_API_URL}/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}`
        )
            .then(res => { setResponse(res.data.data) })
            .catch(err => console.log(err))
        
    }, [])

    useEffect(() => {
        let URI = `${process.env.REACT_APP_API_URL}/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}`
        
        if(props.searchName) {
            URI += `&nameStartsWith=${props.searchName}`
        }
        
        Axios.get(
            `${URI}&limit=${limit}&orderBy=${props.order === 'ASC' ? 'name' : '-name'}`
        ) 
            .then(res => { setResponse(res.data.data) })
            .catch(err => console.log(err))
    }, [props.searchName, limit, props.order])

    const characters = () => {
        if(response === null) {
            return <h4>Vacio</h4>
        } else {
            return response.results.map((element) => {
                return (
                    <Link key={element.id} to="/home" className={styles.cardLink}>
                        <CardCharacter  character={element} />
                    </Link>
                )
            })
        }
        
    }

    return(
        <section className={styles.sectionContainer}>
            <h2>Personajes</h2>
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