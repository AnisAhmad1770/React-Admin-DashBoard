
import ChartBox from "../../components/ChartBox/ChartBox"
import TopBox from "../../components/topBox/TopBox"
import { chartBoxUser,chartBoxConversion,chartBoxProduct,chartBoxRevenue } from "../../data"
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
      
       <div className="box box1">
        <TopBox/>
       </div>

       <div className="box box2"><ChartBox {...chartBoxUser}/> </div>
       <div className="box box3"><ChartBox{...chartBoxProduct}/></div>
       <div className="box box4">Box4</div>
       <div className="box box5"><ChartBox{...chartBoxRevenue}/></div>
       <div className="box box6"><ChartBox{...chartBoxConversion}/></div>
       <div className="box box7">Box7</div>
       <div className="box box8">Box8</div>
       <div className="box box9">Box9</div>
    </div>
  )
}

export default Home
