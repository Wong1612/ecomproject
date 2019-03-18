import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { userRegister } from './../1.actions'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

class Register extends React.Component {
    state = {error: ''}

    componentWillReceiveProps(newProps) {
        if (newProps.error !== "") {
            this.setState({error : newProps.error})
        }
    }
    renderLoaderOrBtn = () => {
        if (this.props.loading === true) {
            return <Loader
                type = "Bars"
                color = "#00BFFF"
                height = "40"
                weight = "100"/>
        } else {
            return <button className="ui button" style = {{fontFamily: 'Poppins', backgroundColor: '#EA3315', color: 'white', width: '150px', letterSpacing: '1.5px', marginTop: '10px'}} type="submit" onClick = {this.onBtnRegisterClick}>REGISTER</button>
        }
    }

    onBtnRegisterClick = () => {
        var username = this.refs.username.value
        var password = this.refs.password.value
        var email = this.refs.email.value
        var phone = this.refs.phone.value
        if (username === "" || password === "" || email === "" || phone === "" ) {
            this.setState({error : 'All forms must be filled!'})
        } else {
            this.props.userRegister(username, password, email, phone)
            return <Redirect to = '/'/>
        }
    }

    renderErrorMessage = () => {
        if (this.state.error !== "") {
            return <div className = "alert alert-danger" role = "alert" style = {{marginTop: '10px', fontFamily: 'Montserrat'}}>
                        {this.state.error}
                    </div> 
        }
    }

    render() {
        if (this.props.user !== "") {
            return <Redirect to = '/'/>
        }
        return (
            <div className = "container">
            <div className = "row justify-content-center">
                <div className = "col-lg-5">
                        <div className = "formInput">
                        <h1 style = {{fontFamily: 'Montserrat', fontSize: '48px', fontWeight: '500', marginBottom: '20px', color: '#EA3315'}}>REGISTER TODAY!</h1>
                        <form className="ui form">
                            <div className="field">
                                <label style = {{fontFamily: 'Montserrat', fontSize: '18px'}}>Username</label>
                                <input type="text" ref = "username" placeholder="Username" style = {{fontFamily: 'Poppins', width: '400px', border: '2px solid #D1D3D4'}} />
                            </div>
                            <div className="field">
                                <label style = {{fontFamily: 'Montserrat', fontSize: '18px'}}>Password</label>
                                <input type="text" ref="password" placeholder="Password" style = {{fontFamily: 'Poppins', width: '400px', border: '2px solid #D1D3D4'}} />
                            </div>
                            <div className="field">
                                <label style = {{fontFamily: 'Montserrat', fontSize: '18px'}}>Email</label>
                                <input type="text" ref="email" placeholder="Email" style = {{fontFamily: 'Poppins', width: '400px', border: '2px solid #D1D3D4'}} />
                            </div>
                            <div className="field">
                                <label style = {{fontFamily: 'Montserrat', fontSize: '18px'}}>Phone Number</label>
                                <input type="text" ref="phone" placeholder="Phone Number" style = {{fontFamily: 'Poppins', width: '400px', border: '2px solid #D1D3D4'}} />
                            </div>
                            {this.renderErrorMessage()}
                            {this.renderLoaderOrBtn()}
                            
                            <div style = {{fontFamily: 'Montserrat', fontWeight: '900', fontSize: '18px', color: '#EA3315', marginTop: '10px',}}>Already have account? <Link to = '/login'>Login here!</Link></div> 
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userstate.username,
        loading: state.userstate.loading,
        error: state.userstate.error
    }
}
export default connect (mapStateToProps, {userRegister}) (Register)