1/ Phân biệt `setTimeout` và `setInterval`

2/ Hiện tượng callback hell là gì?

3/ Phân biệt `let` và `const`

4/ Phân biệt `forEach`, `filter`, `map`, `every`, `some`, `for` thường

5/ Phân biệt giá trị và địa chỉ của biến

6/ Lỗi reference object mà dev hay gặp là lỗi gì? Minh họa

7/ Phân biệt `call`, `bind`, `apply`

8/ Javascript có bao nhiêu kiểu dữ liệu?

9/ `prototype` là gì?

10/ Trình bày các phương pháp để khởi tạo object

11/ Trình bày các phương pháp để clone object (càng nhiều càng tốt, so sánh ưu nhược điểm)

12/ Bài tập xử lý mảng

```js
const students = [
  {
    id: 1,
    name: "Thao",
    age: 26,
    subjects: ["math", "physic", "chemistry"],
    type: "GOOD",
    balance: 10000,
  },
];
```

Không sử dụng `for` thường và `while`, chỉ sử dụng `forEach`, `filter`, `map`, `reduce`, `join`, `some`, `every`

0. Tự fake data cho từng trường hợp
1. Get danh sách tên sinh viên
2. Get danh sách tên sinh viên lớn hơn 25 tuổi
3. Get danh sách tên sinh viên nhỏ hơn 25 tuổi và loại "GOOD"
4. Tính tổng tiền của sinh viên
5. Tính tổng tiền của những sinh viên lớn hơn 25 tuổi
6. In ra chuỗi chứa tên sinh viên theo format: `name1 - name2`
7. Get danh sách tên sinh viên học giỏi và có tham gia lớp toán
8. Kiểm tra danh sách sinh viên có phải tất cả sinh viên đều loại giỏi hay không
9. Kiểm tra có tồn tại sinh viên học khá hay không

13/ Toán tử `==` và `===` khác và giống nhau như thế nào? `switch case` là so sánh `==` hay `===.`

14/ Sự khác nhau giữa `require` và `import`?

15/

```js
function test() {
  return
  {
    a: "b";
  }
}
console.log(test());
```

Kết quả của đoạn code này là gì? Vì sao?
16/ Kết quả của phép so sánh `[] == []` là gì? Vì sao?

17/ Bài tập CRUD trên memory
Khởi tạo biến `students = []` đại diện collection/table trong (cấu trúc tương tự students bài 12). Viết các function `create`, `update`, `delete`, `findBy`, `findAll`

1. `create(obj)`: function để create student
2. `update(id, obj)`: function để update student
3. `delete(id)`: function để delete student (xóa mềm)
4. `findById(id)`: function để lấy ra user theo id
5. `findAll(type, page = 0, size = 10)`: function này để lấy ra danh sách student thỏa mãn điều kiện filter theo type

- `type` = '' thì sẽ lấy all type
- `page`: số thứ tự của trang
- `size`: kích thước của trang.

18/ Tương tự bài 17, nhưng biến students là array được lưu trong file `students.json`
Bất cứ thao tác đọc ghi vào students đều phải xử lý đọc file bất đồng bộ
Gợi ý: sử dụng module `fs` là module built-in của Nodejs

19/ Mô tả cách hoạt động của event loop cho code sau:

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

console.log(3);
```
