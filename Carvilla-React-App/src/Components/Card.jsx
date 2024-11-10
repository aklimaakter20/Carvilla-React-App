import React from 'react'
import './Card.css'
import { MdOutlineDirectionsCar } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";




function Card() {
  return (
    <div>
        <div className="">
        <div className="cards">
            <div className="card">
                <div className="car-img">
                {/* <FaCar size={80} color='#8C93A1'/> */}
                <MdOutlineDirectionsCar size={80} color='#8C93A1' />
                </div>
                <div className="card-title">
                    <h3>largest dealership of cars</h3>
                </div>
                <div className="card-p">
                    <p>Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut <br /> den fugit sed quia.</p>
                </div>
                <div className="line"></div>
            </div>
            <div className="card">
                <div className="car-img">
                {/* <FaCar size={80} color='#8C93A1'/> */}
                <FaCarCrash size={80} color='#8C93A1' />
                </div>
                <div className="card-title">
                    <h3>largest dealership of cars</h3>
                </div>
                <div className="card-p">
                    <p>Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut <br /> den fugit sed quia.</p>
                </div>
                <div className="line"></div>
            </div>
            <div className="card">
                <div className="car-img">
                {/* <FaCar size={80} color='#8C93A1'/> */}
                <MdCarRental size={80} color='#8C93A1' />
                </div>
                <div className="card-title">
                    <h3>largest dealership of cars</h3>
                </div>
                <div className="card-p">
                    <p>Nemo enim ipsam voluptatem quia <br /> voluptas sit aspernatur aut odit aut <br /> den fugit sed quia.</p>
                </div>
                <div className="line"></div>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Card
