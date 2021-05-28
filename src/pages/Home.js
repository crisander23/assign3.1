import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
             
             <div class="main">

        <div class="container">
            <div class="signup-content">
                <div class="signup-img">
                    <img src="images/form-img.jpg" alt=""/>
                    <div class="signup-img-content">
                        <h2>Register now </h2>
                    </div>
                </div>
                <div class="signup-form">
                    <form action="complete.html" method="GET" class="register-form" id="register-form">
                        <div class="form-row">
                            <div class="form-group">
                                <div class="form-input">
                                    <label for="first_name" class="required">First name</label>
                                    <input type="text" name="first_name" id="first_name" />
                                </div>
                                <div class="form-input">
                                    <label for="last_name" class="required">Last name</label>
                                    <input type="text" name="last_name" id="last_name" />
                                </div>
                                <div class="form-input">
                                    <label for="company" class="required">Address</label>
                                    <input type="text" name="company" id="company" />
                                </div>
                                <div class="form-input">
                                    <label for="email" class="required">Email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                                <div class="form-input">
                                    <label for="phone_number" class="required">Phone number</label>
                                    <input type="number" name="phone_number" id="phone_number" />
                                </div>
                                <div class="form-input">
                                    <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"/>
                                </div>
                            </div>

                            
                            <div class="form-group">
                                <div class="form-select">
                                    <div class="label-flex">
                                        <label for="meal_preference">Gender</label>
                                        
                                    </div>
                                    <div class="select-list">
                                        <select name="meal_preference" id="meal_preference">
                                            <option value="Gender">Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-input">
                                    <label for="blank_name">Username</label>
                                    <input type="text" name="blank_name" id="blank_name" />
                                </div>
                                <div class="form-input">
                                    <label for="pwd">Password:</label>
                                    <input type="password" id="pwd" name="pwd"/>
                                </div>
                                <div class="form-submit">
                     
                                    
                                    <input type="submit" value="Submit" class="submit" id="submit" name="submit" />
                                    <input type="reset" value="Reset" class="submit" id="reset" name="reset" />
                                   
                                </div>
                               
                            </div>
                        </div>
                        
                      
                    </form>
                </div>
            </div>
        </div>

    </div>

    
            </div>
        )
    }
}
export default Home