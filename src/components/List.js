import Slide from './Slide';

function List ({itemForSale}) {
    const catalog = itemForSale;

    function defineCategory (product) {
        let category = product.id.toLowerCase().includes('new') ? 'catalog_card new' : 'catalog_card';
        return product.discount > 0 ? category = category + ' sale': category;
    };

    return (
        <div className="container">
            <div className="catalog_wrapper">
            {catalog.map((element, index) => {
                    const {id, title,  image, price, discount} = element;
                    const totalPrice = Math.round(price*(1-discount));
                    
                return (
                    <div className= {defineCategory(element)} key={id}>
                        <Slide image={image} />
                        <h3 className="catalog_price" content={discount > 0 ? price + " ₽" : ""}> {totalPrice} </h3>
                        <p className="catalog_title">{title}</p>
                        <button className="catalog_btn">В корзину</button>
                    </div>                    
                )
            })}
            </div>
        </div>
    )}

export default List;