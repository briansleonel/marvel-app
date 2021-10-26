//import { useState } from "react";
import styles from "./sidebar.module.css"
import { BsSearch } from 'react-icons/bs';
import { useState } from "react/cjs/react.development";
import Axios from "axios";

const SideBar = (props) => {

    const [inputSearchName, setInputSearchName] = useState('');

    const [inputSearchComic, setInputSearchComic] = useState('');

    const [comics, setComics] = useState(null);

    const [inputChecked, setInputChecked] = useState(true);

    const onChangeOrder = (event) => {
        props.setOrder(event.target.value)
    }

    const onHandleChangeSearchName = (event) => {
        setInputSearchName(event.target.value);
    }

    const onHandleChangeSearchComic= event => {
        setInputSearchComic(event.target.value);
    }

    const onClickSearch = (event) => {
        event.preventDefault();
        props.setComicID('')
        setInputSearchComic('');
        setComics(null)
        props.setSearchName(inputSearchName);
    }

    const onClickSearchComic = event => {
        event.preventDefault();
        searchComicsMatches(inputSearchComic);
    }

    const searchComicsMatches = (value) => {
        let URI = `${process.env.REACT_APP_API_URL}/comics?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_API_HASH}`
        Axios.get(`${URI}&titleStartsWith=${value}`).then(res => {
            console.log(res.data.data.results)
            setComics(mapComics(res.data.data.results))
        })
    }

    const mapComics = comics => {
        if(comics.length === 0) {
            return <p>Not found</p>
        } else {
            return comics.map(e => <p className={styles.linkComic} key={e.id} onClick={() => onClickComic(e.id)}>{e.title}</p>)
        }
    }

    const onClickComic = id => {
        props.setComicID(id);
        setInputSearchName('');
        props.setSearchName('');
        setInputChecked(!inputChecked);
    }

    const onClickResetFilters = (event) => {
        props.reset()
        setInputSearchName('');
        props.setLimit(20)
        setComics(null);
        props.setComicID('')
        setInputSearchComic('')
    }

    const onChangeLimit = (event) => {
        props.setLimit(event.target.value)
    }

    return(
        <section className={styles.containerSideBar}>
            <h2 className={styles.title}>Filters</h2>

            <div id="filters">

                <div className={styles.orderByContent}>
                    <label htmlFor="orderBy">Order by name</label>
                    <div className={styles.selectContent}>
                        <select 
                            id="orderBy" 
                            className={styles.select} 
                            name='order' 
                            value={props.order}
                            onChange={(event) => onChangeOrder(event)}
                        >
                            <option value="ASC" >A - Z</option>
                            <option value="DESC" >Z - A</option>
                        </select>
                    </div>
                </div>

                <div className={styles.limitCharacters}>
                    <label htmlFor="limit" className={styles.labelStart}> Show </label>

                    <div className={styles.selectContent}>
                        <select 
                            id="limit" 
                            className={styles.select} 
                            name='limit' 
                            value={props.limit}
                            onChange={event => onChangeLimit(event)}
                        >
                            <option value="10" >10</option>
                            <option value="15" >15</option>
                            <option value="20" >20</option>
                            <option value="25" >25</option>
                            <option value="30" >30</option>
                        </select>
                    </div>
                    <label htmlFor="limit" className={styles.labelEnd}> characters </label>
                </div>

                <div className={styles.search}>
                    <input 
                        type="text" 
                        name='searchName' 
                        className={styles.searchTerm} 
                        placeholder="Search character name..." 
                        onChange={(event) => onHandleChangeSearchName(event)}
                        value={inputSearchName}
                    />
                    <button 
                        type="button" 
                        className={styles.searchButton} 
                        onClick={event => onClickSearch(event)}
                    >
                        <BsSearch />
                    </button>
                </div>

                <div className={styles.subtitle}>
                    <p>Search by comics</p>
                </div>

                <div className={styles.search}>
                    <input 
                        type="text" 
                        name='inputSearchComic' 
                        className={styles.searchTerm} 
                        placeholder="Search comic name..." 
                        onChange={(event) => onHandleChangeSearchComic(event)}
                        value={inputSearchComic}
                    />
                    <button 
                        type="button" 
                        className={styles.searchButton} 
                        onClick={event => onClickSearchComic(event)}
                    >
                        <BsSearch />
                    </button>
                </div>

                {
                    comics ? 
                    <div className={styles.acordionContent}>
                        <div className={styles.tab}>
                            <input className={styles.acordionInput} checked={inputChecked} onClick={() => setInputChecked(!inputChecked)} type="checkbox" id="chck1" />
                            <label className={styles.tabLabel} for="chck1">Comics found</label>
                            <div className={styles.tabContent}>
                                {inputChecked ? comics : <></>}
                            </div>
                        </div>
                    </div>
                    : <></>
                }

                <div className={styles.buttonReset}>
                    <button type='button' onClick={event => onClickResetFilters(event)}>Reset filters</button>
                </div>
            </div>
            
        </section>
    )
}

export default SideBar;