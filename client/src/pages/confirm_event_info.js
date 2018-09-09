// JavaScript source code
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { PowerSelect } from 'react-power-select';
import { Redirect, withRouter } from 'react-router-dom';
import axios from "axios";
//import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';

//import 'react-power-select/dist/react-power-select.css';

class ConfirmEventInfo extends Component {
    state = {
        eventid: "",
        email: null,
        cust_id: null,
        event_name: "",
        event_date: "",
        event_start: "",
        event_pax: 0,
        selected_drink: "",
        drink1_id: "",
        drink1_name: "",
        drink1_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink2_id: "",
        drink2_name: "",
        drink2_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink3_id: "",
        drink3_name: "",
        drink3_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink4_id: "",
        drink4_name: "",
        drink4_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink5_id: "",
        drink5_name: "",
        drink5_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink6_id: "",
        drink6_name: "",
        drink6_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        addon1: "",
        addon1_quant: 0,
        addon2: "",
        addon2_quant: 0,
        addon3: "",
        addon3_quant: 0,
        addon4: "",
        addon4_quant: 0,
        addon5: "",
        addon5_quant: 0,
        addon6: "",
        addon6_quant: 0,
        notes: "",
        address1: "",
        address2: "",
        city: "",
        evstate: "",
        zip: "",
        drink_chooser: [],
        message: "",
        isHidden: true,
        search_type: "",
        search_value: "",
    };



    componentDidMount() {
        console.log(this.props.match.params);
        if (this.props.match.params.eventnum) {
            this.setState({ eventid: this.props.match.params.eventnum });
        }
        let searchTerm = this.props.match.params.eventnum;
        console.log(searchTerm);
        axios.get("/api/get_event/" + searchTerm)
            .then(resp => {
                console.log(resp);
                this.setState({
                    event_name: resp.data.ev_name,
                    event_date: resp.data.ev_date, //.toLocalDateString();
                    event_start: resp.data.ev_time, //.toLocalTimeString();
                    event_pax: resp.data.ev_pax,
                    drink1_id: resp.data.ev_drink1,
                    drink2_id: resp.data.ev_drink2,
                    drink3_id: resp.data.ev_drink3,
                    drink4_id: resp.data.ev_drink4,
                    drink5_id: resp.data.ev_drink5,
                    drink6_id: resp.data.ev_drink6,
                    address1: resp.data.ev_addr1,
                    address2: resp.data.ev_addr2,
                    city: resp.data.ev_city,
                    evstate: resp.data.ev_state,
                    zip: resp.data.ev_zip
                });
            });
    }

    //get_drink_name1 = (drinkid) => {
    //    console.log(drinkid);
    //    axios.get("/api/searchby_id/" + drinkid)
    //        .then(drinkinfo => {
    //            let drinkname = drinkinfo.data[0].strDrink;
    //            console.log(drinkname);
    //            this.setState({
    //                drink1_name: drinkname
    //            });
    //        });
    //}

    //get_drink_name2 = (drinkid) => {
    //    console.log(drinkid);
    //    axios.get("/api/searchby_id/" + drinkid)
    //        .then(drinkinfo => {
    //            let drinkname = drinkinfo.data[0].strDrink;
    //            console.log(drinkname);
    //            this.setState({
    //                drink2_name: drinkname
    //            });
    //        });
    //}

    //get_drink_name3 = (dinkid) => {
    //    console.log(drinkid);
    //    axios.get("/api/searchby_id/" + drinkid)
    //        .then(drinkinfo => {
    //            let drinkname = drinkinfo.data[0].strDrink;
    //            console.log(drinkname);
    //            this.setState({
    //                drink3_name: drinkname
    //            });
    //        });
    //}

    //get_drink_name4 = (drinkid) => {
    //    console.log(drinkid);
    //    axios.get("/api/searchby_id/" + drinkid)
    //        .then(drinkinfo => {
    //            let drinkname = drinkinfo.data[0].strDrink;
    //            console.log(drinkname);
    //            this.setState({
    //                drink4_name: drinkname
    //            });
    //        });
    //}

