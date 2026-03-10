// ============================
// DAILY DATA ENGINEERING QUIZ
// ============================

const question = document.getElementById("question");
const answer = document.getElementById("answer");

const quizData = [

{
q: "What does Z-Order optimization do in Delta Lake?",
a: "It clusters related data together to improve query performance."
},

{
q: "What is the Silver layer in Medallion architecture?",
a: "The layer where data is cleaned and transformed."
},

{
q: "Which Azure service orchestrates pipelines?",
a: "Azure Data Factory."
},

{
q: "Which storage layer is used in Azure Lakehouse architecture?",
a: "Azure Data Lake Storage Gen2."
},

{
q: "Which compute engine powers Azure Databricks?",
a: "Apache Spark."
}

];

const randomIndex = Math.floor(Math.random() * quizData.length);

if(question){
question.innerHTML = quizData[randomIndex].q;
}

function showAnswer(){

if(answer){
answer.innerHTML = quizData[randomIndex].a;
}

}



// ============================
// HERO TYPING ANIMATION
// ============================

const roles = [
"Azure Data Engineer",
"Databricks & PySpark Specialist",
"Lakehouse Architecture Builder",
"Cloud Data Platform Engineer"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

const typing = document.querySelector(".typing");

if(!typing) return;

if(charIndex < roles[roleIndex].length){

typing.textContent += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,80);

}

else{

setTimeout(()=>{

typing.textContent = "";
charIndex = 0;
roleIndex = (roleIndex + 1) % roles.length;

typeEffect();

},2000);

}

}

typeEffect();



// ============================
// SMOOTH SCROLL NAVIGATION
// ============================

document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});



// ============================
// SECTION SCROLL ANIMATION
// ============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity = 0;
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.6s ease";

observer.observe(section);

});



// ============================
// ARCHITECTURE IMAGE ROTATOR
// ============================

const images = [
"assets/bg1.jpg",
"assets/bg2.jpg",
"assets/bg3.jpg",
"assets/bg4.jpg"
];

let imgIndex = 0;

setInterval(function(){

const img = document.getElementById("architectureImage");

if(img){

img.src = images[imgIndex];

imgIndex++;

if(imgIndex >= images.length){

imgIndex = 0;

}

}

},5000);



// ============================
// AI CHATBOT
// ============================

function sendMessage(){

const input = document.getElementById("chat-input");

const chatBox = document.getElementById("chat-box");

if(!input || !chatBox) return;

let userText = input.value;

chatBox.innerHTML += "<p><b>You:</b> "+userText+"</p>";

let response = "";

if(userText.toLowerCase().includes("azure")){

response = "Azure Data Factory and Databricks are core services used for building data pipelines.";

}

else if(userText.toLowerCase().includes("databricks")){

response = "Databricks uses Apache Spark for distributed data processing.";

}

else if(userText.toLowerCase().includes("delta")){

response = "Delta Lake provides ACID transactions and data reliability for data lakes.";

}

else{

response = "This portfolio showcases Azure Data Engineering projects and architectures.";

}

chatBox.innerHTML += "<p><b>Assistant:</b> "+response+"</p>";

input.value = "";

}



// ============================
// LIVE DATA PIPELINE ANIMATION
// ============================

const canvas = document.getElementById("pipelineCanvas");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = 300;

const nodes = [
{x:80,y:150,label:"Oracle"},
{x:220,y:150,label:"ADF"},
{x:360,y:150,label:"ADLS"},
{x:500,y:150,label:"Databricks"},
{x:640,y:150,label:"Delta"},
{x:780,y:150,label:"Synapse"},
{x:920,y:150,label:"Power BI"}
];

let packetX = 80;

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

nodes.forEach(node=>{

ctx.beginPath();
ctx.arc(node.x,node.y,20,0,Math.PI*2);
ctx.fillStyle="#2563eb";
ctx.fill();

ctx.fillStyle="white";
ctx.font="12px Arial";
ctx.textAlign="center";
ctx.fillText(node.label,node.x,node.y+40);

});

ctx.strokeStyle="#94a3b8";
ctx.lineWidth=2;

for(let i=0;i<nodes.length-1;i++){

ctx.beginPath();
ctx.moveTo(nodes[i].x+20,nodes[i].y);
ctx.lineTo(nodes[i+1].x-20,nodes[i+1].y);
ctx.stroke();

}

ctx.beginPath();
ctx.arc(packetX,150,8,0,Math.PI*2);
ctx.fillStyle="#22c55e";
ctx.fill();

packetX += 2;

if(packetX > canvas.width){
packetX = 80;
}

requestAnimationFrame(draw);

}

draw();

}
