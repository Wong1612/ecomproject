import React from 'react'
import Carousel from './carousel'
import { RatingIcon } from 'semantic-ui-react';
import{ connect } from 'react-redux'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-lg-9"> 
                    <div className = "homepage">
                        <div className="my-4">
                            <Carousel />
                        </div>
                    </div>
                    {
                        this.props.username !== "" ?
                        <h1 style = {{fontFamily: 'Montserrat', color: '#EA3315', fontWeight: '900'}}>WELCOME {this.props.username}!</h1>
                        : <h1 style = {{fontFamily: 'Montserrat', color: '#EA3315', fontWeight: '900'}}>WELCOME!</h1>
                    }
                </div> 
                {/* ====================================================================================== */}

                    <div className="col-lg-3 mt-4">
                    <div className = "homepage">
                        <div className="input-group mb-2">
                            <input type="text" ref="searchBook" className="form-control" placeholder="Masukkan kata kunci ... "  />
                            <div className="input-group-append">
                                <button className="btn btn-info" type="button" id="button-addon2" ><i className="fas fa-search" style = {{zIndex : '-1'}} /></button>
                            </div>
                        </div> 
                        <div className="card p-2">
                            
                            <form ref="formFilter" style={{boxShadow:"none", fontSize:"14px"}}>
                                <div className="form-label col-sm-6 text-left font-weight-bold pl-1 text-secondary  -1">Cari Produk</div>
                                <input className="form-control form-control-sm mb-2" placeholder="Cari Produk"></input>
                                
                                <div className="form-label col-sm-6 text-left font-weight-bold pl-1 text-secondary mb-1">Cari Toko</div>
                                <input className="form-control form-control-sm mb-2" placeholder="Cari Toko"></input>
                                
                                <div className="form-label col-sm-6 text-left font-weight-bold pl-1 text-secondary mb-1">Cari User</div>
                                <input className="form-control form-control-sm mb-2" placeholder="Cari User"></input> 

                                <button className="btn btn-info"><i class="fas fa-filter"></i> Filter</button>                               
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.userstate.id, 
        username: state.userstate.username// state.(index.js).(userGlobal.js [depending on which object the user is taking])
    }
}
export default connect(mapStateToProps)(Home)