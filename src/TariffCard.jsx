import './tariffCard.css';

function TariffCard(props) {
    const { headColor, tariffColor, price, isSelected, speed } = props;
    let cardClass = '';
    if (isSelected) cardClass = 'selected';
    return (
        <div className={`card ${cardClass}`}>
            <div className={`card__head ${headColor}`}>Безлимитный <span>{price}</span></div>
            <div className={`card__tariff ${tariffColor}`}>
                <div className="card__tariff-rub">руб</div>
                <div className="card__tariff-month"><span className="card__tariff-price">{price}</span> /мес</div>
            </div>
            <div className="card__volume">до {speed} Мбит/сек</div>
            <div className="card__text">Объем включенного трафика не ограничен</div>
        </div>
    );
}
export default TariffCard;