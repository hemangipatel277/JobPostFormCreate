// import { getElementError } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';

class App extends Component { 

  render() {
    return (<div className="Wrapper">
      <div className="form-Wrapper">
        <h2>Post Job</h2>
        <h1 style={{ color: "#239276" }}> Basic Details </h1>
        <form onSubmit={this.handlesubmit} noValidate>
          <div className="jobTitle">
            <label htmlfor="jobTitle">Job Title</label><br></br>
            <input type="text"
              className=""
              placeholder="Write a title that appropriately descibes this job"
              name="jobTitle"
              noValidate
              onChange={this.handleChange}></input>
          </div>

          <div className="location">
            <label htmlfor="location">Location</label><br></br>
            <input type="text"
              classname=""
              placeholder="Add Location"
              name="location"
              noValidate
              onChange={this.handleChange}></input>
          </div>

          <div className="yearsOfExperience">
            <label htmlfor="yearsOfExperience">Years Of Experience</label><br></br>
            <input type="text"
              classname=""
              placeholder=""
              name="yearsOfExperience"
              noValidate
              onChange={this.handleChange}></input>
          </div>
          
          <div className="jobDescription">
            <label htmlfor="jobDescrition">Job Description</label><br></br>
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
            <label htmlFor="category">Category</label><br></br>
            <input type="text" className="" placeholder="select" name="category" noValidate onChange={this.handleChange} />
          </div>
          
          <div className="functionalArea">
            <label htmlFor="functionalArea">Functional Area</label><br></br>
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
        </form>
        <button>Post Job</button>
        <button>Post Job and Add Another Job</button>
        
      </div>
    </div>
    );
  }
}

export default App;
