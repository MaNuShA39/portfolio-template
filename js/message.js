function sendEmail() {
    const name= document.getElementById("inputName");
    const email= document.getElementById("inputEmail");
    const details= document.getElementById("inputBody");
    const emailLink = "mailto:rmanushamuthumal@gmail.com" + "&subject=" + encodeURIComponent("Email from "+ name.value)
    + "&body=" + encodeURIComponent(details.value +"\n"+email.value)
;

    window.location.href = emailLink;
  }