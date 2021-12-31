// import React,{useState} from 'react';
// import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from '../Register/RegisterElements';

// const Register = () => {
//   const [user,setUser]=useState({
//     Name:'',Contact:'',Email:'',Designation:'',Department:''
//   });

//   let name,value;

//   const handleInputs=(e)=>{
//     console.log(e);
//     name=e.target.name;
//     value=e.target.value;

//     setUser({...user,[name]:value})
//   }

//   const PostData=async(e)=>{
//     e.preventDefault();

//     const {Name,Contact,Email,Designation,Department}=user;
//     const res=await fetch('/register',{
//       method:'POST',
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//         Name,Contact,Email,Designation,Department
//       })
//     });
//     const data=await res.json();
//     if (data.status=== 422|| !data){
//       window.alert("invalid registration");
//       console.log("invalid registration");
//     } else{
//       window.alert("registration successful");
//       console.log("registration successful");
//     }
//   }

//   return (
//     <>
//      <Container>
//         <FormWrap>
//           <Icon to='/'>OmegaHire</Icon>
//           <FormContent>
//             <Form action="#" method='POST' >
//               <FormH1>
//                 Register a member here
//               </FormH1>
//               <FormLabel htmlFor='for'>Name</FormLabel>
//               <FormInput type='name' required  value={user.Name} onChange={handleInputs}/>
//               <FormLabel htmlFor='for'>Contact</FormLabel>
//               <FormInput type='number' required value={user.Contact} onChange={handleInputs}/>
//               <FormLabel htmlFor='for'>Email</FormLabel>
//               <FormInput type='email' required value={user.Email} onChange={handleInputs}/>
//               <FormLabel htmlFor='for'>Designation</FormLabel>
//               <FormInput type='text' required value={user.Designation} onChange={handleInputs}/>
//               <FormLabel htmlFor='for'>Department</FormLabel>
//               <FormInput type='text' required value={user.Department} onChange={handleInputs}/>
//               <FormButton type='submit' onClick={PostData}>Register</FormButton>
//               <Text>Already Register Update your info</Text>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container> 
//     </>
//   )
// }

// export default Register;

// import React,{useState} from 'react';
// import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from '../Register/RegisterElements';

// const Register = () => {
//   return (
//     <>
//      <Container>
//         <FormWrap>
//           <Icon to='/'>OmegaHire</Icon>
//           <FormContent>
//             <Form method='POST' action="/register"  >
//               <FormH1>
//                 Register a member here
//               </FormH1>
//               <FormLabel htmlFor='for'>Name</FormLabel>
//               <FormInput type='name' required  />
//               <FormLabel htmlFor='for'>Contact</FormLabel>
//               <FormInput type='number' required />
//               <FormLabel htmlFor='for'>Email</FormLabel>
//               <FormInput type='email' required/>
//               <FormLabel htmlFor='for'>Designation</FormLabel>
//               <FormInput type='text' required />
//               <FormLabel htmlFor='for'>Department</FormLabel>
//               <FormInput type='text' required />
//               <FormButton type='submit'  >Register</FormButton>
//               <Text>Already Register Update your info</Text>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container> 
//     </>
//   )
// }

// export default Register;

import React, {useState} from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from '../Register/RegisterElements';

const Register = () => {
  const [user,setUser]=useState({
    Name:'',Contact:'',Email:'',Designation:'',Department:'',
  });

  let name,value;

  const handleInputs=(e)=>{
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.name);
    name=e.target.name;
    value=e.target.value;

    // setUser({...user,[name]:value});
    setUser({ ...user, name: e.target.value });
  }

  const PostData= async(e)=>{
    e.preventDefault();

    const {Name,Contact,Email,Designation,Department}=user;
    const res=await fetch('/register',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Name,Contact,Email,Designation,Department
      })
    });
    const data=await res.json();
    if (data.status=== 422|| !data){
      window.alert("invalid registration");
      console.log("invalid registration");
    } else{
      window.alert("registration successful");
      console.log("registration successful");
    }
  }

  return (
    <>
     <Container>
        <FormWrap>
          <Icon to='/'>OmegaHire</Icon>
          <FormContent>
            <Form action="#" method='POST' >
              <FormH1>
                Register an Employee here
              </FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='name' name = "name"  required  
              value={user.Name} 
              onChange={handleInputs}/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput type='number' required 
              value={user.Contact} 
              onChange={handleInputs}/>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required 
              value={user.Email} 
              onChange={handleInputs}/>
              <FormLabel htmlFor='for'>Designation</FormLabel>
              <FormInput type='text' required 
              value={user.Designation} 
              onChange={handleInputs}/>
              <FormLabel htmlFor='for'>Department</FormLabel>
              <FormInput type='text' required 
              value={user.Department} 
              onChange={handleInputs}/>
              <FormButton type='submit' onClick={PostData}>Register</FormButton>
              <Text>Already Registered, go back to update your info</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container> 
    </>
  )
}

export default Register;