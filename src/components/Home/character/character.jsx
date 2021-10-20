import Axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

import styles from './character.module.css'

const Character = (props) => {

    const { idCharacter } = useParams();
    const [response, setResponse] = useState(null);

    useEffect(() => {
        Axios.get(
            `${process.env.REACT_APP_API_URL}/characters/${idCharacter}?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}`
        )
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }, [idCharacter])

    return(
        response !== null ?
        <CardCharacter character={response.data.results[0]} />
        : <> Cargando... </>
    )
}

const CardCharacter = (props) => {

    const {name, thumbnail, description, comics, series, stories, events} = props.character

    return(
        <section className={styles.container}>
            <div className={styles.contentTitleImg}>
                <div>
                    <h2 className={styles.title}> {name} </h2>
                    <p className={styles.description}> <span>Descripción:</span> {description} </p>
                    <p className={styles.description}> <span>Comics disponibles:</span> {comics.available} </p>
                    <p className={styles.description}> <span>Series disponibles:</span> {series.available} </p>
                    <p className={styles.description}> <span>Historias disponibles:</span> {stories.available} </p>
                    <p className={styles.description}> <span>Eventos disponibles:</span> {events.available} </p>
                </div>
                <img src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`} alt="" />
            </div>
        </section>
    )
}

export default Character;