import type { JSX } from "react";

interface IPropsProductCard {
    title: string;
    origin: string;
    price: number;
    currency: "USD" | "RUB" | "EUR";
}

const ProductCard = (props: IPropsProductCard): JSX.Element => {
    const { title, origin, price, currency } = props;

    const formattedPrice = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
    }).format(price);

    return (
        <div className="card">
            <img className="card__img" src="https://3logic.ru/pimg/pim/regular/1068485.jpg" alt="Карточка товара"/>
            <div className="card__info">
                <p className="card__title">{title}</p>
                <p>{origin}</p>
                <p>{formattedPrice}</p>
            </div>
        </div>
    );
};

export default ProductCard;