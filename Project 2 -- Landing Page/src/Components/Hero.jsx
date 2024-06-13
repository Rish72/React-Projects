import React from 'react'

function Hero() {
  return (
    <main>
        <div className="content">
            <h1>YOUR FEET DESERVER THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere dolore soluta nihil temporibus doloremque vero fugiat ex ducimus neque.</p>
            <div className="buttons">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="available">
                <p>Also available</p>
                <img src="./public/images/flipkart.png" alt="flipkart" />
                <img src="./public/images/amazon.png" alt="amazon" />
            </div>
        </div>
        <div className="image">
            <img src="./public/images/hero-image.png" alt="" />
        </div>
    </main>
  )
}

export default Hero