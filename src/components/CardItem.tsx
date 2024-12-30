import PropTypes from 'prop-types';
import styles from '../assets/scss/CardItem.module.scss';
import CardButton from './CardButton';


function CardItem ({ variant, children, onClick }) {
    const cardClass = `${styles.carditem} ${variant ? `${styles[variant]}` : ''}`;

    return (
        <div className={cardClass}>{children}</div>
    )
}

CardItem.propTypes = {
    variant: PropTypes.oneOf(['border', 'main']),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
  
CardItem.defaultProps = {
    variant: '',
    onClick: () => {},
};

export default CardItem;