const question = document.getElementById("question")
const answer = document.getElementById("answer")

const quizData = [

{
q:"What does Z-Order optimization do in Delta Lake?",
a:"It clusters related data together to improve query performance."
},

{
q:"What is the purpose of the Silver layer in Medallion architecture?",
a:"Data cleaning, transformation and enrichment."
},

{
q:"What tool orchestrates pipelines in Azure?",
a:"Azure Data Factory."
}

]

const random = Math.floor(Math.random()*quizData.length)

question.innerHTML = quizData[random].q

function showAnswer(){

answer.innerHTML = quizData[random].a

}
