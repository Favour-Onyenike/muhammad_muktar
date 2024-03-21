function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();

    if (name === "") {
      alert("Please enter your name");
      nameInput.classList.add("error");
      return;
    } else {
      nameInput.classList.remove("error");
    }

    if (email === "") {
      alert("Please enter your email");
      emailInput.classList.add("error");
      return;
    } else {
      emailInput.classList.remove("error");
    }

    if (name.length > 20) {
      alert("Name must be less than or equal to 20 characters");
      nameInput.classList.add("error");
      return;
    } else {
      nameInput.classList.remove("error");
    }

    alert("Thank you for submitting your form, " + name);
    // You can also submit the form here if needed
  }