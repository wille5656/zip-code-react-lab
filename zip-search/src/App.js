import React, { Component } from 'react';
import './App.css';


function City(props) {
  return (<div>This is the City component</div>);
}




class App extends Component {
   ZipSearchField(event) {
    event.preventDefault();
    fetch('http://ctp-zip-api.herokuapp.com/zip/'+ event.target.zip.value)
    .then(response => response.json())
    // we get a response and then we use to convert the response into json data
    
    .then(data => console.log(data))
    
    return (<div>Zip Code  </div> );
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ZIP CODE SEARCH</h2>
        </div>
       
        
        <form onSubmit= {(e)=>this.ZipSearchField(e)}>
    <input type="submit" value="Search" />
    <input id="zip" name="zip" type="text" pattern="[0-9]*"></input>
</form>
        <div>
         <City />
       <City />
        </div>
      </div>
    );
  }
}

export default App;
