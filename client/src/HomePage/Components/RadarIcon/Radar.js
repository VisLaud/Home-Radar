// CSS References:
// Brushed metal - https://simurai.com/lab/2011/08/21/brushed-metal
// Graph paper - https://codepen.io/digisam/pen/vGbLgW
//Radar style reference: https://codepen.io/Cheesetoast/pen/jOyJxEy
import styles from './RadarStyle.css';

const Radar = () => {
    return (
        <div className="radar-container">
            <div className="radar">
                <div className="grid"></div>
                <div className="scanner"></div>
                <div className="target"></div>
                <div className="target"></div>
                <div className="target"></div>
                <div className="target"></div>
                <div className="target"></div>
            </div>
        </div>
    )
}

export default Radar;