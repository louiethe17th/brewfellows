'use strict';

// Code for menu functionality sourced from W3

// Drop menu functionality

function menuDrop() {
    document.getElementById("navDropMenu").classList.toggle("show");
};

// Close menu when clicked outside 

window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
  
      var dropdowns = document.getElementsByClassName("menu-content");
      var i;
      for (var i in dropdowns) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };