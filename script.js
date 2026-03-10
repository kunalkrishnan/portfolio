// =====================================================
// PORTFOLIO SCRIPT - KUNAL KRISHNAN
// =====================================================

document.addEventListener("DOMContentLoaded", function () {


// =====================================================
// DAILY DATA ENGINEERING QUIZ
// =====================================================

const question = document.getElementById("question");
const answer = document.getElementById("answer");

const quizData = [

{q:"What does Z-Order optimization do in Delta Lake?",a:"It clusters related data together to improve query performance."},
{q:"What is the Silver layer in Medallion architecture?",a:"The layer where data is cleaned and transformed."},
{q:"Which Azure service orchestrates pipelines?",a:"Azure Data Factory."},
{q:"Which storage layer is used in Azure Lakehouse architecture?",a:"Azure Data Lake Storage Gen2."},
{q:"Which compute engine powers Azure Databricks?",a:"Apache Spark."},
{q:"What is Medallion Architecture?",a:"A data design pattern with Bronze, Silver and Gold layers for data refinement."},
{q:"What is the Bronze layer in a data lake?",a:"It stores raw ingested data from source systems."},
{q:"What is the Silver layer responsible for?",a:"Cleaning, deduplicating and transforming raw data."},
{q:"What is the Gold layer used for?",a:"Serving business-ready datasets for analytics and reporting."},
{q:"What is Delta Lake?",a:"An open-source storage layer that brings ACID transactions to data lakes."},
{q:"What does VACUUM command do in Delta Lake?",a:"It removes old data files that are no longer needed."},
{q:"What is PySpark?",a:"The Python API for Apache Spark used for distributed data processing."},
{q:"What is incremental data loading?",a:"Loading only new or changed data instead of full datasets."},
{q:"What does MERGE INTO do in Delta Lake?",a:"It performs upsert operations combining insert and update logic."},
{q:"Which visualization tool integrates well with Azure data platforms?",a:"Power BI."}

];

if(question){

const randomIndex = Math.floor(Math.random()*quizData.length);
question.innerHTML = quizData[randomIndex].q;

window.showAnswer = function(){
answer.innerHTML = quizData[randomIndex].a;
}

}


// =====================================================
// HERO TYPING ANIMATION
// =====================================================

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

}else{

setTimeout(()=>{
typing.textContent="";
charIndex=0;
roleIndex=(roleIndex+1)%roles.length;
typeEffect();
},2000);

}

}

typeEffect();


// =====================================================
// CHATBOT TOGGLE
// =====================================================

const toggleBtn = document.getElementById("chatbot-toggle");
const chatbotBody = document.getElementById("chatbot-body");

if(toggleBtn){

toggleBtn.addEventListener("click", function(){

if(chatbotBody.style.display==="none"){
chatbotBody.style.display="flex";
toggleBtn.innerHTML="—";
}else{
chatbotBody.style.display="none";
toggleBtn.innerHTML="+";
}

});

}


// =====================================================
// SECTION SCROLL ANIMATION
// =====================================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}

});

});

sections.forEach(section=>{
section.style.opacity=0;
section.style.transform="translateY(40px)";
section.style.transition="all 0.6s ease";
observer.observe(section);
});


// =====================================================
// ARCHITECTURE IMAGE ROTATOR
// =====================================================

const archImages = [
"assets/bg1.jpeg",
"assets/bg2.jpeg",
"assets/bg3.jpeg",
"assets/bg4.jpeg"
];

let archIndex=0;

const archImg = document.getElementById("architectureImage");

if(archImg){

setInterval(()=>{

archIndex++;
if(archIndex>=archImages.length){
archIndex=0;
}

archImg.src=archImages[archIndex];

},4000);

}


// =====================================================
// BACKGROUND IMAGE ROTATOR
// =====================================================

const backgrounds=[
"assets/bg1.jpg",
"assets/bg2.jpg",
"assets/bg3.jpg",
"assets/bg4.jpg"
];

let bgIndex=0;

setInterval(()=>{

bgIndex++;

if(bgIndex>=backgrounds.length){
bgIndex=0;
}

document.body.style.backgroundImage=
`linear-gradient(rgba(8,10,30,0.9), rgba(8,10,30,0.9)), url(${backgrounds[bgIndex]})`;

},6000);


// =====================================================
// LIVE DATA PIPELINE CANVAS ANIMATION
// =====================================================

const canvas=document.getElementById("pipelineCanvas");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=canvas.offsetWidth;
canvas.height=300;

const nodes=[
{x:80,y:150,label:"Oracle"},
{x:220,y:150,label:"ADF"},
{x:360,y:150,label:"ADLS"},
{x:500,y:150,label:"Databricks"},
{x:640,y:150,label:"Delta"},
{x:780,y:150,label:"Synapse"},
{x:920,y:150,label:"Power BI"}
];

let packetX=80;

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

packetX+=2;

if(packetX>canvas.width){
packetX=80;
}

requestAnimationFrame(draw);

}

draw();

}

});


// =====================================================
// AI CHATBOT MESSAGE
// =====================================================

async function sendMessage(){

const input=document.getElementById("chat-input");
const chatBox=document.getElementById("chat-box");

const userMessage=input.value;
if(!userMessage) return;

chatBox.innerHTML+=`<p><b>You:</b> ${userMessage}</p>`;
input.value="";

try{

const response=await fetch("/api/chat",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({message:userMessage})
});

const data=await response.json();

chatBox.innerHTML+=`<p><b>AI:</b> ${data.reply}</p>`;

}catch(error){

chatBox.innerHTML+=`<p><b>AI:</b> Unable to connect to server.</p>`;

}

chatBox.scrollTop=chatBox.scrollHeight;

}
