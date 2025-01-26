import React from "react"
import PropTypes from "prop-types"
import styles from "./FunctionButtons.module.css"

const FunctionButtons = ({ toggleTime }) => {
    return (
        <div>
            <h3 className={styles.optionHeader}>Features</h3>
            <button className={`${styles.featureButton} ${styles.timeButton}`} onClick={() => toggleTime(true)}>
                Time
            </button>
            <button className={`${styles.featureButton} ${styles.heartRateButton}`} onClick={() => toggleTime(false)}>
                Heart Rate
            </button>
        </div>
    )
}

FunctionButtons.propTypes = {
    toggleTime: PropTypes.func.isRequired,
}

export default FunctionButtons

