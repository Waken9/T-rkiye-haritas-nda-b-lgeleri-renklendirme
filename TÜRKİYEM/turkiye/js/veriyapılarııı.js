﻿var paths = [
  document.getElementById("TR-01"),
  document.getElementById("TR-02"),
  document.getElementById("TR-03"),
  document.getElementById("TR-04"),
  document.getElementById("TR-05"),
  document.getElementById("TR-06"),
  document.getElementById("TR-07"),
  document.getElementById("TR-08"),
  document.getElementById("TR-09"),
  document.getElementById("TR-10"),
  document.getElementById("TR-11"),
  document.getElementById("TR-12"),
  document.getElementById("TR-13"),
  document.getElementById("TR-14"),
  document.getElementById("TR-15"),
  document.getElementById("TR-16"),
  document.getElementById("TR-17"),
  document.getElementById("TR-18"),
  document.getElementById("TR-19"),
  document.getElementById("TR-20"),
  document.getElementById("TR-21"),
  document.getElementById("TR-22"),
  document.getElementById("TR-23"),
  document.getElementById("TR-24"),
  document.getElementById("TR-25"),
  document.getElementById("TR-26"),
  document.getElementById("TR-27"),
  document.getElementById("TR-28"),
  document.getElementById("TR-29"),
  document.getElementById("TR-30"),
  document.getElementById("TR-31"),
  document.getElementById("TR-32"),
  document.getElementById("TR-33"),
  document.getElementById("TR-34"),
  document.getElementById("TR-35"),
  document.getElementById("TR-36"),
  document.getElementById("TR-37"),
  document.getElementById("TR-38"),
  document.getElementById("TR-39"),
  document.getElementById("TR-40"),
  document.getElementById("TR-41"),
  document.getElementById("TR-42"),
  document.getElementById("TR-43"),
  document.getElementById("TR-44"),
  document.getElementById("TR-45"),
  document.getElementById("TR-46"),
  document.getElementById("TR-47"),
  document.getElementById("TR-48"),
  document.getElementById("TR-49"),
  document.getElementById("TR-50"),
  document.getElementById("TR-51"),
  document.getElementById("TR-52"),
  document.getElementById("TR-53"),
  document.getElementById("TR-54"),
  document.getElementById("TR-55"),
  document.getElementById("TR-56"),
  document.getElementById("TR-57"),
  document.getElementById("TR-58"),
  document.getElementById("TR-59"),
  document.getElementById("TR-60"),
  document.getElementById("TR-61"),
  document.getElementById("TR-62"),
  document.getElementById("TR-63"),
  document.getElementById("TR-64"),
  document.getElementById("TR-65"),
  document.getElementById("TR-66"),
  document.getElementById("TR-67"),
  document.getElementById("TR-68"),
  document.getElementById("TR-69"),
  document.getElementById("TR-70"),
  document.getElementById("TR-71"),
  document.getElementById("TR-72"),
  document.getElementById("TR-73"),
  document.getElementById("TR-74"),
  document.getElementById("TR-75"),
  document.getElementById("TR-76"),
  document.getElementById("TR-77"),
  document.getElementById("TR-78"),
  document.getElementById("TR-79"),
  document.getElementById("TR-80"),
  document.getElementById("TR-81"),
];


var colorPicker = document.getElementById("color-picker");


for (var i = 0; i < paths.length; i++) {
  paths[i].addEventListener("click", function () {
    this.setAttribute("fill", colorPicker.value);
  });
}