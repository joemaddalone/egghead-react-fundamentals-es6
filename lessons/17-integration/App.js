import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class Chart extends React.Component {
  render(){
    return <div className="holder" ref="chartArea"></div>
  }
  renderChart(){
     d3.select(this.refs.chartArea).selectAll('div')
      .data(this.props.data)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) {
        return d * 5 + 'px';
      });
  }
  componentDidMount(){
      this.renderChart()
  }
}

class App extends React.Component {
  makeData(){
    return Array.from(new Array(5), () => Math.floor((Math.random() * 15) + 1))
  }
  render(){
    return (
      <div>
        <Chart data={this.makeData()} />
        <Chart data={this.makeData()} />
        <Chart data={this.makeData()} />
        <Chart data={this.makeData()} />
        <Chart data={this.makeData()} />
      </div>
    )
  }
}

export default App
