import React, { useState, useEffect } from "react";
import FooterMain from "../../components/footer/footer";
import NavbarMain from "../../components/navbar/navbar";
import "./Attendance.css";
import {QRCodeSVG} from 'qrcode.react';
<div id="con">
function AttendancePage(props) {
  const [qrvalue,setQrvalue]=useState("")
  const [values, setValues] = useState({
    Name: "",
    ContactNo: "",
    Email: "",
    Department: "",
    Year: "",
    Event_name: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const Namechange = (event) => {
    setValues({ ...values, Name: event.target.value });
  };
  const Contactchange = (event) => {
    setValues({ ...values, ContactNo: event.target.value });
  };
  const Emailchange = (event) => {
    setValues({ ...values, Email: event.target.value });
  };
  const Departmentchange = (event) => {
    setValues({ ...values, Department: event.target.value });
  };
  const Yearchange = (event) => {
    setValues({ ...values, Year: event.target.value });
  };
  const EVENTchange = (event) => {
    setValues({ ...values, Event_name: event.target.value });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    if (
      values.Name &&
      values.ContactNo &&
      values.Email &&
      values.Department &&
      values.Year &&
      values.Event_name
    ) {
      setQrvalue(JSON.stringify(values,4,null))
      setValid(true);
    }
    setSubmitted(true);
  };
  

  return (
    <div className="form-container">
      {/* <NavbarMain/> */}
      <form classname="attendance-form" onSubmit={handelSubmit}>
      
        <input
          onChange={Namechange}
          value={values.Name}
          className="form-field"
          placeholder="Name"
          name="Name"
        />
        {submitted && !values.Name ? (
          <span>Please fill the details</span>
        ) : null}
        <input
          onChange={Contactchange}
          value={values.ContactNo}
          className="form-field"
          placeholder="ContactNo"
          name="ContactNo"
        />
        {submitted && !values.ContactNo ? (
          <span>Please fill the details</span>
        ) : null}
        <input
          onChange={Emailchange}
          value={values.Email}
          className="form-field"
          type='email'
          placeholder="Email"
          name="Email"
        />
        {submitted && !values.Email ? (
          <span>Please fill the details</span>
        ) : null}
        <input
          onChange={Departmentchange}
          value={values.Department}
          className="form-field"
          placeholder="Department"
          name="Department"
        />
        {submitted && !values.Department ? (
          <span>Please fill the details</span>
        ) : null}
        <input
          onChange={Yearchange}
          value={values.Year}
          className="form-field"
          placeholder="Year"
          name="Year"
        />
        {submitted && !values.Year ? (
          <span>Please fill the details</span>
        ) : null}
        <input
          onChange={EVENTchange}
          value={values.Event_name}
          className="form-field"
          placeholder="Event_name"
          name="Event_name"
        />
        {submitted && !values.Event_name ? (
          <span>Please fill the details</span>
        ) : null}

        <button className="form-field" type="submit">
          Genrate QR code
        </button>
        {submitted ? <div className="response">Response Received!!</div> : null}
      </form>
      {submitted ?<QRCodeSVG value={qrvalue} /> : null}
        
      {/* <FooterMain/> */}
    </div>
    
  );
}


export default AttendancePage;
</div>