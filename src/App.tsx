import React, { useState } from 'react';
import JobsData from './JobsData';
import genericSearch from './genericSearch';
import './App.css';
import { SearchInput } from './SearchInput';
import genericFilter from './genericFilter';
import IJobs from './IJobs';







function App() {
  const [query, setQuery] = useState<string>("");



  return (
    <div className="App">
      <h2>Jobs</h2>

      <SearchInput setSearchQuery ={setQuery}/>
      
      {/* <Filters /> */}

      
      
      {JobsData.filter((job) => genericSearch(job,["name","description","employer","location","avgSalary"], query))
      .map(job => {
        return(
          <div>
          <h3>{job.name}</h3>
          <p>{job.description} ({job.type})</p>
          <p>{job.employer} in {job.location}</p>
          <p>Salary: {job.avgSalary}</p>
          </div>

        )
      })}


    </div>
  );
}

export default App;
