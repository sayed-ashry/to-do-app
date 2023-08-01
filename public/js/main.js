const formValidation = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const msg = document.getElementById("msg");
  const data = document.querySelector("input").value;
  if (data.trim().length === 0) {
    msg.textContent = "you should enter some text";
  } else if (data.trim().length < 5) {
    msg.textContent = "you should enter more than 5";
  } else {
    form.submit();
  }
};
