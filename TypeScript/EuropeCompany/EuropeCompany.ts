class Employee {
    private name: string;
    private currentProject: string;

    constructor(name: string, currentProject: string) {
        this.name = name;
        this.currentProject = currentProject;
    }

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
}

class Company {
    private employees: Employee[] = [];

    add(employee: Employee): void {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        return this.employees.map(employee => employee.getCurrentProject());
    }

    getNameList(): string[] {
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