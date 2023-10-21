var studentName = document.getElementById("studentName");
var courseName = document.getElementById("courseName");
var addmissionDate = document.getElementById("addmissionDate");
var courseFee = document.getElementById("courseFee");
var addStudentBtn = document.getElementById("addStudentBtn");

var studentList = document.getElementById("studentList");

addStudentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (studentName.value == "") {
    alert("Please fill-up you Name");
  } else if (courseName.value == "") {
    alert("Please fill-up you Course Name");
  } else if (addmissionDate.value == "") {
    alert("Please fill-up you Admission Date");
  } else if (courseFee.value == "") {
    alert("Please fill-up you Course Fee");
  } else {
    //   adding a new row
    var addNewRow = document.createElement("tr");

    //   adding a new table data for student name
    var newStudentName = document.createElement("td");
    newStudentName.innerHTML = studentName.value;
    addNewRow.appendChild(newStudentName);

    //   adding a new table data for Course name
    var NewCourseName = document.createElement("td");
    NewCourseName.innerHTML = courseName.value;
    addNewRow.appendChild(NewCourseName);

    //   adding a new table data for student Addmision Date
    var newAddmissionDate = document.createElement("td");
    newAddmissionDate.innerHTML = addmissionDate.value;
    addNewRow.appendChild(newAddmissionDate);

    //   adding a new table data for Course Fee
    var newCourseFee = document.createElement("td");
    newCourseFee.innerHTML = "TK " + courseFee.value;
    addNewRow.appendChild(newCourseFee);

    //   adding a new delete button field
    var btnField = document.createElement("td");
    btnField.classList.add("text-center");
    addNewRow.appendChild(btnField);

    //   adding a new delete button
    var newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerHTML = "Delete Item";
    newDeleteBtn.classList.add("btn");
    newDeleteBtn.classList.add("btn-danger");
    newDeleteBtn.classList.add("deleteItem");
    btnField.appendChild(newDeleteBtn);

    //  append all table data into table row
    studentList.appendChild(addNewRow);

    //   adding a new delete button functionality
    var deleteButton = document.querySelectorAll(".deleteItem");

    deleteButton.forEach((button) => {
      console.log(button);
      button.addEventListener("click", (e) => {
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
      });
    });

    //make form field eamty after submit
    studentName.value = "";
    courseName.value = "";
    addmissionDate.value = "";
    courseFee.value = "";
  }
});
