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
class LocationImpl {
    persons = [];
    addPerson(person) {
        this.persons.push(person);
    }
    getPerson(index) {
        return this.persons[index];
    }
    getCount() {
        return this.persons.length;
    }
}
class CompanyLocationArray {
    employees = [];
    addPerson(person) {
        this.employees.push(person);
    }
    getPerson(index) {
        return this.employees[index];
    }
    getCount() {
        return this.employees.length;
    }
}
class CompanyLocationLocalStorage {
    storageKey = 'employee';
    addPerson(person) {
        const employees = this.getStoredEmployees();
        employees.push(person);
        this.storeEmployees(employees);
    }
    getPerson(index) {
        const employees = this.getStoredEmployees();
        let employee = new Employee(employees[index].getName(), employees[index].getCurrentProject());
        return employee;
    }
    getCount() {
        const employees = this.getStoredEmployees();
        return employees.length;
    }
    getStoredEmployees() {
        const storedData = localStorage.getItem(this.storageKey);
        const parsedData = storedData ? JSON.parse(storedData) : [];
        return parsedData.map((item) => new Employee(item.name, item.currentProject));
    }
    storeEmployees(employees) {
        localStorage.setItem(this.storageKey, JSON.stringify(employees));
    }
}
class Company {
    location;
    constructor(location) {
        this.location = location;
    }
    add(employee) {
        this.location.addPerson(employee);
    }
    getProjectList() {
        const projectList = [];
        for (let index = 0; index < this.location.getCount(); index++) {
            projectList.push(this.location.getPerson(index).getCurrentProject());
        }
        return projectList;
    }
    getNameList() {
        const projectName = [];
        for (let index = 0; index < this.location.getCount(); index++) {
            projectName.push(this.location.getPerson(index).getName());
        }
        return projectName;
    }
}
let person1 = new Employee("John", "Project A");
let person2 = new Employee("Anton", "Project B");
const arrayLocation = new CompanyLocationLocalStorage();
arrayLocation.addPerson(person1);
arrayLocation.addPerson(person2);
const company = new Company(arrayLocation);
console.log(company.getNameList());
console.log(company.getProjectList());
