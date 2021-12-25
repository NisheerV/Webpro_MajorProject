import React,{useState} from 'react';

function App(){
  const [values, setvalues]= useState({
    Name:"",
    Contact:"",
    Email:"",
    Designation:"",
    Department:""
  });

  const [submitted,setSubmitted]=useState(false);
  const [valid,setValid]=useState(false);


  const handleNameInputChange = (event)=>{
    setvalues({...values,Name:event.target.values})
  }

  const handleContactInputChange = (event)=>{
    setvalues({...values,Contact:event.target.values})
  }

  const handleEmailInputChange = (event)=>{
    setvalues({...values,Email:event.target.values})
  }

  const handleDepartmentInputChange = (event)=>{
    setvalues({...values,Department:event.target.values})
  }

  const handleDesignationInputChange = (event)=>{
    setvalues({...values,Designation:event.target.values})
  }


const handleSubmit=(event)=>{
  event.preventDefault();
  if (values.Name && values.Contact && values.Email && values.Designation && values.Department){
    setValid(true);
  }
  setSubmitted(true);
}

  return (
    <div className="form-container" style={{
      background:'#256ce1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
    }}   >
      <form classNane="register-form" onSubmit={handleSubmit} >
        {submitted ?<div className='success-message'>success! thankyou for registration</div> :null}
        <div>
          <label>Name : </label>
          <input 
          onChange={handleNameInputChange}
          value={values.Name}
          className='form-field'
          placeholder='Name'
          name='firstname' />
          {submitted && !values.Name ?<span>please enter your  name</span>: null}
        </div>
        <br></br>
        <div>
          <label>Contact : </label>
          <input 
          onChange={handleContactInputChange}
          value={values.Contact}
          className='form-field'
          placeholder='Contact'
          name='Contact' />
          {submitted && !values.Contact ?<span>please enter your Contact number</span>: null}
        </div>
          <br></br>
        <div style={{
          
    }}>
          <label>Email : </label>
          <input 
          onChange={handleEmailInputChange}
          value={values.Email}
          className='form-field'
          placeholder='Email'
          name='Email' />
          {submitted && !values.Email ?<span>please enter your Email</span>: null}
        </div>
        <br></br>
        <div >
          <label>Designation : </label>
          <input 
          onChange={handleDesignationInputChange}
          value={values.Designation}
          className='form-field'
          placeholder='Designation'
          name='Designation' />
          {submitted && !values.Designation ?<span>please enter your Designation</span>: null}
        </div>
        <br></br>
        <div >
          <label>Department : </label>
          <input 
          onChange={handleDepartmentInputChange}
          value={values.Department}
          className='form-field'
          placeholder='Department'
          name='Department' />
          {submitted && !values.Department ?<span>please enter your Department</span>: null}
        </div>
        <br></br>
        <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
          <button className='form-field'type='submit'>register</button>
        </div>
      </form>
    </div>
      
  )
}
export default App; 