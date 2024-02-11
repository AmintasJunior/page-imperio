document.addEventListener("DOMContentLoaded", function () {
  var faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      // Fecha todas as respostas e remove a classe 'active' das outras perguntas
      var currentlyActive = document.querySelector(".faq-question.active")
      if (currentlyActive && currentlyActive !== this) {
        currentlyActive.classList.remove("active")
        currentlyActive.nextElementSibling.style.display = "none"
      }

      // Alterna a visibilidade da resposta atual e a classe 'active' da pergunta
      var answer = this.nextElementSibling
      if (answer.style.display === "block") {
        this.classList.remove("active")
        answer.style.display = "none"
      } else {
        this.classList.add("active")
        answer.style.display = "block"
      }
    })
  })
})
