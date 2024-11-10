import React from "react";
import FCReuse from "../Components/FCReuse";
import fc1 from "../assets/images/featured-cars/fc1.png";
import fc2 from "../assets/images/featured-cars/fc2.png";
import fc3 from "../assets/images/featured-cars/fc3.png";
import fc4 from "../assets/images/featured-cars/fc4.png";
import fc5 from "../assets/images/featured-cars/fc5.png";
import fc6 from "../assets/images/featured-cars/fc6.png";
import fc7 from "../assets/images/featured-cars/fc7.png";
import fc8 from "../assets/images/featured-cars/fc8.png";

function FeaturedCar() {
  return (
    <div>
      <div className="FeaturedCar-section">
        <h4>checkout the featured cars</h4>
        <h1>featured cars</h1>
        <div className="line"></div>

        <div className="car-row1">
          <FCReuse
            image={fc1}
            model="Model : 2017 3100 mi 240HPautomatic"
            heading="BMW 6-series gran coupe"
            price="$89,395"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
          />
            <FCReuse
            image={fc2}
            model="2017 3100 mi 240HPautomatic"
            heading="BMW 6-series gran coupe"
            price="$89,395"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
          />
            <FCReuse
            image={fc3}
            model="2017 3100 mi 240HPautomatic"
            heading="BMW 6-series gran coupe"
            price="$89,395"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
          />
            <FCReuse
            image={fc4}
            model="2017 3100 mi 240HPautomatic"
            heading="BMW 6-series gran coupe"
            price="$89,395"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
          />
        </div>
          <div className="car-row2">
          <FCReuse
            image={fc5}
            model="2017 3100 mi 240HPautomatic"
            heading="BMW 6-series gran coupe"
            price="$89,395"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
          />
            <FCReuse
            image={fc6}
            model="2017 3100 mi 240HPautomatic"
            heading="BMW 6-series gran coupe"
            price="$89,395"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
          />
            <FCReuse
            image={fc7}
            model="2017 3100 mi 240HPautomatic"
            heading="BMW 6-series gran coupe"
            price="$89,395"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
          />
            <FCReuse
            image={fc8}
            model="2017 3100 mi 240HPautomatic"
            heading="BMW 6-series gran coupe"
            price="$89,395"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedCar;
