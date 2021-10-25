import Axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

import styles from './character.module.css'

import Loader from "../../layout/loader/loader";
import { Link } from "react-router-dom";
import {FcInfo} from 'react-icons/fc'

const Character = (props) => {

    const { idCharacter } = useParams();
    const [response, setResponse] = useState(null);

    useEffect(() => {
        window.scrollTo(0,0)

        Axios.get(
            `${process.env.REACT_APP_API_URL}/characters/${idCharacter}?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}`
        )
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }, [idCharacter])

    return(
        response !== null ?
        <CardCharacter character={response.data.results[0]} provider={response.attributionText} />
        : <Loader />
    )
}

const CardCharacter = (props) => {

    const [show, setShow ] = useState('comics')

    const [items, setItems] = useState(null);

    const {name, thumbnail, description, comics, series, stories, events} = props.character

    useEffect(() => {
        setItems(itemsMap(props.character[show]))
    }, [show, props.character])

    const onChange = (event) => {
        setShow(event.target.value)
    }

    const itemsMap = (props) => {
        if(props.items.length !== 0) {
            return(
                <ul>
                    {
                        props.items.map((element, index) => <li key={index} className={styles.items}>{element.name}</li>
                        )
                    }
                </ul>
            )
        } else {
            return <h4 className={styles.emptyData}> <FcInfo /> No hay datos para mostrar</h4>
        }
    }

    return(
        <section className={styles.container}>
            <div className={styles.contentTitleImg}>
                <img src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt="" />
                <div>
                    <h2 className={styles.title}> {name} </h2>
                    <p className={styles.description}> <span>Description:</span> {description ? description : <>&nbsp;<FcInfo /> Description not available</>} </p>
                    
                    <div className={styles.containerAvailable}>
                        <div>
                            <p className={styles.description}> <span>Available comics:</span> {comics.available} </p>
                            <p className={styles.description}> <span>Available series:</span> {series.available} </p>
                        </div>
                        <div>
                            <p className={styles.description}> <span>Available stories:</span> {stories.available} </p>
                            <p className={styles.description}> <span>Available events:</span> {events.available} </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.showFilter}>
                <div className={styles.containerSelect}>
                        <label htmlFor="see">Show</label>
                        <div className={styles.selectContent}>
                            <select 
                                id="see" 
                                className={styles.select} 
                                name='order' 
                                value={show}
                                onChange={event => onChange(event)}
                            >
                                <option value="comics" >Comics</option>
                                <option value="stories" >Stories</option>
                                <option value="series" >Series</option>
                                <option value="events" >Events</option>
                            </select>
                        </div>
                </div>
                <div className={styles.containerResults}>
                    {items}
                </div>
            </div>

            <div className={styles.dataProvider}>
                <a href="http://marvel.com\"> {props.provider} </a>
            </div>

            <div className={styles.containerButtonBackToHome}>
                <Link className={styles.buttonBackToHome} to='/home'>Go to Home</Link>
            </div>
        </section>
    )
}

export default Character;