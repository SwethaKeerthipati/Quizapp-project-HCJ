// submit
const form = document.getElementById("question-form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const questionInput = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const tagInput = document.getElementById("tag");

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  // Generate all DOM element for a card with createElement()
  function createCard(question, answer, tag) {
    const card = document.createElement("div");
    card.classList.add("card");

    const questionElement = document.createElement("h2");
    questionElement.textContent = question;

    const answerElement = document.createElement("p");
    answerElement.textContent = answer;

    const tagElement = document.createElement("span");
    tagElement.textContent = tag;

    // Insert the form's data as text into the DOM elements
    card.appendChild(questionElement);
    card.appendChild(answerElement);
    card.appendChild(tagElement);

    // Append the card to the page, directly below the form
    const formSection = document.querySelector(".form-section");
    //formSection.insertAdjacentElement("afterend", card);
    //card.scrollIntoView({ behavior: "smooth" });
  }

  // call function
  createCard(question, answer, tag);

  form.question.focus();
}

//Form field text counter
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

questionInput.addEventListener("input", updateCharacterCount);
answerInput.addEventListener("input", updateCharacterCount);

function updateCharacterCount() {
  const questionCount = document.getElementById("question-count");
  const answerCount = document.getElementById("answer-count");

  questionCount.textContent = `${questionInput.value.length}/150`;
  answerCount.textContent = `${answerInput.value.length}/150`;
}

//To display entered content in the form page
document
  .getElementById("question-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var question = document.getElementById("question").value;
    var answer = document.getElementById("answer").value;
    var tag = document.getElementById("tag").value;

    var questionCard = document.createElement("section");
    questionCard.className = "question-card";

    questionCard.innerHTML = `
    <article>
      <h2 class="question">${question}</h2>
      <button class="answer-card" type="button" data-js="show-answer">Show answer</button>
      <p class="answer" data-js="answer-to-be-shown" hidden>${answer}</p>
      <ul class="tags">
        <li class="tag-items">#${tag}</li>
      </ul>
      <div class="bookmark-button">
        <i class="fa-solid fa-bookmark fa-xl"></i>
      </div>
    </article>
  `;

    var submittedQuestions = document.getElementById("submitted-questions");
    submittedQuestions.appendChild(questionCard);
    form.reset();

    /* document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    document.getElementById("tag").value = "";*/
  });
