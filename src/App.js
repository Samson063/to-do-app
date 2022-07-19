import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){

    this.setState({
      [key]: value
    })
  }
  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }
  render(){
  return (
    <div className="main">
      <div>
        <h1>Add an Item...</h1>
        <br/>
        <input
        type='text'
        placeholder='Type item here...'
        value={this.newItem}
        onChange={e => this.updateInput( "newItem", e.target.value)}
        />
        <button className='addItem' onClick={() => this.addItem()}>
          Add
        </button>
        <br/>
        <ul>{this.state.list.map(item =>{
          return(
            <li key={item.id}>
              {item.value}
              <button className='delete' onClick={() => this.deleteItem(item.id)}>
                x
              </button>
            </li>
          )
        })}</ul>
      </div>
    </div>
  );
  }
}

export default App;
