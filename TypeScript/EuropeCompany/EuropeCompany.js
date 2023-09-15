"use strict";
class Employee {
    name;
    currentProject;
    constructor(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    getCurrentProject() {
        return this.currentProject;
    }
    getName() {
        return this.name;
    }
}
class Company {
    employees = [];
    add(employee) {
        this.employees.push(employee);
    }
    getProjectList() {
        return this.employees.map(employee => employee.getCurrentProject());
    }
    getNameList() {
        return this.employees.map(employee => employee.getName());
    }
}
class Backend extends Employee {
}
class Frontend extends Employee {
}
const frontendEmployee1 = new Frontend("John (Frontend)", "Project A");
const frontendEmployee2 = new Frontend("Anton (Frontend)", "Project B");
const backendEmployee1 = new Backend("Kiril (Frontend)", "Project C");
const backendEmployee2 = new Backend("David (Frontend)", "Project D");
const company = new Company();
company.add(frontendEmployee1);
company.add(frontendEmployee2);
company.add(backendEmployee1);
company.add(backendEmployee2);
console.log(company.getNameList());
console.log(company.getProjectList());
