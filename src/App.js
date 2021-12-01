import React, { Component } from "react";
import Todolist from "./comp/Todolist";
import "./App.css";
import Addtask from "./comp/Addtask";

export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), action: "react props", isdone: "true" },
      { id: Math.random(), action: "react state", isdone: "false" },
      { id: Math.random(), action: "react hooks", isdone: "true" },
    ],
  };

  handleDelete = (x) => {
    this.setState({ todos: this.state.todos.filter((el) => el.id !== x) });
  };
  handleComplete = (i) => {
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === i ? { ...el, isdone: !el.isdone } : el
      ),
    });
  };

  handleAdd = (input) => {
    const newtask = {
      id: Math.random(),
      action: input,
      isdone: false,
    };
    this.setState({ todos: [newtask, ...this.state.todos] });
  };

  render() {
    return (
      <div className="App">
        <Addtask add={this.handleAdd} />
        <Todolist
          list={this.state.todos}
          del={this.handleDelete}
          comp={this.handleComplete}
        />
      </div>
    );
  }
}
