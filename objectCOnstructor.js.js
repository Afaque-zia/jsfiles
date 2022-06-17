function Employee(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.talk = function () {
        alert("started Talking");
    }
}

var employee1 = new Employee("Afque", 30, 2);
var employee2 = new Employee("Zia",40, 10);

console.log(employee1, employee2)


var employee3 = {
    name: "umar",
    age: 10,
    id: 2,
    bring: function () {
        alert("bringing");
    },
    arr: ["a", "b", "c","d"],
    
}



console.log(employee3)
