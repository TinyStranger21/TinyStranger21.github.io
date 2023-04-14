console.log("it works");
//Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
// Sam, Tech, Manager, 40000, true
// Mary, Finance, Trainee, 18500, true
// Bill, HR, Executive, 21200, false

// 2. Create JSON for the company with the following details (companyName, website, employees)
//      Tech Stars, www.techstars.site, array of Employees
// 3. A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
//      Anna, Tech, Executive, 25600, false

// 4. Given the JSON for the company, calculate the total salary for all company employees.

// 5. It's raise time. If an employee is raise eligible, increase their salary by 10%. 
//      Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
// 6. Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
//      Working from home: ['Anna', 'Sam']

let employ = '{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech", "designation":"Manager", "salary":"40000", "raiseEligible":"true" },' +
'{ "firstName":"Mary" , "department":"Finance", "designation":"Trainee", "salary":"18500", "raiseEligible":"true"},' +
'{ "firstName":"Bill" , "department":"HR", "designation":"Executive", "salary":"21200", "raiseEligible":"false"} ]}';

const obj = JSON.parse(employ);
console.log("Problem 1");
console.log(obj);
// console.log(obj["employees"][1]["firstName"]);

let company = '{ "companyDetails": [' + '{"companyName":"Tech Stars"},' + '{"website":"www.techstars.site"} ]}';
const comp = JSON.parse(company); //
console.log("Problem 2");
comp['employees'] = obj["employees"];
console.log(comp);

// let newEmploy = '{ "firstName":"Anna" , "department":"Tech", "designation":"Executive", "salary":"25600", "raise eligible":"false" },';
// const newEmp = JSON.parse(newEmploy);
console.log("Problem 3");
// obj["employees"] = newEmp;
obj["employees"].push({ firstName: "Anna", department:"Tech", designation:"Executive", salary:"25600", raiseEligible:"false" });
console.log(obj);


console.log("Problem 4");
// through company, make a for loop that takes each salary from the employees in each company and then calculate the total
// total = 0
// for i in range(number of employees):
//      get employee salary employee[i][3]
//      total = total + employee salary

let total = 0;
for (i=0; i<comp['employees'].length; i++) { // figure out the object array length thing????????????????????????????????
    let empSalary = (comp["employees"][i]["salary"]);
    console.log(empSalary);
    total += Number(empSalary);
}
// console.log(total)
// console.log(obj["employees"][0]["salary"])
// console.log(obj.length);
const TOTAL_SAL = JSON.parse(total);
console.log(TOTAL_SAL);

console.log("Problem 5");
// if raise eligible:
//      math Number(salary)*1.10
for (i=0; i<comp['employees'].length; i++) {
    // console.log(i)
    if (comp["employees"][i]["raiseEligible"]==="true") {
        // console.log("eligible");
        let raise = Number(comp['employees'][i]['salary'])*1.10;
        // raise = raise*1.10;
        comp['employees'][i]['salary'] = raise.toString();
        comp["employees"][i]["raiseEligible"] = "false";
    }
}
console.log(comp);

console.log("Problem 6");
//For each employee, add another property called 'wfh' and set it to true or false
//      Working from home: ['Anna', 'Sam']
const workFromHome = ['Anna', 'Sam'];

for (i=0; i<comp['employees'].length; i++) {
    if (workFromHome.includes(comp['employees'][i]['firstName'])) {
        comp['employees'][i]["wfh"] = "true";
    }
    else {
        comp['employees'][i]["wfh"] = "false";
    }


    // if (comp["employees"][i]["firstName"]=== workFromHome[i]) {
    //     comp['employees'][i]["wfh"] = "true";
    // }
    // else if(comp["employees"][i]["firstName"]=== "Anna") {
    //     comp['employees'][i]["wfh"] = "true";
    // }
    // else
    // comp['employees'][i]["wfh"] = "false";
}

console.log(comp);


// comp['employees']


