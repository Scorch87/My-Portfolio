import './App.css';
import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import NavTabs from './components/NavTabs';

function App(){
    return(
    <div className="flex">
        <NavTabs />
        <PortfolioContainer /> 
    </div>
    );
}
export default App;
