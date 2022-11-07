import SubNavigation from "./SubNavigation";

function Payment () {
    return (
        <div>
            <SubNavigation componentName="/payment" componentHeader="Условия оплаты" />
            <section className="payment">
                <div className="container">
                    <h1 className="payment_header">Условия оплаты</h1>
                    <div className="payment_info">
                        <div className="payment_image">
                            <img src="img/bg/bg_descr.webp" alt="payment" />
                        </div>
                        <div className="payment_descr">
                            <p>Для удобства покупателей мы предлагаем различные способы оплаты:</p>
                            <div className="payment_process">
                                <h2 className="payment_subheader">Безналичный расчет</h2>
                                <ul className="payment_list">
                                    <li className="payment_item"> При заказе на сайте с использованием банковских карт следующих платёжных систем: МИР, VISA International, Mastercard Worldwide, JCB.</li>
                                    <li className="payment_item"> При покупке у нас в магазине по адресу: г. Екатеринбург, ул. 8 Марта, 291 с помощью терминала безналичной оплаты.</li>
                                    <li className="payment_item"> При доставке курьером по Екатеринбургу с помощью терминала безналичной оплаты. </li>
                                    <li className="payment_item"> При получении в пункте выдачи заказов Boxberry или СДЭК с помощью терминала безналичной оплаты. </li>
                                </ul>
                            </div>
                            <div className="payment_process">
                                <h2 className="payment_subheader">Наличный расчет</h2>
                                <ul className="payment_list">
                                    <li className="payment_item"> При покупке у нас в магазине по адресу: г. Екатеринбург, ул. 8 Марта, 291.</li>
                                    <li className="payment_item"> При доставке курьером по Екатеринбургу. Данный способ оплаты действует только при доставке по Екатеринбургу. Оплата принимается строго в российских рублях, в сумме, указанной в кассовом чеке.</li>
                                </ul>
                            </div>
                            <div className="payment_process">
                                <h2 className="payment_subheader">Наложенный платеж</h2>
                                <ul className="payment_list">
                                    <li className="payment_item"> Данный способ оплаты возможен при доставке по всем регионам России.</li>
                                    <li className="payment_item"> При получении в пункте выдачи заказов Boxberry или СДЭК с помощью терминала безналичной оплаты.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Payment;