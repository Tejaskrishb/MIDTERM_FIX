class Account{
  constructor(name){
    this.name = name;
    this.balance = 0;
  };
  credit(amount){
    this.balance += amount;
  }
  describe(){
    return `owner: ${this.name}, balanace: ${this.balance}`
  }
};

const accounts = [];

accounts.push(new Account("Sean"));
accounts.push(new Account("Brad"));
accounts.push(new Account("Georges"));

accounts.forEach(account => {
  account.credit(1000);
  console.log(account.describe());
});