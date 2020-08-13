import React, { Component } from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
import API from "../utils/API";

class Main extends Component {

    state = {
        category: [],
        property: [],
        employees: []
    };

    componentDidMount() {
        this.setState({ employees: API.generateUsers() }) 
    };

    handleFilter = event => {

    };

    render() {
        return (
            <div>
                <Hero>
                    <h1>Employee Directory</h1>
                    <h3>Here is a list of your employees</h3>
                </Hero>
                <Table employees={this.state.employees}/>
            </div>
        );
    }
}

export default Main;