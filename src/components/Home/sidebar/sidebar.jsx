//import { useState } from "react";
import styles from "./sidebar.module.css"
import { BsSearch } from 'react-icons/bs';
import { useState } from "react/cjs/react.development";

const SideBar = (props) => {

    const [inputSearchName, setInputSearchName] = useState('');

    const onChangeOrder = (event) => {
        props.setOrder(event.target.value)
    }

    const onHandleChangeSearchName = (event) => {
        setInputSearchName(event.target.value);
    }

    const onClickSearch = (event) => {
        event.preventDefault();
        props.setSearchName(inputSearchName)
    }

    const onClickResetFilters = (event) => {
        props.reset()
        setInputSearchName('');
        props.setLimit(20)
    }

    const onChangeLimit = (event) => {
        props.setLimit(event.target.value)
    }

    return(
        <section className={styles.containerSideBar}>
            <h2 className={styles.title}>Filtros</h2>

            <form id="filters">
                <div className={styles.orderByContent}>
                    <label htmlFor="orderBy">Ordenar por nombre</label>
                    <div className={styles.selectContent}>
                        <select 
                            id="orderBy" 
                            className={styles.select} 
                            name='order' 
                            value={props.order}
                            onChange={(event) => onChangeOrder(event)}
                        >
                            <option value="ASC" >Ascendente</option>
                            <option value="DESC" >Descendente</option>
                        </select>
                    </div>
                </div>

                <div className={styles.limitCharacters}>
                    <label htmlFor="limit" className={styles.labelStart}> Mostrar </label>

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
                    <label htmlFor="limit" className={styles.labelEnd}> personajes </label>
                </div>

                <div className={styles.search}>
                    <input 
                        type="text" 
                        name='searchName' 
                        className={styles.searchTerm} 
                        placeholder="Buscar por nombre..." 
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

                <div className={styles.buttonReset}>
                    <button type='button' onClick={event => onClickResetFilters(event)}>Limpiar filtros</button>
                </div>
            </form>
            
        </section>
    )
}

export default SideBar;