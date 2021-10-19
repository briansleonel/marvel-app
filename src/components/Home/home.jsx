import SideBar from "./sidebar/sidebar";
import Section from './section/section';
import styles from './home.module.css';
import { useState } from "react";

const Home = (props) => {
    
    const [order, setOrder] = useState('ASC');

    const [searchName, setSearchName] = useState('');

    const resetFilters = () => {
        setOrder('ASC');
        setSearchName('');
    }

    return(
        <div className={styles.containerHome}>
            <SideBar 
                order={order} 
                setOrder={(state) => setOrder(state)} 
                searchName={searchName}
                setSearchName={(state) => setSearchName(state)}
                reset={resetFilters}
            />

            <Section 
                order={order} 
                searchName={searchName}
            />
        </div>
    )
}

export default Home;