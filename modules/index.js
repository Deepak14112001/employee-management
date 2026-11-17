import {
  companies,
  locations,
  departments,
  designations,
  status,
} from "../data/dropdown.js";
import { employees } from "../data/script.js";

companies.forEach((company) => {
  document.getElementById("companyDropDown").innerHTML +=
    `<option value="${company}">${company}</option>`;
});

locations.forEach((locations) => {
  document.getElementById("location").innerHTML +=
    `<option value="${locations}">${locations}</option>`;
});

departments.forEach((departments) => {
  document.getElementById("department").innerHTML +=
    `<option value="${departments}">${departments}</option>`;
});

designations.forEach((designations) => {
  document.getElementById("degignation").innerHTML +=
    `<option value="${designations}">${designations}</option>`;
});

status.forEach((status) => {
  document.getElementById("status").innerHTML +=
    `<option value="${status}">${status}</option>`;
});

employees.forEach((employees) => {
  document.getElementById("employeeDetails").innerHTML += `<tr>
    <td>
    ${employees.name}
    </td>
    <td>
    ${employees.userType}
    </td>
    <td>
    ${employees.email}
    </td>
    <td>
    ${employees.phone}
    </td>
    <td>
    ${employees.action}
    </td>
    `;
});


let search=document.getElementById('searchForm');
search.addEventListener('submit',function(e){
    e.preventDefault();
    let name = document.getElementById('name').value.toLowerCase();
    let email = document.getElementById('email').value.toLowerCase();
    let age = document.getElementById('age').value;
    let company = document.getElementById('companyDropDown').value;
    let location = document.getElementById('location').value;
    let department = document.getElementById('department').value;
    let designation = document.getElementById('degignation').value;
    let statusValue = document.getElementById('status').value;
let res = employees.filter((ele) => {
        return (
            (!name || ele.name.toLowerCase().includes(name)) &&
            (!email || ele.email.toLowerCase().includes(email)) &&
            (!age || String(ele.age) === age) &&
            (!company || ele.company === company) &&
            (!location || ele.location === location) &&
            (!department || ele.department === department) &&
            (!designation || ele.designation === designation) &&
            (!statusValue || ele.status === statusValue)
        );
    });

     let employeeDetails = document.getElementById("employeeDetails");
    employeeDetails.innerHTML = "";
res.forEach((employees)=>{
 employeeDetails.innerHTML += `<tr>
    <td>
    ${employees.name}
    </td>
    <td>
    ${employees.userType}
    </td>
    <td>
    ${employees.email}
    </td>
    <td>
    ${employees.phone}
    </td>
    <td>
    ${employees.action}
    </td>
    `;
})


})

