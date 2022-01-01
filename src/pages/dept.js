import React, {useState} from 'react';
//  
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Department from "../components/Department/Department";



const Dept = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <h1>Departments</h1>
            <Department />
        </>
     );
}
 
export default Dept;