    //get_drink_name5 = (drinkid) => {
    //    console.log(drinkid);
    //    axios.get("/api/searchby_id/" + drinkid)
    //        .then(drinkinfo => {
    //            let drinkname = drinkinfo.data[0].strDrink;
    //            console.log(drinkname);
    //            this.setState({
    //                drink5_name: drinkname
    //            });
    //        });
    //}

    //get_drink_name6 = (drinkid) => {
    //    console.log(drinkid);
    //    axios.get("/api/searchby_id/" + drinkid)
    //        .then(drinkinfo => {
    //            let drinkname = drinkinfo.data[0].strDrink;
    //            console.log(drinkname);
    //            this.setState({
    //                drink6_name: drinkname
    //            });
    //        });
    //}

    //setdrinknames = () => {
    //    let d1 = this.get_drink_name(this.state.drink1_id);
    //    let d2 = this.get_drink_name(this.state.drink2_id);
    //    let d3 = this.get_drink_name(this.state.drink3_id);
    //    let d4 = this.get_drink_name(this.state.drink4_id);
    //    let d5 = this.get_drink_name(this.state.drink5_id);
    //    let d6 = this.get_drink_name(this.state.drink6_id);

    //    this.setState({
    //        drink1_name: d1,
    //        drink2_name: d2,
    //        drink3_name: d3,
    //        drink4_name: d4,
    //        drink5_name: d5,
    //        drink6_name: d6
    //    });
    //}

    handleChange = ({ option }) => {
        this.setState({
            selectedOption: option
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        //super();
        console.log(this.state);
        return (
            <div className="container-fluid cust-about max1024w">
                <div className="cust-about-us marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item"><h2>Event Name: {this.state.event_name}</h2></li>
                                <li className="list-group-item"><h2>Event Date: {this.state.event_date}</h2></li>
                                <li className="list-group-item"><h2>Event Time: {this.state.event_start}</h2></li>
                                <li className="list-group-item"><h2>Number of Participants: {this.state.event_pax}</h2></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item"><h2>Event Address: {this.state.address1}</h2></li>
                                <li className="list-group-item"><h2>Event Address: {this.state.address2}</h2></li>
                                <li className="list-group-item"><h2>Event City: {this.state.city}</h2></li>
                                <li className="list-group-item"><h2>Event State: {this.state.evstate}</h2></li>
                                <li className="list-group-item"><h2>Event Zip: {this.state.zip}</h2></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item"><h2>Drink 1: {this.state.drink1_name}</h2></li>
                                <li className="list-group-item"><h2>Drink 2: {this.state.drink2_name}</h2></li>
                                <li className="list-group-item"><h2>Drink 3: {this.state.drink3_name}</h2></li>
                                <li className="list-group-item"><h2>Drink 4: {this.state.drink4_name}</h2></li>
                                <li className="list-group-item"><h2>Drink 5: {this.state.drink5_name}</h2></li>
                                <li className="list-group-item"><h2>Drink 6: {this.state.drink6_name}</h2></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <ul className="list-group">
                                    <li className="list-group-item"><h2>Credit Card #: <input type="text" className="form-control" id="ccnum" /></h2></li>
                                    <li className="list-group-item"><h2>Credit Card Exp:<input type="text" className="form-control" id="ccexp" /></h2></li>
                                    <li className="list-group-item"><h2>Credit Card CCV:<input type="text" className="form-control" id="ccccv" /></h2></li>
                                    <li className="list-group-item"><h2>Credit Card Zip:<input type="text" className="form-control" id="cczip" /></h2></li>
                                    <li className="list-group-item"><h2>Name on Credit Card:<input type="text" className="form-control" id="ccname" /></h2></li>
                                </ul>
                                <button type="button" className="btn btn-primary"><h2>Submit for Payment</h2></button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>

        )
    }
}

export default ConfirmEventInfo;