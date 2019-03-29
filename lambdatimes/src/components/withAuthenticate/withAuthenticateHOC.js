import React from 'react'

import Login from '../Login'
import Content from '../Content/Content'

const withAuthenticateHOC = (Login)=>(Content)=>
(
	class extends React.Component{
		constructor(){
			super()
			this.state = {
				loggedInUser: null,
				isLoggedIn:false,
				logginError:{}
			}
		}
		
		onLogin = (e, userObj)=>{
			this.setState({isLoggedIn: true})
			this.setState({loggedInUser: {...userObj}})
		}
		
		onClear = (e)=>{
			this.setState({'username': ''})
			this.setState({'password': ''})
		}
		
		render(){
			if(!this.state.isLoggedIn){
				return(
					<Login  onLogin={this.onLogin}
						    loginError={this.state.loginError} />)
			}
			return <Content/>
		}
	}
)

export default withAuthenticateHOC
