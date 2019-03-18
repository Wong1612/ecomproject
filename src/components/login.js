import React from 'react'
import '../support/semantic-ui-css/semantic.min.css'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { onLogin } from './../1.actions'
import Loader  from 'react-loader-spinner';
import Cookies from 'universal-cookie';

const Cookie = new Cookies()

class LoginRegister extends React.Component {
    componentWillReceiveProps(newProps) {
        Cookie.set('userData', newProps.username, {path: '/'})
    }

    onBtnLoginClick = () => {
        var username = this.refs.username.value 
        var password = this.refs.password.value
        this.props.onLogin(username, password)
    }

    renderBtnOrLoadingLogin = () => {
        if (this.props.loading === true) {
            return <Loader  
                    type = "Circles"
                    color = " #EA3135"
                    height = "40"
                    weight = "100"/>
        } else {
            return <button className="ui button" style = {{fontFamily: 'Poppins', backgroundColor: '#EA3315', color: 'white', width: '100px', letterSpacing: '1.5px', marginTop: '10px'}} type="submit" onClick = {this.onBtnLoginClick}>LOGIN</button>
        }
    }
    renderErrorMessage() {
        if (this.props.error !== "") {
            return <div className = "alert alert-danger" role = "alert" style = {{marginTop: '10px', fontFamily: 'Montserrat', textAlign: 'center'}}>
                        {this.props.error}
                    </div> 
        }
    }

    render() {
        if(this.props.username !== "") {
            return <Redirect to = '/'/>
        }

        return (
            <div className = "container">
                <div className = "row justify-content-center">
                    <div className = "col-md-4">
                    <div className = "formInput">
                    <h1 style = {{fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '500', marginBottom: '20px', color: '#EA3315'}}>LOGIN</h1>
                    <form className="ui form">
                        <div className="field">
                            <label style = {{fontFamily: 'Montserrat', fontSize: '18px'}}>Username</label>
                            <input type="text" ref="username" placeholder="Username" style = {{fontFamily: 'Poppins', width: '350px', border: '2px solid #D1D3D4'}} />
                        </div>
                        <div className="field">
                            <label style = {{fontFamily: 'Montserrat', fontSize: '18px'}}>Password</label>
                            <input type="password" ref="password" placeholder="Password" style = {{fontFamily: 'Poppins', width: '350px', border: '2px solid #D1D3D4'}} onKeyPress={this.renderOnKeyPress} required />
                        </div>
                        {this.renderBtnOrLoadingLogin()}
                        {this.renderErrorMessage()}
                    </form>
                    <div style = {{fontFamily: 'Montserrat', fontWeight: '900', fontSize: '18px', color: '#EA3315', marginTop: '10px',}}>No account? <Link to = '/register'>Sign up for free today!</Link></div> 
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.userstate.username,
        loading: state.userstate.loading,
        error: state.userstate.error
    }
}

export default connect (mapStateToProps, {onLogin}) (LoginRegister)