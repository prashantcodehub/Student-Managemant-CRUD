const students = [ 
    { ID: 1, name: 'Alice', email: 'alice@example.com', age: 21, grade: 'A', degree: 'Btech'}, 
    { ID: 2, name: 'Bob', email: 'bob@example.com' , age: 22, grade: 'B', degree: 'MBA'}, 
    { ID: 3, name: 'Charlie', email: 'charlie@example.com', age: 20, grade: 'C', degree:'Arts'} 
];

// const NAME = document.getElementById('name');
// const EMAIL = document.getElementById('email');
// const CGPA = document.getElementById('GPA');
// const AGE = document.getElementById('age');
// const DEGREE = document.getElementById('degree');

const tableBody = document.getElementById('StuTb');
const form = document.getElementById('STform');
const submitButton = document.getElementById('addSt');
const searchInput = document.getElementById('SearchInputTEXT');

let editStudentId = null;

function renderStudentsTable() {
  tableBody.innerHTML = '';

  students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.ID}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td>${student.degree}</td>
      <td>
        <button class="edit-button" data-id="${student.ID}">Edit</button>
        <button class="delete-button" data-id="${student.ID}">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}