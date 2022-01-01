

import React, { useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EmployeeCard from '../components/EmployeeCard/EmployeeCard';
import './emp.css';
import Footer from '../components/Footer/Footer';

const Dept = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [employ,setEmploy] = useState([]);
  const [employall,setEmployall] = useState([]);

     const toggle = () => {
         setIsOpen(!isOpen);
     };
   
    useEffect (() =>{
        (async() =>{
            let empData;
            try {
                const response = await fetch('https://randomuser.me/api/?results=10');
                const empData =  (await response.json())["results"];
                setEmploy(empData);
                setEmployall(empData);
            } 
            catch (error) {
                console.log(error);
                empData =[];
                setEmploy(empData);
            }
           
        })();
         
    },[]);
    
    const filtercards = event =>{
        const value= event.target.value.toLowerCase();
        const filteredemp= employall.filter(
            employ=> (`${employ.name.first} ${employ.name.last}`
            .toLowerCase()
            .includes(value)
        )
        );
        setEmploy(filteredemp);
    }

    return ( 
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className='dept'>
            <h1>Employee Search</h1>
            <input className='search' placeholder='search' onInput={filtercards}/>
            <div className='card_container' >
            { employ.map((employ,index)=>(
                <EmployeeCard empData ={employ} key={index}/>
            )) }
            </div> 
            </div>
            <Footer />
        </>
     );
}
 
export default Dept;