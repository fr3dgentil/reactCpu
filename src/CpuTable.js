import React, { Component } from 'react';
import CpuRow from './CpuRow';

class CpuTable extends Component {
  render() {
    return (
      <div className="CpuTable">
        <h2>Cpu Table</h2>
        <CpuRow/>
      </div>
    );
  }
}

export default CpuTable;
