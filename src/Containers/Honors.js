import React, { Component } from 'react'
import '../global-css.css'
import image from '../Images/PY9C0031.jpg'
import image2 from '../Images/FB_IMG_1509527272761.jpg'
import image3 from '../Images/IMG_20180214_174614_275.jpg'
import image4 from '../Images/Reed.jpg'

class Honors extends Component {

    render() {
        return (
            <div className='full-view container-fluid'>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={image} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image3} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image4} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <h2>Honors & Awards</h2>
                <h3>Highschool</h3>
                <p>
                    + Former Vermont State Long Jump Record Holder and nine-time state champion.
                </p>
                <ul>
                    <li>Long Jump</li>
                    <ul>
                        <li>2015</li>
                        <li>2016</li>
                        <li>2017</li>
                        <li>2018</li>
                    </ul>
                    <li>100 Meter Dash</li>
                    <ul>
                        <li>2017</li>
                        <li>2018</li>
                    </ul>
                    <li>Triple Jump</li>
                    <ul>
                        <li>2016</li>
                        <li>2017</li>
                    </ul>
                    <li>200 Meter Dash</li>
                    <ul>
                        <li>2017</li>
                    </ul>
                </ul>
            </div>
        )
    }
}

export default Honors