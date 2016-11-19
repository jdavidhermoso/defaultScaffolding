(function () {
  // Get the parent DIV, add click listener...
  document.getElementById("myDiv").addEventListener("click",function(e) {
    // e.target was the clicked element
    if (e.target && e.target.matches("a.classA")) {
      console.log("Anchor element clicked!");
    }
  });
})();
