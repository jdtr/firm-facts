import PropTypes from 'prop-types';
import styles from '../assets/scss/FirmFacts.module.scss'


const FirmFacts = ({ children }) => {
    return (
        <div className={styles.factsitems}>{ children }</div>
    )
}

export default FirmFacts;