import PropTypes from 'prop-types';
import styles from '../assets/scss/CardItem.module.scss'


const CardButton = ({ variant, children }) => {
    const buttonClass = `${styles.cardbutton} ${variant ? `${styles[variant]}` : ''}`;

    return (
        <button className={buttonClass}>{children}</button>
    )
}

CardButton.propTypes = {
    variant: PropTypes.oneOf(['not-icon', 'disabled']),
    children: PropTypes.node.isRequired
};

export default CardButton;