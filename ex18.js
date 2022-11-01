const fs = require("fs");

const types = ["GOOD", "AVERAGE", "WEAK"];
const isIDExist = (id) => {
  return students.some((student) => student.id === id) === false;
};
//
const validate = (obj) => {
  if (students.some((student) => student.id === obj.id)) {
    console.log("ID must be unique");
    return false;
  }
  if (obj.name.length < 2) {
    console.log("Name must be at least 2 characters");
    return false;
  }
  if (+obj.age <= 0 || isNaN(+obj.age)) {
    console.log("Age must be a positive number and greater than zero");
    return false;
  }
  if (+obj.balance <= 0 || isNaN(+obj.balance)) {
    console.log("Balance must be a positive number and greater than zero");
    return false;
  }
  if (["GOOD", "AVERAGE", "WEAK"].includes(obj.type) === false) {
    console.log("Type must be 'GOOD' or 'AVERAGE' or 'WEAK'");
    return false;
  }
  if (obj.subjects.length <= 0) {
    console.log("subjects must be at least 1 subject");
    return false;
  }
  return true;
};
//
const create = (obj) => {
  try {
    if (!validate(obj)) return;
    students.push(obj);
    console.log("Create succeedfully");
  } catch (error) {
    console.log("Something went wrong");
  }
};

const update = (id, obj) => {
  try {
    if (!validate(obj)) return;
    students[students.findIndex((student) => student.id === id)] = obj;
    console.log("Update succeedfully");
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

const deleteOne = (id) => {
  if (isIDExist(id)) {
    console.log("Your ID is not in the students");
    return;
  }
  students = students.filter((student) => student.id !== id);
  console.log("Delete succeedfully");
};

const findById = (id) => {
  if (isIDExist(id)) {
    console.log("Your ID is not in the students");
    return;
  }
  return students.find((student) => student.id === id);
  console.log("Find succeedfully");
};

const findAll = (type, page, size) => {
  if (+page <= 0 || +size <= 0 || isNaN(page) || isNaN(size)) {
    console.log(
      "Page and Size must be 2 positive numbers and greater than zero"
    );
    return;
  }
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
      console.log("Type must be 'GOOD' or 'AVERAGE' or 'WEAK'");
      break;
  }
  console.log("Find succeedfully");
};
const students = JSON.parse(fs.readFileSync("./students.json"));
create({
  id: 10,
  name: "Thanh",
  age: "28",
  type: "GOOD",
  balance: 6867,
  subjects: ["math", "physic", "chemistry"],
});
fs.writeFileSync("./students.json", JSON.stringify(students));
