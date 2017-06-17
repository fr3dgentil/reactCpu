import React from 'react';
import ReactDOM from 'react-dom';
import FilterableCpuTable from './FilterableCpuTable';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<FilterableCpuTable />, document.getElementById('root'));
registerServiceWorker();
