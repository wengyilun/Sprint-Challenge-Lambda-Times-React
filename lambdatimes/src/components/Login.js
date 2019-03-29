import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 3em;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const LoginContainer = styled.form`
   display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 500px;
    background-color: #FAFAFA;
    border-color: #999999;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3), 0 25px 50px 0 rgba(0, 0, 0, 0.30);
`;

const ButtonBar = styled.div`
    text-align:center;
	margin: 20px;
	padding: 10px;
	width: 100%;
`;

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:'',
			loginError:''
		}
	}
	
	componentDidMount() {
		const username = JSON.parse(localStorage.getItem('username'))
		const password = JSON.parse(localStorage.getItem('password'))
		if(username){
			this.setState({'username': username})
		}
		if(password){
			this.setState({'password': password})
		}
	}
	
	onHandleInputChange = (e)=>{
		this.setState({[e.target.name]: e.target.value})
		localStorage.setItem([e.target.name],  JSON.stringify(e.target.value))
	}
	
	onLogin = (e)=>{
		e.preventDefault();
		let username = this.state.username.trim()
		let password = this.state.password.trim()
		
		localStorage.setItem('username',  JSON.stringify(username))
		localStorage.setItem('password',  JSON.stringify(password))
		this.props.onLogin(e, {username: username, password: password})
	}
	
	
	render(){
		return(
			<LoginContainer onSubmit={e=> this.onLogin(e)}>
				<h1>Please Login</h1>
				<input
					type="text"
					className="usernameInput"
					placeholder="Username"
					name="username"
					value={this.state.username}
					onChange={e=> this.onHandleInputChange(e)}/>
				<input
					type="text"
					className="passwordInput"
					name="password"
					placeholder="Password"
					value={this.state.password}
					onChange={e=> this.onHandleInputChange(e)}/>
				<ButtonBar>
					<Button type="submit" primary>Login</Button>
					<Button onClick={this.onClear}>Reset</Button>
				</ButtonBar>
				<p>{this.props.loginError && this.props.loginError.messsage}</p>
			</LoginContainer>
		)
	}
}
export default Login
