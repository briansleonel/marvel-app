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

/*
            <div className={styles.searchFilter}>
                <input type="text" className={styles.input} />
                <div className={styles.underline}></div>
                <div className={styles.label}>Buscar por nombre</div>
                <span className={styles.icon}> <BsSearch /> </span>
            </div>
*/

/* 
<section className={styles.containerSideBar}>
            <h2>Sidebar</h2>
        </section>
        */

export default SideBar;