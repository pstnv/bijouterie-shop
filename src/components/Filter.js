function Filter ({filteredCatalog}) {
    if (typeof(filteredCatalog) === 'function') {
        return (
            <section className="header">
                <div className="container">
                    <ul className="filter">
                        <li onClick={() => filteredCatalog("new")} className="filter_item">Новая коллекция</li>
                        <li onClick={() => filteredCatalog("ring")} className="filter_item">Кольца</li>
                        <li onClick={() => filteredCatalog("earrings")} className="filter_item">Серьги</li>
                        <li onClick={() => filteredCatalog("necklace")} className="filter_item">Колье</li>
                        <li onClick={() => filteredCatalog("bracelet")} className="filter_item">Браслеты</li>
                        <li onClick={() => filteredCatalog("sale")} className="filter_item">Ликвидация</li>
                    </ul>
                </div>
            </section>
        )
    }
    else {
        
    return (
        <section className="header">
            <div className="container">
                <ul className="filter">
                    <li className="filter_item disabled selected">Новая коллекция</li>
                    <li className="filter_item disabled">Кольца</li>
                    <li className="filter_item disabled">Серьги</li>
                    <li className="filter_item disabled">Колье</li>
                    <li className="filter_item disabled">Браслеты</li>
                    <li className="filter_item disabled">Ликвидация</li>
                </ul>
            </div>
        </section>
    )
    }
}

export default Filter;