import React, { Component } from "react";
import './App.css';

class App extends React.Component { 

//   constructor() {
//       super();
//       this.state = {
//         fields: {},
//         errors: {}
//       }
  
//   this.handleChange = this.handleChange.bind(this);
//   this.postJobForm = this.postJobForm.bind(this);
//     };
//     handleChange(e) {
//        let fields = this.state.fields;
//        fields[e.target.name] = e.target.value;
//        this.setState ({
//          fields
//        });
//     }
// postJobForm(e){
//   e.preventDefault();
//   if (this.validateForm()) {
//     let fields ={};
//     fields["jobTitle"] = "";
//     fields["location"] = "";
//     fields["yearsOfExperience"] = "";
//     fields["jobDescription"] = "";
//     fields["category"] = "";
//     fields["functionalArea"] = "";
//     fields["graduatingYrea"] = "";
//     fields["tag"] = "";
//     this.setState({fields:fields});
//     alert("Form submitted");
//      }
// }
// validateForm(){
//   let fields = this.state.fields;
//       let errors = {};
//       let formIsValid = true;

//       if (!fields["jobTitle"]) {
//         formIsValid = false;
//         errors["jobTitle"] = "*Please enter your jobTitle.";
//       }

//       if (typeof fields["jobTitle"] !== "undefined") {
//         if (!fields["jobTitle"].match(/^[a-zA-Z ]*$/)) {
//           formIsValid = false;
//           errors["jobTitle"] = "*Please enter alphabet characters only.";
//         }
//       }

//       if (!fields["emailid"]) { formIsValid = false;
//         errors["emailid"] = "*Please enter your email-ID.";
//       }

//       if (typeof fields["emailid"] !== "undefined") {
//         //regular expression for email validation
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if (!pattern.test(fields["emailid"])) {
//           formIsValid = false;
//           errors["emailid"] = "*Please enter valid email-ID.";
//         }
//       }

//       if (!fields["mobileno"]) {
//         formIsValid = false;
//         errors["mobileno"] = "*Please enter your mobile no.";
//       }

//       if (typeof fields["mobileno"] !== "undefined") {
//         if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
//           formIsValid = false;
//           errors["mobileno"] = "*Please enter valid mobile no.";
//         }
//       }
//       if (!fields["password"]) {
//         formIsValid = false;
//         errors["password"] = "*Please enter your password.";
//       }

//       if (typeof fields["password"] !== "undefined") {
//         if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//           formIsValid = false;
//           errors["password"] = "*Please enter secure and strong password.";
//         }
//       }

//       this.setState({
//         errors: errors
//       });
//       return formIsValid;


//     }
// }
  render()  {
    return (
    <div className="Wrapper">
      <div className="form-Wrapper">
        <h2>Post Job</h2>
        <h1 style={{ color: "#239276" }}> Basic Details </h1>
        <form onSubmit={this.handlesubmit} noValidate>
          <div className="jobTitle">
            <label htmlfor="jobTitle">Job Title*</label><br></br>
            <input type="text"
              className=""
              placeholder="Write a title that appropriately descibes this job"
              name="jobTitle"
              noValidate
              onChange={this.handleChange}></input>
          </div>

          <div className="location">
            <label htmlfor="select">Location*
            <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                <option value="pune">Pune</option>
                <option value="banglore">Banglore</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="hyderabad">Hyderabad</option>
            </select>
            </label><br></br>
            <input type="text"
              classname=""
              placeholder="+Add Location"
              name="location"
              noValidate
              onChange={this.handleChange}></input>
          </div>

          <div className="yearsOfExperience">
            <label htmlfor="yearsOfExperience">Years Of Experience*</label><br></br>
            <input type="text"
              classname=""
              placeholder=""
              name="yearsOfExperience"
              noValidate
              onChange={this.handleChange}></input>
          </div>
          
          <div className="jobDescription">
            <label htmlfor="jobDescrition">Job Description*</label><br></br>
            <input type="text"
              classname=""
              placeholder="Describe the role amd responsibility,skills required for the job and help the candidates understand the role better"
              name="jobDescrition"
              noValidate
              onChange={this.handleChange}></input>
          </div>
        </form>
        <h1 style={{ color: "#239276"}}> Targeting </h1>
        <form>
          <div className="category">
            <label htmlFor="category">Category*</label><br></br>
            <input type="text" className="" placeholder="select" name="category" noValidate onChange={this.handleChange} />
          </div>
          
          <div className="functionalArea">
            <label htmlFor="functionalArea">Functional Area*</label><br></br>
            <input type="text" className="" placeholder="select" name="functionalArea" noValidate onChange={this.handleChange} />
          </div>
          
          <div className="graduatingYear">
            <label htmlFor="graduatingYear">Graduating Year</label><br></br>
            <input type="text" className="" placeholder="select" name="graduatingYear" noValidate onChange={this.handleChange} />
          </div>
          
          <div className="tag">
            <label htmlFor="tag">Tag</label><br></br>
            <input type="text" className="" placeholder="select" name="tag" noValidate onChange={this.handleChange} />
          </div>

        <div className="postJob">
        <button type="submit">Post Job</button>
        </div>
        
        <div className="postJobandAddANotherJob">
          <button type="submit">Post Job and Add Another Job</button>
          </div>
         
        </form>    
      </div>
    </div>
      
    );
  }
}

export default App;
