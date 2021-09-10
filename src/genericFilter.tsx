export default function genericFilter<T>(object: T, filterProperty: keyof T,  filterQuery: string): boolean {
//    const filterValue = object[filterProperty];

//    if(typeof filterValue === "string" ){
//         return filterValue.includes(filterQuery);
//    }

return true
}