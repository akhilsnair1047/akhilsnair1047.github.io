
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("whoami", "Who am i and what do i do.");
  createCode("social -a", "All my social networks.");
  createCode("--help", "See all commands.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/akhil-nair";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "--help"){
    trueValue(value);
    
    createCode("npm -projects", "Github link and CV ;)");
    createCode("whoami", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "npm -projects"){
    trueValue(value);
    createText("<a href='https://github.com/akhilsnair1047' target='_blank'><i class='fab fa-github white'></i> github.com/akhilsnair1047</a>")
    createText("<a href='https://drive.google.com/file/d/16ofQUYvTE3-E1tS28Fyw9-JRBTRrurNT/view?usp=drive_link' target='_blank'><i class='fab fa-doc white'></i> Resume</a>")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("Hi, I am Akhil S Nair ;)")
    createText("I'm a Software Developer based in Bangalore, India. With a strong background in computer science, I have a passion for functional programming and strive to deliver innovative solutions.")
    createText("I am currently a Backend Engineer at Juspay Technologies Pvt. Ltd, where I integrate APIs, perform testing, and manage databases. My expertise lies in functional programming using Haskell and Purescript. I collaborate with my team using Git and Bitbucket for version control.")
    createText("Proficient in Python, C++, Haskell, and more, I am skilled in tools like VS Code, Git, and AWS. As an Intel Student Ambassador for IoT, I have led workshops and managed a community of tech enthusiasts.")
    createText("Run commands like :")
    createCode("social -a", "social links")
    // createCode("experience -v", "My experience")
    createCode("npm -projects", "Github link and CV")
    createText("to know more about me :) ")
  }
  // else if(value === "experience -v"){
  //   trueValue(value);
  //   createCode("Backend Developer - JUSPAY TECHNOLOGIES PVT LTD | 2022-Present", "social links")
  //   createCode("experience -v", "My experience")
  //   createCode("npm -projects", "Github link and CV")
  //   createText("to know more about me :) ")
  // }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/akhilsnair1047' target='_blank'><i class='fab fa-github white'></i> github.com/akhilsnair1047</a>")
    createText("<a href='https://www.linkedin.com/in/iamakhilsnair/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/iamakhilsnair</a>")
    createText("<a href='https://www.instagram.com/__akhil_nair__/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/__akhil_nair__</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();