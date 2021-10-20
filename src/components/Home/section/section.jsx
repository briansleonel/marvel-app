import Axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import styles from './section.module.css'

const Section = (props) => {

    //const [limit, setLimit] = useState(20);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        Axios.get(
            `${process.env.REACT_APP_API_URL}/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}`
        )
            .then(res => { setResponse(res.data) })
            .catch(err => console.log(err))
        
    }, [])

    useEffect(() => {
        let URI = `${process.env.REACT_APP_API_URL}/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}`
        
        if(props.searchName) {
            URI += `&nameStartsWith=${props.searchName}`
        }
        
        Axios.get(
            `${URI}&limit=${props.limit}&orderBy=${props.order === 'ASC' ? 'name' : '-name'}`
        ) 
            .then(res => { console.log(res.data)
                setResponse(res.data) })
            .catch(err => console.log(err))
    }, [props.searchName, props.limit, props.order])

    const characters = () => {
        if(response === null) {
            return <h4>Vacio</h4>
        } else {
            return response.data.results.map((element) => {
                return (
                    <Link key={element.id} to={`/character/${element.id}`} className={styles.cardLink}>
                        <CardCharacter  character={element} />
                    </Link>
                )
            })
        }
        
    }

    return(
        <section className={styles.sectionContainer}>
            <h2>Personajes</h2>
            
            
            {
                props.searchName && response !== null ? 
                    <div className={styles.infoSearch}>
                        <p>Se muestran <span> {response.data.results.length} </span> coincidencias para <span>{props.searchName}</span></p>
                    </div>
                : <></>
            }

            {
                response !== null ?
                    response.data.results.length === 0 ?
                    <SearchEmpty /> :
                    <>
                        <div className={styles.charactersContainer}>
                            { characters() }
                        </div>

                        <div className={styles.dataProvider}>
                            <a href="http://marvel.com\"> {response.attributionText} </a>
                        </div>
                    </>
                : <h5>Cargando...</h5>
            }

            
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

const SearchEmpty = () => {
    return(
        <div className={styles.searchEmpty}>
            <p>No hay personajes que coincidan con tu búsqueda.</p>
        </div>
    )
}
export default Section;