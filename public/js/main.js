const formValidation = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const msg = document.getElementById("msg");
  const title = document.getElementById("title").value;
  const role = document.getElementById("role").value;
  if (title.trim().length === 0 || role.trim().length === 0) {
    msg.textContent = "you should enter some text";
  } else if (title.trim().length < 5 || role.trim().length < 5) {
    msg.textContent = "you should enter more than 5";
  } else {
    form.submit();
  }
};
