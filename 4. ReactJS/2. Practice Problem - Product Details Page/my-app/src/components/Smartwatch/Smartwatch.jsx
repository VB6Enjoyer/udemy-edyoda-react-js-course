import React, { useState, useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import styles from "./Smartwatch.module.css"

const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString("en-US", { hour12: false })
}

const Smartwatch = ({ showTime, imageUrl }) => {
    const [time, setTime] = useState(getCurrentTime())
    const [heartRate] = useState(80)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const display = useMemo(() => {
        if (showTime) {
            return <h3 className={styles.time}>{time}</h3>
        }
        return (
            <div className={styles.heartRateContainer}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/865/865969.png"
                    className={styles.heartRateImage}
                    alt="Heart rate icon"
                />
                <h3 className={styles.heartRate}>{heartRate}</h3>
            </div>
        )
    }, [showTime, time, heartRate])

    return (
        <div className={styles.container}>
            {display}
            <img src={imageUrl || "/placeholder.svg"} className={styles.image} alt="Smartwatch" />
        </div>
    )
}

Smartwatch.propTypes = {
    showTime: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
}

export default Smartwatch

