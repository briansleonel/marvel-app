import SideBar from "./sidebar/sidebar";
import Section from './section/section';
import styles from './home.module.css';
import { useState } from "react";

const Home = (props) => {
    
    const [order, setOrder] = useState('ASC');

    const [searchName, setSearchName] = useState('');

    const [limit, setLimit] = useState(20);

    const [comicID, setComicID] = useState('');

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
                limit={limit}
                setLimit={state => setLimit(state)}
                reset={resetFilters}
                setComicID={state => setComicID(state)}
            />

            <Section 
                order={order} 
                searchName={searchName}
                limit={limit}
                comic={comicID}
            />
        </div>
    )
}

export default Home;