import React from 'react'
import Axios from 'axios';
import { urlApi } from '../support/urlApi'
import { connect } from 'react-redux'

class ProductDetail extends React.Component {
    state = {products : {}}


    componentDidMount() {
        this.getDataApi()
    }

    getDataApi = () => {
        var idUrl = this.props.match.params.id
        console.log(this.props.match)
        Axios.get(urlApi + '/products/' + idUrl)
        .then((res) => {
            this.setState({products : res.data}) // res

        })
        .catch((err) => {
            console.log(err)
        })
    }

    productQuantity = () => {
        var num = this.refs.inputQty.value
        if (num < 1) {
            this.refs.inputQty.value = 1
        }
    }

    render() {
        var {nama, img, discount, desc, harga} = this.state.products
            return (
                <div className = "container" style = {{fontFamily: 'Poppins'}}>
                    <div className = "row">
                        <div className = 'col-md-4' style = {{marginTop: '70px'}}>
                        <div className="card" style={{width: '100%', borderRadius: '20px'}}>
                            <img className="card-img-top" src={img} alt="Card image cap" style = {{borderRadius: '20px'}} />
                        </div>
                        </div>
                        {/* ======================================================================= */}
                        <div className = 'col-md-8' style = {{marginTop: '70px'}}>
                            <h1 style = {{color: 'black'}}>{nama}</h1>
                            {
                                discount > 0 ?
                                <div style = {{backgroundColor: 'darkred', width: '80px', height: '22px', color: 'white', textAlign: 'center', display: 'inline-block'}}>{discount}% OFF</div>
                                : null
                            }
                            {
                                discount > 0 ?
                                <span style = {{fontWeight: '600', fontSize: '12px', color: '#606060', marginLeft: '10px', textDecoration: 'line-through'}}>Rp. {harga}</span>
                                : null
                            }
    
                            <div style = {{fontWeight: '700', fontSize: '24px', color: 'darkred'}}>Rp. {harga - (harga * (discount/100))}</div>
                            {/* ======================================================================= */}
                            <div className = 'row' >
                                <div className = 'col-md-2'>
                                    <div style = {{marginTop: '15px', color: 'black'}}>Amount</div>
                                    <input type = 'number' onChange={this.productQuantity} ref='inputQty' width = '20px' className = 'form-control' style = {{width: '60px', marginTop: '10px'}}/>
                                </div>
                            {/* ======================================================================= */}
                                <div className = 'col-md-6'>
                                    <div style = {{marginTop: '15px', color: 'black', fontSize: '14px'}}>Notes to Seller (Optional)</div>
                                    <input type = "text" style = {{marginTop: '10px'}} placeholder = "Example: Please wrap package in bubble wrap. " className = "form-control"></input>
                                </div>
                            </div>
                            {/* ======================================================================= */}
                            <div className = "row">
                                <div className = "col-md-8 mt-4">
                                <p style = {{color: 'black', fontStyle: 'Italic'}}>{desc}</p>
                                </div>
                            </div>
                            {/* ======================================================================= */}
                            <div className = "row mt-4">
                                <input className = "btn border-secondary col-md-2" value = "Add To Wishlist" style = {{marginLeft: '15px'}}></input>
                                {
                                    this.props.username !== "" ? 
                                    <input className = "btn col-md-3" style = {{marginLeft: '15px', backgroundColor: '#EA3315', color: 'white'}} value = "Buy"></input>
                                    : <input className = "btn col-md-3 disabled" style = {{marginLeft: '15px', backgroundColor: '#EA3315', color: 'white'}} value = "Buy"></input>
                                }
                                {
                                    this.props.username !== "" ? 
                                    <input className = "btn col-md-3" style = {{marginLeft: '15px', backgroundColor: '#EA3315', color: 'white'}} value = "Add To Cart"></input>
                                    : <input className = "btn col-md-3 disabled" style = {{marginLeft: '15px', backgroundColor: '#EA3315', color: 'white'}} value = "Add To Cart"></input>
                                }
                                
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
    }   
}

export default connect(mapStateToProps) (ProductDetail)