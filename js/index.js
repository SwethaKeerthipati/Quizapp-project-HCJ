//toggle bookmark

const bookmarkButton = document.querySelector(".bookmark-button");

bookmarkButton.addEventListener("click", () => {
  const bookmarked = bookmarkButton.classList.contains("bookmarked");

  bookmarked
    ? bookmarkButton.classList.remove("bookmarked")
    : bookmarkButton.classList.add("bookmarked");
});

//Answer button
const showAnswerButtons = document.querySelectorAll('[data-js="show-answer"]');
const answerToBeShown = document.querySelectorAll(
  '[data-js="answer-to-be-shown"]'
);

for (let i = 0; i < showAnswerButtons.length; i++) {
  showAnswerButtons[i].addEventListener("click", () => {
    answerToBeShown[i].toggleAttribute("hidden");
    showAnswerButtons[i].textContent = answerToBeShown[i].hasAttribute("hidden")
      ? "Show Answer"
      : "Hide Answer";
  });
}
