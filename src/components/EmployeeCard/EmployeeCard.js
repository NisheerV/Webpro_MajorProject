import './EmployeeCard.css';
import Location from './Location/Location';
import Phone from './Phone/Phone';
const EmployeeCard =({empData}) =>{
    return(
        <div className="card"  >
            <div className='card_title'>{empData.name.title}{empData.name.first}{empData.name.last}</div>
            <div className="card_body">
                <Location location={empData.location} />
                <Phone type={"Personal"} number={empData.cell} />
                <Phone type={"Home"} number={empData.phone} />
                <div className="card_image"><img src={empData.picture.medium}></img></div>
            </div>
        </div>
    )
};

export default EmployeeCard;