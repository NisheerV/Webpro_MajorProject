import React, { useState } from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from '../Update/UpdateElements';

const Update = () => {

  const [user,setUser]=useState({
    Name:'',Contact:'',Email:'',Designation:'',Department:''
  });

  let name,value;

  const handleInputs=(e)=>{
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.name);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
    // setUser({...user,name:e.target.value});
  }

  const PostData=async(e)=>{
    e.preventDefault();

    const {Name,Contact,Email,Designation,Department}=user;
    const res=await fetch('/registers',{
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
            <Form action="#">
              <FormH1>
                Update Employee info here
              </FormH1>
              <FormLabel >Name</FormLabel>
              <FormInput type='text' name="Name" id='Name' placeholder="your Name" required  value={user.Name} onChange={handleInputs}/>
              <FormLabel >Contact</FormLabel>
              <FormInput type='number' name="Contact" id='Contact' placeholder="your Contact Number" required  value={user.Contact} onChange={handleInputs}/>
              <FormLabel >Email</FormLabel>
              <FormInput type='email' name="Email" id='Email' placeholder="your Email" required  value={user.Email} onChange={handleInputs}/>
              <FormLabel >Designation</FormLabel>
              <FormInput type='text' name="Designation" id='Designation' placeholder="your Designation" required  value={user.Designation} onChange={handleInputs}/>
              <FormLabel >Department</FormLabel>
              <FormInput type='text' name="Department" id='Department' placeholder="your Department" required  value={user.Department} onChange={handleInputs}/>
              <FormButton type='submit' name="signup" id='signup' className="form-submit" value="register" onClick={PostData}>Update</FormButton>
              <Text>Go back if already updated</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container> 
    </>
  )
}

export default Update;
