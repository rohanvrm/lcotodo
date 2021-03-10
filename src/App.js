/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { 
        newItem :"",
        list: []
        }
  }

  deleteItem(id) {
    const list=[...this.state.list];
    const updatedlist=list.filter(item => item.id !==id);
    this.setState({list: updatedlist})

  }

  updateInput(input)
  {
    this.setState({newItem:input})
  }


  addItem(todoValue) {
    if(todoValue!=="")
      {
          const newItem={id: Date.now(), value:todoValue, isDone: false };
          const list = [...this.state.list];
          list.push(newItem);

          this.setState({list, newItem:""});
      }
  }
  render() {
  return (
    <div className="App" >
      <h1 className="App-header">
          Hello, world!
        <img src={logo} alt="description" className="App-logo"/> 
        
        <div >
          <img  className= "logo" alt="" src={logo} width="100" height="100" />
          <h2 className="App-title">
            <br/>
            TO DO  
          </h2>
          
          
        <input type="text" className="input-text" placeholder="Write a todo"

              required value={this.state.newItem}
              onChange={e => this.updateInput(e.target.value)}

        />
       
        </div>
        <p>First time implementation</p>

        <div>
          <button className="add-button"  onClick={()=>this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          > Submit</button>

          <ul>
            {this.state.list.map(item=>{return(   


              <li key={item.id}>
                  <input
                  type="checkbox" name="Name"  checked={item.isDone}
                  onChange={()=> {} } />
                  <button className="btn" onClick={()=> this.deleteItem(item.id)}> Delete </button>
              </li>
            );
            })}
            <li>
              <input type="checkbox" className=""/>
              Record Youtube video
              <button className="btn"> Delete</button>
            </li>
          </ul>

        </div>
        
        
      </h1>
     
    </div>
  );
}
}

export default App;

