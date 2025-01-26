import React, { useState, useCallback } from "react"
import styles from "./App.module.css"
import Header from "./components/Header/Header"
import Smartwatch from "./components/Smartwatch/Smartwatch"
import ProductDataComponent from "./components/ProductData/ProductData"
import productData from "./ProductData"

function App() {
  const [showTime, setShowTime] = useState(true)
  const [image, setImage] = useState(productData.colorOptions[0].imageUrl)

  const toggleTime = useCallback((isTime) => {
    setShowTime(isTime)
  }, [])

  const changeWatchColor = useCallback((url) => {
    setImage(url)
  }, [])

  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />

      <div className={styles.app}>
        <Header />
        <main className={styles.mainContainer}>
          <Smartwatch showTime={showTime} imageUrl={image} />
          <ProductDataComponent toggleTime={toggleTime} changeWatchColor={changeWatchColor} />
        </main>
      </div>
    </>
  )
}

export default App

// This code was refactored and rearranged by AI, but written by me.