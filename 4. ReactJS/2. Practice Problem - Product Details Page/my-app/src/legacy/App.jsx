import { useState, useEffect } from 'react'
import './App.css'
import ProductData from './ProductData'

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const ProductDataComponent = ({ toggleTime, changeWatchColor }) => {
  return (
    <div>
      <div>
        <h1 id="product-name" description="title">{ProductData.title}</h1>
        <p id="description" description="description">{ProductData.description}</p>
      </div>

      <div>
        <h3 className="option-header">Select Color</h3>
        {ProductData.colorOptions.map((item, index) => (
          <img className="watch-image" src={item.imageUrl} description={item.styleName} key={index} onClick={() => changeWatchColor(item.imageUrl)} />
        ))
        }
      </div>

      <div>
        <FunctionButtons toggleTime={toggleTime} />
      </div>

      <div>
        <button id="buy-btn"><span className="button-text">BUY NOW!</span></button>
      </div>
    </div>
  )
}

const Smartwatch = ({ showTime, imageUrl }) => {
  const [time, setTime] = useState(getCurrentTime());
  const [heartRate, setHeartRate] = useState(80);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div id="smartwatch-container">
      {showTime ? (
        <h3 id="time">{time}</h3>) : (
        <div id="heart-rate-container">
          <img src="https://cdn-icons-png.flaticon.com/512/865/865969.png" id="heart-rate-image" />
          <h3 id="heart-rate">{heartRate}</h3>
        </div>
      )}

      <img src={imageUrl} id="smartwatch-image" alt="Smartwatch" />
    </div>
  )
}

const FunctionButtons = ({ toggleTime }) => {
  return (
    <div>
      <h3 className="option-header">Features</h3>
      <button id="time-btn" className="feature-button" onClick={() => toggleTime(true)}>Time</button>
      <button id="heart-rate-btn" className="feature-button" onClick={() => toggleTime(false)}>Heart Rate</button>
    </div>
  )
}

const Header = () => {
  return (
    <header id="website-header">
      <a href="https://www.mercadolibre.com"><img
        src="https://http2.mlstatic.com/storage/developers-site-cms-admin/partner-center/279801394156-Mercado-Libre.png"
        alt="MercadoLibre" id="mercado-libre" /></a>
    </header>
  )
}

const Showcase = () => {
  const [showTime, setShowTime] = useState(true);
  const [image, setImage] = useState(ProductData.colorOptions[0].imageUrl)

  const toggleTime = (isTime) => {
    setShowTime(isTime);
  };

  const ChangeWatchColor = (url) => {
    setImage(url);
  }

  return (
    <div id="main-container">
      <Smartwatch showTime={showTime} imageUrl={image} />
      <ProductDataComponent toggleTime={toggleTime} changeWatchColor={ChangeWatchColor} />
    </div>
  )
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const getCurrentTime = () => {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function App() {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />

      <Header />
      <Showcase />
    </>
  )
}

export default App