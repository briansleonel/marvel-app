import Axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Loader from "../../layout/loader/loader";

import imgSpiderMan from './../../../assets/img/spider-man.png';

import styles from './section.module.css'

const Section = (props) => {

    //const [limit, setLimit] = useState(20);
    const [response, setResponse] = useState(null);

    const [loadReults, setLoadResults] = useState(true);

    useEffect(() => {
    }, [])

    useEffect(() => {
        setLoadResults(true);
        window.scrollTo(0,0);
        
        let URI = `${process.env.REACT_APP_API_URL}/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}`
        
        if(props.searchName) {
            URI += `&nameStartsWith=${props.searchName}`
        }

        if(props.comic) {
            URI += `&comics=${props.comic}`
        }
        
        Axios.get(
            `${URI}&limit=${props.limit}&orderBy=${props.order === 'ASC' ? 'name' : '-name'}`
        ) 
            .then(res => {setResponse(res.data); setLoadResults(false);})
            .catch(err => console.log(err))
    }, [props.searchName, props.limit, props.order, props.comic])

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
            <h2>Characters</h2>
            
            
            {
                props.searchName && !loadReults ? 
                    <div className={styles.infoSearch}>
                        <p><span> {response.data.results.length} </span> matches found for <span>{props.searchName}</span></p>
                    </div>
                : <></>
            }

            {
                !loadReults ?
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
                : <Loader />
            }
        </section>
    )
}

const CardCharacter = (props) => {
    const {name, thumbnail} = props.character;

    return(
        <div className={styles.cardContainer}>
            <img src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`} title={`Image of ${name}`} alt={`Imagen de ${name}`} />
            <p> {name} </p>
        </div>
    )
}

const SearchEmpty = () => {
    return(
        <div className={styles.searchEmpty}>
            <img src={imgSpiderMan} alt="Spider-Man" />
            <p>There are no characters matching your search.</p>
        </div>
    )
}

/*
    <div className={styles.searchEmpty}>
        <img src={imgSpiderMan} alt="Spider-Man" />
        <FcInfo className={styles.iconInfo} /> <p>There are no characters matching your search.</p>
    </div>
*/

export default Section;