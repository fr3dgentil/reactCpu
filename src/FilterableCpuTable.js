import React, { Component } from 'react';
import SearchBar from './SearchBar';
import CpuTable from './CpuTable';
import logo from './cpu.png';

class FilterableCpuTable extends Component {
  render() {
    return (
      <div className="FilterableCpuTable">
        <h1>Filterable Cpu Table</h1>
        <SearchBar/>
        <CpuTable/>
        <img src={logo} id="cpuLogo"/>
      </div>
    );
  }
}

export default FilterableCpuTable;
