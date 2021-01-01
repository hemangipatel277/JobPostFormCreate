import React, { Component } from "react";
import axios from 'axios';
import ReactTagInput from "@pathofdev/react-tag-input";
import ReactDOM from 'react-dom';

import "@pathofdev/react-tag-input/build/index.css";

import './App.css';

class Test extends React.Component {

  

        constructor(props){
           super(props);
      
           this.state = {
               fields: {
                    "jobtitle": "",
                    "minexp": "",
                    "maxexp": "",
                    "jobdescription": "",
                    "jobcategory": "",
                    "jobarea": "",
                    "graduateminyear": "",
                    "graduatemaxyear": "",
                    "locations": "locations"
               },
               errors: {},
               tags: [],
               locations: []
            //   suggestions: []
           }
          // this.reactTags = React.createRef() 

        }
    
removeTag = (i) => {
    const newTags = [ ...this.state.tags ];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  }

  inputKeyDown = (e) => {

    if (e.key === 'Enter') {
      e.preventDefault();
    }

    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      e.preventDefault();
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val]});
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  }   

  locationremoveTag = (i) => {
    const newTags = [ ...this.state.locations ];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  }

  locationinputKeyDown = (e) => {

    if (e.key === 'Enter') {
      e.preventDefault();
    }

    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      e.preventDefault();
      if (this.state.locations.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ locations: [...this.state.locations, val]});
      this.locationtagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.locationremoveTag(this.state.locations.length - 1);
    }
  }   

        handleValidation(){
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;

            if(!fields["jobtitle"]){
               formIsValid = false;
               errors["jobtitle"] = "Please enter Job Title";
            }

            if(this.state.locations.length == 0){
               formIsValid = false;
               errors["locations"] = "Please add locations";
            }


            if(!fields["minexp"]){
               formIsValid = false;
               errors["minexp"] = "Please select min. Experience";
            }
            if(!fields["maxexp"]){
               formIsValid = false;
               errors["maxexp"] = "Please select max. Experience";
            }

            if(!fields["jobdescription"]){
               formIsValid = false;
               errors["jobdescription"] = "Please add Job Description";
            }

            if(!fields["jobcategory"]){
               formIsValid = false;
               errors["jobcategory"] = "Please choose Job Category";
            }

            if(!fields["jobarea"]){
               formIsValid = false;
               errors["jobarea"] = "Please choose Functional Area";
            }

            if(!fields["graduateminyear"]){
               formIsValid = false;
               errors["graduateminyear"] = "Please Select";
            }

            if(!fields["graduatemaxyear"]){
               formIsValid = false;
               errors["graduatemaxyear"] = "Please Select";
            }

            
           this.setState({errors: errors});
           return formIsValid;
       }
        
       contactSubmit(e){
            e.preventDefault();

            if(this.handleValidation()){
              alert("Form submitted");

              var form_data = this.state.fields;
              form_data['tags'] = this.state.tags;
              form_data['locations'] = this.state.locations;

              // console.log(this.state.fields);
              // console.log(this.state.tags);

              console.log(form_data);

              e.target.reset();
              this.setState({ tags: [] });
              this.setState({ locations: [] });

              axios({
                  method: 'post',
                  url: 'http://localhost:3000/jobpost',
                  data: form_data,
                  headers: {'Content-Type': 'multipart/form-data' }
              })
              .then(function (response) {
                  //handle success
                  console.log(response);
              })
              .catch(function (response) {
                  //handle error
                  console.log(response);
              });


            }else{
               alert("Form has errors.")
            }
      
        }
    
        handleChange(field, e){         
            //alert("yess");
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
        }

        render(){
          const { tags } = this.state;
          const { locations } = this.state;
            return (
                

                <div>   
                  <h2>Post Job</h2>   
                  <h1 style={{ color: "#239276" }}> Basic Details </h1>     
                   <form name="postJob" id="postJob" className="postJob" onSubmit= {this.contactSubmit.bind(this)}>
                        <div className="jobTitle">
                          <label>Job Title*</label><br></br>
                          <input type="text"
                            refs="jobtitle"
                            placeholder="Write a title that appropriately described this job"
                            name="jobTitle"
                            onChange={this.handleChange.bind(this, "jobtitle")}
                            />
                            <span style={{color: "red"}}>{this.state.errors["jobtitle"]}</span>
                        </div>

                        <div className="location">
                          <label>Location*
                          </label><br></br>

                           <ul className="input-tag__tags">
                              { locations.map((tag, i) => (
                                <li key={tag}>
                                  {tag}
                                  <button type="button" onClick={() => { this.locationremoveTag(i); }}>+</button>
                                </li>
                              ))}
                              <li className="input-tag__tags__input">
                              <input type="text" refs="locations" onKeyDown={this.locationinputKeyDown} ref={c => { this.locationtagInput = c; }} /></li>
                            </ul>

                            <span style={{color: "red"}}>{this.state.errors["locations"]}</span>
                        </div>

                        <div className="yearsOfExperience">
                          <label>Years Of Experience*</label><br></br>
                          <select refs="minexp" name="minexp" onChange={this.handleChange.bind(this, "minexp")}>
                            <option value="Select Min">Select Min</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <span style={{color: "red"}}>{this.state.errors["minexp"]}</span>
                          <select refs="maxexp" name="maxexp" onChange={this.handleChange.bind(this, "maxexp")}>
                            <option value="Select Max">Select Max</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select> 
                          <span style={{color: "red"}}>{this.state.errors["maxexp"]}</span>
                        </div>

                        <div className="jobDescription">
                          <label htmlFor="jobDescrition">Job Description*</label><br></br>
                            <textarea refs="jobdescription" id="jobDescription" name="jobdescription" name="maxexp" onChange={this.handleChange.bind(this, "jobdescription")}
                            placeholder=" Describe the role and responsibility,skills required for the job amd help the candidates understandthe role betters"></textarea>
                          
                          <span style={{color: "red"}}>{this.state.errors["jobdescription"]}</span>
                        </div>

                        <h1 style={{ color: "#239276"}}> Targeting </h1>

                        <div className="category-box">
                          <label>Category*</label> <br></br>
                          <select refs="jobcategory" name="jobcategory" onChange={this.handleChange.bind(this, "jobcategory")}>
                            <option value="Select">Select</option>
                            <option value="it_software">IT-Software</option>
                            <option value="recruitment">Recruitment</option>
                            <option value="staffing">Staffing</option>
                            <option value="bpo">BPO</option>
                            <option value="internet">Internet</option>
                          </select>
                          <span style={{color: "red"}}>{this.state.errors["jobcategory"]}</span>
                        </div>

                        <div className="functionalarea">
                          <label>Functional Area*</label> <br></br>
                            <select refs="jobarea" name="jobarea" onChange={this.handleChange.bind(this, "jobarea")}>
                              <option value="Select">Select </option>
                              <option value="programming">Programming</option>
                              <option value="sales">Sales</option>
                              <option value="marketing">Marketing</option>
                              <option value="customer_support">Customer Support</option>
                            </select>
                          <span style={{color: "red"}}>{this.state.errors["jobarea"]}</span>
                     
                        </div>

                        <div className="graduatingYear">
                          <label >Graduating Year</label><br></br>
                          <select refs="graduateminyear" name="graduateminyear" onChange={this.handleChange.bind(this, "graduateminyear")}>
                            <option value="">Min Batch </option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                          </select>
                          <span style={{color: "red"}}>{this.state.errors["graduateminyear"]}</span>
                          <select refs="graduatemaxyear" name="graduatemaxyear" onChange={this.handleChange.bind(this, "graduatemaxyear")}>
                            <option value="Select">Max Batch </option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                          </select>
                          <span style={{color: "red"}}>{this.state.errors["graduatemaxyear"]}</span>
                        </div>
                            
                        <div className="jobTags">
                          <label htmlFor="jobTags">Job Tags </label><br></br>
                           
                            
                          
                           <ul className="input-tag__tags">
                              { tags.map((tag, i) => (
                                <li key={tag}>
                                  {tag}
                                  <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                                </li>
                              ))}
                              <li className="input-tag__tags__input">
                              <input type="text" refs="tags" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
                            </ul>

                        </div>
                        <button type="submit">Post Job</button>

                  </form>
                </div>
          )
        }
    }





function App() {
  const [tags, setTags] = React.useState([])
  return (
    <ReactTagInput 
      tags={tags}
      placeholder="Enter Comma Separated Tags Here"
      removeOnBackspace={true}
      onChange={(newTags) => setTags(newTags)}
      //onChange=handleChange.bind(this, "jobtags")
    />
  )
}

function Location() {
  const [tags, setTags] = React.useState([])
  return (
    <ReactTagInput 
      tags={tags}
      placeholder="Enter Comma Separated Tags Here"
      removeOnBackspace={true}
      onChange={(newTags) => setTags(newTags)}
      //onChange=handleChange.bind(this, "jobtags")
    />
  )
}


export default Test;
