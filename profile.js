const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const isValidEmail = email => emailRegex.test(email);


const pas = document.querySelector("#pass");
const user = document.querySelector("#user");
const mail = document.querySelector("#mail");
const contact = document.querySelector("#contact");

const change1 = document.querySelector("#pass2");
const change2 = document.querySelector("#user2");
const change3 = document.querySelector("#mail2");
const change4 = document.querySelector("#contact2");

const change5 = document.querySelector("#pass3");
const change6 = document.querySelector("#user3");
const change7 = document.querySelector("#mail3");
const change8 = document.querySelector("#contact3");
const validinput = () => {
  const c1val = change1.value.trim();
  if (c1val === "") {
    alert("please enter password");
  } else {
    change1.style.visibility = "hidden";
    alert("password updated");
    change5.style.visibility = "hidden";
  }
};
const validinput3 = () => {
  const c2val = change2.value.trim();
  if (c2val == "") {
    alert("please enter username");
  } else {
    change2.style.visibility = "hidden";
    alert("username updated");
    change6.style.visibility = "hidden";
  }
};

const validinput2 = () => {
    const c4val = change4.value.trim();
    if (c4val == "") {
      alert("please enter contact");
    }else if(c4val.length!==10){
      alert("not valid number")
    } else {
      change4.style.visibility = "hidden";
      alert("contact updated");
      change8.style.visibility = "hidden";
    }
  };

  const validinput4 = () => {
    const c3val = change3.value.trim();
    if (c3val == "") {
      alert("please enter email");
    } else if(!isValidEmail(c3val)){
      alert("not valid email")
    }
    else {
      change3.style.visibility = "hidden";
      alert("email updated");
      change7.style.visibility = "hidden";
    }
  };
pas.addEventListener("click", () => {
  change1.style.visibility = "visible";
  change5.style.visibility = "visible";
});
user.addEventListener("click", () => {
  change2.style.visibility = "visible";
  change6.style.visibility = "visible";
});

mail.addEventListener("click", () => {
  change3.style.visibility = "visible";
  change7.style.visibility = "visible";
});

contact.addEventListener("click", () => {
  change4.style.visibility = "visible";
  change8.style.visibility = "visible";
});

change5.addEventListener("click", (e) => {
  e.preventDefault();
  if (c1val === "") {
    alert("please enter password");
  } else {
    change1.style.visibility = "hidden";
    alert("password updated");
    change5.style.visibility = "hidden";
  }
});
change6.addEventListener("click", (e) => {
  e.preventDefault();
  if (c2val == "") {
    alert("please enter username");
  } else {
    change2.style.visibility = "hidden";
    alert("username updated");
    change6.style.visibility = "hidden";
  }
});
change7.addEventListener("click", (e) => {
  e.preventDefault();
  if (c3val == "") {
    alert("please enter email");
  } else {
    alert("email updated");
    change3.style.visibility = "hidden";
    change7.style.visibility = "hidden";
  }
});
change8.addEventListener("click", (e) => {
  e.preventDefault();
  if (c4val == "") {
    alert("please enter contact");
  } else {
    alert("contact updated");
    change4.style.visibility = "hidden";
    change8.style.visibility = "hidden";
  }
});
change5.addEventListener("click", (e) => {
  e.preventDefault();
  validinput();
});
change6.addEventListener("click", (e) => {
  e.preventDefault();
  validinput3();
});
change8.addEventListener("click",(e)=>{
    e.preventDefault();
    validinput2();
})

change7.addEventListener("click", (e) => {
    e.preventDefault();
    validinput4();
})


