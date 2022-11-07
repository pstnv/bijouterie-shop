import { useState } from 'react';
import { newCollection } from '../data/newCollection';
import { mainCollection } from '../data/mainCollection';
import List from './List';
import Filter from './Filter';


function Catalog () {
    const summary = [...newCollection, ...mainCollection];
    const [catalog, setCatalog] = useState(summary);

    const filteredCatalog = (searchTerm) => {
        let newCatalog = [];

        if (searchTerm === "new") {
            newCatalog = summary.filter(item => item.id.toLowerCase().includes('new'));
        }
        else if (searchTerm === "sale") {
            newCatalog = summary.filter(item => item.discount > 0);
        }
        else {
            newCatalog = summary.filter(item => item.searchTerm === searchTerm);
        }
        setCatalog(newCatalog);
    };

    return (
        <div>
            <Filter filteredCatalog = {filteredCatalog}/>
            <section className="catalog">
                <List itemForSale = {catalog} />
            </section>
        </div>
    )
}

export default Catalog;