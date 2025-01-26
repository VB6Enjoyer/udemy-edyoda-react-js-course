import React from "react"
import PropTypes from "prop-types"
import styles from "./ProductData.module.css"
import FunctionButtons from "../FunctionButtons/FunctionButtons"
import productData from "../../ProductData"

const ProductDataComponent = ({ toggleTime, changeWatchColor }) => {
    return (
        <div>
            <h1 className={styles.productName}>{productData.title}</h1>
            <p className={styles.description}>{productData.description}</p>

            <div>
                <h3 className={styles.optionHeader}>Select Color</h3>
                {productData.colorOptions.map((item, index) => (
                    <img
                        className={styles.watchImage}
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.styleName}
                        key={index}
                        onClick={() => changeWatchColor(item.imageUrl)}
                    />
                ))}
            </div>

            <FunctionButtons toggleTime={toggleTime} />

            <button className={styles.buyButton}>
                <span className={styles.buttonText}>BUY NOW!</span>
            </button>
        </div>
    )
}

ProductDataComponent.propTypes = {
    toggleTime: PropTypes.func.isRequired,
    changeWatchColor: PropTypes.func.isRequired,
}

export default ProductDataComponent

