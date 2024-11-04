import './AdviceCard.scss';
import desktopDivider from '../../assets/images/pattern-divider-desktop.svg';
import mobileDivider from '../../assets/images/pattern-divider-mobile.svg';

function AdviceCard(props) {
    const { id, advice } = props.adviceObject
    return(
        <section className='card'>
            <h2 className='card__header'>{`Advice #${id}`}</h2>
            <p className='card__text'>{advice}</p>
            <img 
                src={desktopDivider}
                alt=''
                className='card__image--desktop'
            />
            <img 
                src={mobileDivider}
                alt=''
                className='card__image--mobile'
            />
            <div
                className='card__image--dice'
                onClick={props.onClick}
            />
        </section>
    )
};

export default AdviceCard;