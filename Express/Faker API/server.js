const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
class User{
    constructor()
    {
        this.id=faker.datatype.uuid();
        this.firstName=faker.name.findName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();

    }   
}
class Company{
    constructor(){
        this.id=faker.datatype.uuid();
        this.name=faker.company.companyName();
        this.address={
            street:faker.address.streetName(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        };
    }
}
app.get("/api/users/new", (req, res) => {
    const user=new User()
    res.json(user);
});
app.get("/api/companies/new", (req, res) => {
    const company=new Company();
    res.json(company);
});
app.get("/api/user/company", (req, res) => {
    const companyUser={
        user1:new User(),
        company1:new Company()
    }
    res.json(companyUser);
});
