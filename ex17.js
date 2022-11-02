let students = [];
const types = ["GOOD", "AVERAGE", "WEAK"];

const isIDExist = (id) => {
  return students.some((student) => student.id === id) === true;
};
const isOneOfType = (type) => {
  return types.includes(type);
};
//
const validate = (obj) => {
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
  if (!isOneOfType(obj.type)) {
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
  if (!validate(obj)) return;
  if (isIDExist(obj.id)) {
    console.log("ID must be unique");
    return;
  }
  students.push(obj);
  console.log("Create successfully");
};

const update = (id, obj) => {
  if (!validate(obj)) return;
  if (!isIDExist(id)) {
    console.log("Your ID is not in the students");
    return;
  }
  const pos = students.findIndex((student) => student.id === id);
  students[pos] = obj;
  console.log("Update successfully");
};

const deleteOne = (id) => {
  if (!isIDExist(id)) {
    console.log("Your ID is not in the students");
    return;
  }
  students = students.filter((student) => student.id !== id);
  console.log("Delete successfully");
};

const findById = (id) => {
  if (!isIDExist(id)) {
    console.log("Your ID is not in the students");
    return;
  }
  return students.find((student) => student.id === id);
};

const findAll = (type, page, size) => {
  if (!isOneOfType(type) && type !== "") {
    console.log(`Can not read type "${type}"`);
    return;
  }
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
  balance: "7945",
  subjects: ["math", "English", "chemistry"],
});
update(2, {
  id: 10,
  name: "Ngan",
  age: "32",
  type: "AVERAGE",
  balance: "7945",
  subjects: ["math", "English", "chemistry"],
});
deleteOne(10);
console.log(students);
console.log(findAll("", 2, 2));
