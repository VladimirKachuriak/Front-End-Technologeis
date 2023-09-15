interface IEmployee {
    getCurrentProject(): string;
    getName(): string;
}

class Company {
    private employees: IEmployee[] = [];

    add(employee: IEmployee): void {
        this.employees.push(employee);
    }

    getProjectList(): string[] {
        return this.employees.map(employee => employee.getCurrentProject());
    }

    getNameList(): string[] {
        return this.employees.map(employee => employee.getName());
    }
}

class Frontend implements IEmployee {
    constructor(private name: string, private currentProject: string) { }

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
}

class Backend implements IEmployee {
    constructor(private name: string, private currentProject: string) { }

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
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