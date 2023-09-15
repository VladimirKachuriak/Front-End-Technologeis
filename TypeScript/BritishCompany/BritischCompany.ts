interface IEmployee {
    getCurrentProject(): string;
    getName(): string;
}
class Employee implements IEmployee {
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
interface ILocation {
    addPerson(person: IEmployee): void;
    getPerson(index: number): IEmployee;
    getCount(): number;
}
class LocationImpl implements ILocation {
    private persons: IEmployee[] = [];
    addPerson(person: IEmployee): void {
        this.persons.push(person);
    }
    getPerson(index: number): IEmployee {
        return this.persons[index];
    }
    getCount(): number {
        return this.persons.length;
    }
}

class CompanyLocationArray implements ILocation {
    private employees: Employee[] = [];

    addPerson(person: Employee): void {
        this.employees.push(person);
    }

    getPerson(index: number): Employee {
        return this.employees[index];
    }

    getCount(): number {
        return this.employees.length;
    }
}
class CompanyLocationLocalStorage implements ILocation {
    private storageKey : string = 'employee';

    addPerson(person: Employee): void {
        const employees = this.getStoredEmployees();
        employees.push(person);
        this.storeEmployees(employees);
    }

    getPerson(index: number): Employee {
        const employees = this.getStoredEmployees();
        let employee = new Employee(employees[index].getName() ,employees[index].getCurrentProject());
        return employee;
    }

    getCount(): number {
        const employees = this.getStoredEmployees();
        return employees.length;
    }

    private getStoredEmployees(): Employee[] {
        const storedData = localStorage.getItem(this.storageKey);
        const parsedData = storedData ? JSON.parse(storedData): [];
        return parsedData.map((item: { name: string; currentProject: string; }) => new Employee(item.name, item.currentProject));
    }

    private storeEmployees(employees: Employee[]): void {
        localStorage.setItem(this.storageKey, JSON.stringify(employees));
    }
}
class Company<LocationType extends ILocation> {
    constructor(private location: LocationType) { }

    add(employee: IEmployee): void {
        this.location.addPerson(employee);
    }

    getProjectList(): string[] {
        const projectList: string[] = [];
        for (let index = 0; index < this.location.getCount(); index++) {
            projectList.push(this.location.getPerson(index).getCurrentProject());
        }
        return projectList;
    }

    getNameList(): string[] {
        const projectName: string[] = [];
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