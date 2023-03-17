class Person {
  constructor(name, address, id, email) {
      this.name = name;
      this.address = address;
      this.id = id;
      this.email = email;
  }
}

class Student extends Person {
  constructor(name, address, id, email, math, physics, chemistry) {
      super(name, address, id, email);
      this.math = math;
      this.physics = physics;
      this.chemistry = chemistry;
  }

  calcAverageScore() {
      return ((+this.math) + (+this.physics) + (+this.chemistry)) / 3;
  }
}

class Employee extends Person {
  constructor(name, address, id, email, days, salaryUnit) {
      super(name, address, id, email);
      this.days = days;
      this.salaryUnit = salaryUnit;
  }

  calcSalary() {
      return +this.days * +this.salaryUnit;
  }
}

class Customer extends Person {
  constructor(name, address, id, email, nameCompany, bill, rate) {
      super(name, address, id, email);
      this.nameCompany = nameCompany;
      this.bill = bill;
      this.rate = rate;
  }
}