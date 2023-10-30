class Employee {
    constructor(id, name, dob, salary) {
      this.id = id;
      this.name = name;
      this.dob = dob;
      this.salary = salary;
    }
  }
  
  class Manager extends Employee {
    constructor(id, name, dob, salary, department) {
      super(id, name, dob, salary);
      this.department = department;
    }
  }
  
    
  // Creating an employee object
  const employee1 = new Employee(1, "rish", "1n-04-2003", 50000);
  
  // Creating a manager object
  const manager1 = new Manager(2, "trisha", "18-04-2003", 60000, "HR");
  
  console.log(employee1);
  console.log(manager1);