let students = [];
//
const create = (obj) => {
  students.push(obj);
};

const update = (id, obj) => {
  students = students.map((student) => (student.id === id ? obj : student));
};

const deleteOne = (id) => {
  students = students.filter((student) => student.id !== id);
};

const findById = (id) => {
  return students.filter((student) => student.id === id)[0];
};

const findAll = (type, page, size) => {
  const subPage = students.filter(
    (student, index) => index >= (page - 1) * size && index < page * size
  );
  switch (type) {
    case "":
      return subPage;
    case "GOOD":
      return subPage.filter((student) => student.type === "GOOD");
    case "AVERAGE":
      return subPage.filter((student) => student.type === "AVERAGE");
    case "WEAK":
      return subPage.filter((student) => student.type === "WEAK");
    default:
      break;
  }
};
//
create({
  id: 1,
  name: "Thao",
  age: "24",
  type: "GOOD",
  balance: 6867,
  subjects: ["math", "physic", "chemistry"],
});
create({
  id: 2,
  name: "Lan",
  age: "26",
  type: "AVERAGE",
  balance: 14063,
  subjects: ["math", "physic", "art"],
});
create({
  id: 3,
  name: "Duc",
  age: "23",
  type: "AVERAGE",
  balance: 18274,
  subjects: ["math", "art", "chemistry"],
});
create({
  id: 4,
  name: "Thanh",
  age: "29",
  type: "GOOD",
  balance: 7189,
  subjects: ["art", "physic", "chemistry"],
});
create({
  id: 5,
  name: "Thao",
  age: "30",
  type: "AVERAGE",
  balance: 7945,
  subjects: ["math", "English", "chemistry"],
});

console.log(students);
console.log(findAll("", 3, 2));
