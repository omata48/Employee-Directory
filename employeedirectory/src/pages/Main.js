import React, { Component } from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
import CardBtn from "../components/CardBtn";
import API from "../utils/API";

class Main extends Component {

    state = {
        filterProperty: "",
        employeesMain: [],
        employees: [],
    };

    componentDidMount() {
        const users = API.generateUsers()
        this.setState({ employeesMain: users, employees: users })
    };

    handleFilter = event => {
        event.preventDefault();
        var newArray = this.state.employees.filter(employee => {
            return (employee.job_title).includes("Engineer")
        })
        this.setState({
            employees: newArray
        })
    };

    sortCopy = (arr) => {
        return arr.concat().sort((a, b) =>
            (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0)
        )
    }

    resetFilters = event => {
        event.preventDefault();
        this.setState({
            employees: this.state.employeesMain
        })
    }

    handleSort = event => {
        event.preventDefault();
        const sortedEmployees = this.sortCopy(this.state.employees)
        this.setState({
            employees: sortedEmployees
        })
    }

    render() {
        return (
            <div>
                <Hero>
                    <h1>Employee Directory</h1>
                    <h3>Here is a list of your employees</h3>
                    <CardBtn
                        onClick={this.handleSort}
                        data_value="first-name"
                        name="First Name"
                    />{" "}
                    <CardBtn
                        onClick={this.handleFilter}
                        data_value="engineer"
                        name="Engineer"
                    />
                    <br />
                    <br />
                    <CardBtn
                        onClick={this.resetFilters}
                        data_value="reset"
                        name="Reset" 
                    />
                </Hero>
                <Table employees={this.state.employees} />
            </div>
        );
    }
}

export default Main;