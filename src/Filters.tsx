import React, { useState, useEffect } from 'react'
import  jobFilterList  from './jobFilterList';


 interface IFilter<T> {
    object:Array <T>;
    active: boolean,
    value: T,
    id: number,
   

}

export function Filters<T> (props: IFilter<T>) {
    const {object} = props;

    const [filtersType, setFiltersType] = useState<T>();

    useEffect(() => {
        const filterValues = [
          ...new Set(["all", ...object.map((job) => job.type)])
        ];
        setFiltersType(
          filterValues.map((job, i) => ({
            active: true,
            value: job,
            id: i + 1
          }))
        );
      }, [object]);

      const onFilterTypeChange  = ({
        target:{
          checked: active,
          dataset: { value }
        }
      }) => {
        const newFilters = filtersType.map((job) =>
            [job.value, "all"].includes(value) ? { ...job, active } : job
          ),
          isAll = newFilters
            .filter((job) => job.value !== "all")
            .every((job) => job.active);
    
        newFilters.find((job) => job.value === "all").active = isAll;
    
        setFiltersType(newFilters);
      };

      const filterdTypes = filtersType
            .filter((job) => job.active)
            .map((job) => StorageEvent.value),
        filterdJobs = job.filter((job) =>
            filterdTypes.includes(stone.type)
            );

    return (
        <div>
            <div className="container">
            {/* {filtersType.map((job) => (
                <jobFilterList 
                    key={job.id}
                    {...job}
                    onChange={onFilterTypeChange}/>
            ))} */}
            </div>
            
        </div>
    )
}
