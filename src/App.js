import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mt-50">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Color Picker</h3>
            </div>
            <div className="panel-body">

              <hr />
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Size: 15px</h3>
            </div>
            <div className="panel-body">
              <button type="button" className="btn btn-success">Decrease</button>
              &nbsp;
              <button type="button" className="btn btn-success">Increase</button>
            </div>
          </div>
          <button type="button" className="btn btn-primary">Reset</button>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p>Color: red - Fontsize: 15px</p>
          <div id="content">
            Content here
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
