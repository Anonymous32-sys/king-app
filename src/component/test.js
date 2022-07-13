import React from "react";
import "../component/test.css"
import { FaShoppingCart } from "react-icons/fa";
import Mapboy from "./test-img";
const delay = 2500;
function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === Mapboy.length - 1 ? 0 : prevIndex + 1
              ),
            delay
          );
    
        return () => {
            resetTimeout();
        };
      }, [index]);
    return (
      <div className="slideshow">
        <div className="slideshowSlider" 
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {Mapboy.map((item) => {
                return(
                    <div className="slide">
                        <h1 id="item-name">{item.name}</h1>
                        <h3 id="item-other">{item.other}</h3>
                        <h6 id="item-subtext">{item.subtext}</h6>
                        <h1 id="item-other1">{item.other1}</h1>
                        <h3 id="item-subtext2">{item.subtext2}</h3>
                        <img id="img-url1" src={item.img_url1} alt=""/>
                        <img id="img-url2" src={item.img_url2} alt=""/>
                        <img id="img-url" src={item.img_url} alt=""/>
                        <button>Shop Now <FaShoppingCart/></button>
                    </div>
                )
            })}
          </div>
          <div className="slideshowDots">
        {Mapboy.map((_, idx) => (
          <div key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
              setIndex(idx);
            }}></div>
        ))}
      </div>
    </div>
    );
  }
export default Slideshow