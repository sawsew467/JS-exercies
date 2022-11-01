import DATA from "./data.js";
// const students = [
//     {
//       id: 1,
//       name: "Thao",
//       age: 26,
//       subjects: ["math", "physic", "chemistry"],
//       type: "GOOD",
//       balance: 10000,
//     },
//   ];
// Get danh sách tên sinh viên
const nameArray = DATA.map((student) => student.name);
console.log(nameArray);
// Get danh sách tên sinh viên lớn hơn 25 tuổi
const upper25Student = DATA.filter((student) => student.age > 25);
const upper25Name = upper25Student.map((student) => student.name);
console.log(upper25Name);
// Get danh sách tên sinh viên nhỏ hơn 25 tuổi và loại "GOOD"
const lower25Student = DATA.filter(
  (student) => student.age < 25 && student.type === "GOOD"
);
const lower25Name = lower25Student.map((student) => student.name);
console.log(lower25Name);
// Tính tổng tiền của sinh viên
const balanceArray = DATA.map((student) => student.balance);
const sumBalance = balanceArray.reduce((a, b) => a + b);
console.log(sumBalance);
// Tính tổng tiền của những sinh viên lớn hơn 25 tuổi
const balanceUpper25 = upper25Student.map((student) => student.balance);
const sumBalanceUpper25 = balanceUpper25.reduce((a, b) => a + b);
console.log(sumBalanceUpper25);
// In ra chuỗi chứa tên sinh viên theo format: name1 - name2
console.log(nameArray.join(' - '));
// Get danh sách tên sinh viên học giỏi và có tham gia lớp toán
const goodStudents = DATA.filter(student => student.subjects.includes("math") && student.type === "GOOD");
console.log(goodStudents);
// Kiểm tra danh sách sinh viên có phải tất cả sinh viên đều loại giỏi hay không
console.log(DATA.every(student => student.type === "GOOD"))
// Kiểm tra có tồn tại sinh viên học khá hay không
console.log(DATA.some(student => student.type === "AVERAGE"))

