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
a: "The layer where data is cleaned, validated, and transformed."
},

{
q: "Which Azure service is used to orchestrate data pipelines?",
a: "Azure Data Factory."
},

{
q: "What storage layer is commonly used in Azure Lakehouse architecture?",
a: "Azure Data Lake Storage Gen2."
},

{
q: "Which compute engine is commonly used for big data processing in Azure?",
a: "Azure Databricks using Apache Spark."
}

];

// Random question selection
const randomIndex = Math.floor(Math.random() * quizData.length);

if(question){
question.innerHTML = quizData[randomIndex].q;
}

// Show answer function
function showAnswer(){

if(answer){
answer.innerHTML = quizData[randomIndex].a;
}

}



// ============================
// SMOOTH SCROLLING NAVIGATION
// ============================

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior: 'smooth'

});

});

});



// ============================
// SIMPLE SCROLL ANIMATION
// ============================

const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0px)";

}

});

});

elements.forEach(el => {

el.style.opacity = 0;
el.style.transform = "translateY(40px)";
el.style.transition = "all 0.6s ease";

observer.observe(el);

});
