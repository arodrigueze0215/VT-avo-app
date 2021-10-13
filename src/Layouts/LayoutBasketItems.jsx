const LayoutBasketItems = ({children}) => {
    return (
        <section className="basket-container">
            <div className="basket-item-list">
                {children}
            </div>
        </section>
    );
}

export default LayoutBasketItems;