import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from '../Update/UpdateElements';

const Update = () => {
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
              <FormLabel htmlFor='for'>Aadhar Card No.</FormLabel>
              <FormInput type='number' required />
              <FormLabel htmlFor='for'>DOB</FormLabel>
              <FormInput type='date' required />
              <FormLabel htmlFor='for'>Emergency Contact</FormLabel>
              <FormInput type='number' required />
              <FormLabel htmlFor='for'>Address</FormLabel>
              <FormInput type='text' required />
              <FormLabel htmlFor='for'>Designation</FormLabel>
              <FormInput type='text' required />
              <FormButton type='submit'>Update</FormButton>
              <Text>Go back if already updated</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container> 
    </>
  )
}

export default Update;
