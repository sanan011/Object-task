let users = {
  userList: [
    {
      userID: 1,
      userName: 'John',
      userLastName: 'Smith',
      userAge: 33,
      departments: ["IT", "Support"],
      salary: 2200
    },
    {
      userID: 2,
      userName: 'Jane',
      userLastName: 'Doe',
      userAge: 29,
      departments: ["HR", "Admin"],
      salary: 2500
    },
    {
      userID: 3,
      userName: 'Michael',
      userLastName: 'Johnson',
      userAge: 41,
      departments: ["Finance"],
      salary: 3000
    },
    {
      userID: 4,
      userName: 'Emily',
      userLastName: 'Davis',
      userAge: 26,
      departments: ["Marketing"],
      salary: 2400
    },
    {
      userID: 5,
      userName: 'Chris',
      userLastName: 'Brown',
      userAge: 35,
      departments: ["Sales", "Marketing"],
      salary: 2800
    },
    {
      userID: 6,
      userName: 'Sarah',
      userLastName: 'Wilson',
      userAge: 32,
      departments: ["Customer Support"],
      salary: 2300
    },
    {
      userID: 7,
      userName: 'David',
      userLastName: 'Miller',
      userAge: 45,
      departments: ["IT"],
      salary: 3100
    },
    {
      userID: 8,
      userName: 'Laura',
      userLastName: 'Taylor',
      userAge: 28,
      departments: ["HR"],
      salary: 2600
    },
    {
      userID: 9,
      userName: 'James',
      userLastName: 'Anderson',
      userAge: 39,
      departments: ["Finance"],
      salary: 3200
    },
    {
      userID: 10,
      userName: 'Emma',
      userLastName: 'Thomas',
      userAge: 31,
      departments: ["Marketing"],
      salary: 2700
    }
  ],
  
  findByID: function(id) {
    return this.userList.find(user => user.userID === id);
  },
  
  maxSalary: function() {
    let maxSalary = this.userList[0].salary;
    let maxSalaryUser = this.userList[0];

    for(let i = 1; i < this.userList.length; i++) {
      if(this.userList[i].salary > maxSalary) {
        maxSalary = this.userList[i].salary;
        maxSalaryUser = this.userList[i];
      }
    }
    return maxSalaryUser;
  },
  
  minSalary: function() {
    let minSalary = this.userList[0].salary;
    let minSalaryUser = this.userList[0];

    for(let i = 1; i < this.userList.length; i++) {
      if(this.userList[i].salary < minSalary) {
        minSalary = this.userList[i].salary;
        minSalaryUser = this.userList[i];
      }
    }
    return minSalaryUser;
  },
  
  maxAge: function() {
    let maxAge = this.userList[0].userAge;
    let maxAgeUser = this.userList[0];

    for(let i = 1; i < this.userList.length; i++) {
      if(this.userList[i].userAge > maxAge) {
        maxAge = this.userList[i].userAge;
        maxAgeUser = this.userList[i];
      }
    }
    return maxAgeUser;
  },
  
  minAge: function() {
    let minAge = this.userList[0].userAge;
    let minAgeUser = this.userList[0];

    for(let i = 1; i < this.userList.length; i++) {
      if(this.userList[i].userAge < minAge) {
        minAge = this.userList[i].userAge;
        minAgeUser = this.userList[i];
      }
    }
    return minAgeUser;
  },
  
  usersInSameDepartment: function(department) {
    let usersInDept = [];
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].departments.includes(department)) {
        usersInDept.push(this.userList[i]);
      }
    }
    return usersInDept;
  }
};

console.log(users.findByID(3));
console.log(users.maxSalary()); 
console.log(users.minSalary()); 
console.log(users.maxAge()); 
console.log(users.minAge());
console.log(users.usersInSameDepartment("IT"));