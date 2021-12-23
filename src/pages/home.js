import React, {useState} from 'react';
import HomeBody from '../components/HomeBody/HomeBody';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return ( 
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {/* <HomeBody /> */}
            <InfoSection {...homeObjOne}/>
        </>
     );
};
 
export default Home;



//  style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '90vh'
//           }} >
//             <h1>Welcome to Emp Dir</h1>
            {/* <Navbar /> */}
        