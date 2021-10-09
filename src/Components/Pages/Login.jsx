import react, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        
        username: "",
        password: "",
      });
      
      const {username, password} = user;
      
      const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
      }; 
      const onSubmit = async (e) => {
        e.preventDefault();
        if (username == 'kushwah' && password == '123') {
            history.push('/')
        }
        else {
            alert("username or password wrong"); 
        }
      };
return (
    <div ClassName="error-pagewrap">
		<div ClassName="error-page-int">
			<div ClassName="text-center m-b-md custom-login">
				<h3>PLEASE LOGIN TO APP</h3>
				<p>This is the best app ever!</p>
			</div>
			<div ClassName="content-error">
				<div ClassName="hpanel">
                    <div ClassName="panel-body">
                        <form onSubmit={onSubmit} action="#" id="loginForm">
                            <div ClassName="form-group">
                                <label ClassName="control-label" 
                                for="username">Username</label>
                                <input type="text" placeholder="example@gmail.com"
                                  value={username} name="username" id="username" 
                                  ClassName="form-control" onChange={onInputChange}/>
                                <span ClassName="help-block small">
                                    Your unique username to app</span>
                            </div>
                            <div ClassName="form-group">
                                <label ClassName="control-label" for="password">
                                    Password</label>
                                <input type="password" title="Please enter your password"
                                 placeholder="******" required="" value={password} name="password"
                                  id="password" ClassName="form-control" 
                                  onChange={onInputChange}/>
                                <span ClassName="help-block small">Yur strong password</span>
                            </div>
                            <div ClassName="checkbox login-checkbox">
                                <label>
										<input type="checkbox" ClassName="i-checks"/> Remember me </label>
                                <p ClassName="help-block small">(if this is a private computer)</p>
                            </div>
                            <button ClassName="btn btn-success btn-block loginbtn">Login</button>
                            <Link ClassName="btn btn-default btn-block" to="Registration">Register</Link>
                        </form>
                    </div>
                </div>
			</div>
			<div class="text-center login-footer">
				<p>Copyright © 2018. All rights reserved. Template by <a href="https://colorlib.com/wp/templates/">Colorlib</a></p>
			</div>
		</div>   
    </div>
       )
  
};
export default Login;