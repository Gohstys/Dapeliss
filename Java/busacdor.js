function myFunction() {
  var input, filter, ul, li, a, i, div, img;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  div = document.getElementById("main-container");
  img = div.getElementsByTagName("li");
  for (i = 0; i < img.length; i++) {
    a = img[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}