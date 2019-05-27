import React from "react"
import Header from "./Header"
import ImgwithTitle from "./ImgwithTitle"
import Video from "./Video"
import safetyImg from "./img/safety.webp"
import vehicleImg from "./img/cars.webp"
import carsVideo from "./video/cars.mp4"

class MainPage extends React.Component {
    render() {
        return (
          <>
            <Header />
            <Video src={carsVideo}/>
            <ImgwithTitle
              mainTitle={"Setting 700+ cities in motion"}
              extraInfo={
                "With 14 million trips a day, doing the right thing means building technology to make your safety a top priority."
              }
              name="operaing in 700+cities"
              imgUrl={vehicleImg}
            />
            <ImgwithTitle
              mainTitle={"Safety is at the heart of what we do"}
              extraInfo={
                "With 14 million trips a day, doing the right thing means building technology to make your safety a top priority."
              }
              name="safety"
              imgUrl={safetyImg}
            />
          </>
        );
    }
}

export default MainPage;