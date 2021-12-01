import React, { Component } from 'react'

export default class Addtask extends Component {
    state ={
        newtext : "",
    }

    handlechange =(e) => this.setState({newtext:e.target.value});
    handlesubmit =(e) => {
        e.preventDefault();
        this.state.newtext.trim() === ""
        ? alert ("write something")
        : this.props.add(this.state.newtext);
        this.setState({newtext : ""});
    }

    render() {
        return (
            <div>
                <h1 >TO DO APP</h1>
                <form onSubmit={this.handlesubmit} >
                    <input type="text" value={this.state.newtext} onChange={this.handlechange}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
