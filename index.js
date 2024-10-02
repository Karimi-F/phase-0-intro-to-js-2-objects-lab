// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress:"11 Broadway"
}
function updateEmployeeWithKeyAndValue (employee, key, value){
   
    const copyOfObject = {...employee}
    copyOfObject[key]=value
    return copyOfObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}