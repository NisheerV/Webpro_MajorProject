import React, {useState} from 'react';
import HomeBody from '../components/HomeBody/HomeBody';
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
            <HomeBody />
            {/* <h1>Welcome to Emp Dir</h1> */}
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
        