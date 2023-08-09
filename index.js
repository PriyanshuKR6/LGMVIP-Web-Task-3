let allCards = document.getElementById("cards-col");

var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

function enrollStudent() {
  var studName = document.getElementById("name");
  var studEmail = document.getElementById("email");
  var website = document.getElementById("website");
  var imageLink = document.getElementById("image-link");
  var genderMale = document.getElementById("gender-male");
  var genderFemale = document.getElementById("gender-female");
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");

  if (
    studName.value === "" ||
    studEmail.value === "" ||
    website.value === "" ||
    imageLink.value === "" ||
    (genderMale.checked == false && genderFemale.checked == false) ||
    (html.checked == false && css.checked == false && js.checked == false)
  ) {
    alert("Please fill all the details");
    return false;
  } else {
    let div = document.createElement("div");
    div.classList.add("card");

    allCards.appendChild(div);

    let img = document.createElement("img");
    img.classList.add("image");

    img.src = imageLink.value;

    div.appendChild(img);

    let ul = document.createElement("ul");
    div.appendChild(ul);

    let li1 = document.createElement("li");
    li1.innerHTML = "Name : ";
    let span1 = document.createElement("span");
    span1.innerHTML = studName.value;
    ul.appendChild(li1);
    li1.appendChild(span1);

    let li2 = document.createElement("li");
    li2.innerHTML = "Email : ";
    let span2 = document.createElement("span");
    span2.innerHTML = studEmail.value;
    ul.appendChild(li2);
    li2.appendChild(span2);

    let li3 = document.createElement("li");
    li3.innerHTML = "Website : ";
    let span3 = document.createElement("span");
    span3.innerHTML = website.value;
    ul.appendChild(li3);
    li3.appendChild(span3);

    let li4 = document.createElement("li");
    li4.innerHTML = "Gender : ";
    let span4 = document.createElement("span");
    if (genderMale.checked) {
      span4.innerHTML = "Male";
    } else {
      span4.innerHTML = "Female";
    }
    ul.appendChild(li4);
    li4.appendChild(span4);

    let li = document.createElement("li");
    li.innerHTML = "Skills : ";
    let span5 = document.createElement("span");
    if (html.checked) {
      span5.innerHTML = span5.innerHTML + "HTML  ";
    }
    if (css.checked) {
      span5.innerHTML = span5.innerHTML + "CSS  ";
    }
    if (js.checked) {
      span5.innerHTML = span5.innerHTML + "Javascript";
    }
    ul.appendChild(li);
    li.appendChild(span5);

    studName.value = "";
    studEmail.value = "";
    website.value = "";
    imageLink.value = "";
    genderMale.checked = false;
    genderFemale.checked = false;
    html.checked = false;
    css.checked = false;
    js.checked = false;

    return true;
  }
}
