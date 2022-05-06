const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close-btn');
const featuresBtn = document.querySelector('.Features-btn');
const companyBtn  = document.querySelector('.Company-btn');
const dropdown1 = document.querySelector('.dropdown-content1');
const dropdown2 = document.querySelector('.dropdown-content2');
const arrow = document.querySelector('.arrow');
const arrow1 = document.querySelector('.arrow-2');

menu.addEventListener("click", function(){
sidebar.classList.toggle("show-sidebar");
});

close.addEventListener("click", function(){
sidebar.classList.remove("show-sidebar");
});



  featuresBtn.addEventListener("click", function(){
   dropdown1.classList.toggle("show-dropdown");
arrow.classList.toggle("toggle-arrow");

  });

  companyBtn.addEventListener("click", function(){
  dropdown2.classList.toggle("show-dropdown");
arrow1.classList.toggle("toggle-arrow");

  });
