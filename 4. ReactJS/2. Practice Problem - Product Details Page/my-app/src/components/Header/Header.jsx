import React from "react"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="https://www.mercadolibre.com" aria-label="MercadoLibre homepage">
                <img
                    src="https://http2.mlstatic.com/storage/developers-site-cms-admin/partner-center/279801394156-Mercado-Libre.png"
                    alt="MercadoLibre"
                    className={styles.logo}
                />
            </a>
        </header>
    )
}

export default Header
