const questions = [
      {
        question: "1. Which HTML tag is used for the largest heading?",
        options: ["<h1>", "<h6>", "<p>", "<title>"],
        answer: 0
      },

      {
        question: "2. Which CSS property controls text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: 2
      },

      {
        question: "3. Inside which HTML element do we put JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
      },

      {
        question: "4. What does the <a> tag represent in html?",
        options: ["<An image>", "<A paragraph>", "<A heading>", "<A navigation link>"],
        answer:3
      },

      {
        question: "5. Which html element is used for specifying a paragraph?",
        options: ["<p>", "<paragraph>", "<para>", "<text>"],
        answer: 0
      },

      {
        question: "6. What does 'JSON' acronym stand for in JavaScript?",
        options: ["javascript online navigation", "javascript object notation", "javascript object navigator",
        "javascript operation network"],
        answer:1
      },

      {
        question: "7. Which operator is used to concatenate strings in JavaScript?",
        options: ["+","-","*","/"],
        answer:0
      },

      {
        question: "8. What is the purpose of the 'typeof' operator in JavaScript?",
        options: ["To check if a variable is defined", "To determine the data type of a value",
        "To create a new variable", "To compare two values"],
        answer:1
      },

      {
        question: "9. In React what is prop?",
        options: ["A reserved keyword", "A method in React", "A property of a component", "A built-in react function"],
        answer:2
      },

      {
        question: "10. How can you handle events in React?",
        options: ["By directly manipulating the Dom", "Using event listeners", "By defining event handlers in JSX",
        "By using Redux"],
        answer:2
        
      }

];

    let currentQuestion = 0;
    let score=0;

    const startBtn = document.getElementById("btn");
    const quizBox = document.getElementById("quiz-box");
    const intro = document.getElementById("intro");
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");

    startBtn.addEventListener("click", () => {
      startBtn.style.display = "none";
      intro.style.display = "none";
      quizBox.style.display = "block";
      loadQuestion();
    });

    function loadQuestion() {
      const q = questions[currentQuestion];
      questionEl.textContent = q.question;
      optionsEl.innerHTML = "";
      q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => selectOption(i));
        optionsEl.appendChild(btn);
      });
    }

    function selectOption(selectedIndex) {
  const q = questions[currentQuestion];
  const optionButtons = document.querySelectorAll(".option-btn");

  // Disable all options once clicked
  optionButtons.forEach(btn => btn.classList.add("disabled"));

  if (selectedIndex === q.answer) {
    // Correct → mark green
    optionButtons[selectedIndex].classList.add("correct");
    score++;
  } else {
    // Wrong → mark red for chosen one
    optionButtons[selectedIndex].classList.add("wrong");
    // Highlight correct one in green
    optionButtons[q.answer].classList.add("correct");
  }
}


    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        quizBox.innerHTML = `<h2>🎉 Quiz Completed!</h2>
        <p>Your Score: <strong>${score}/${questions.length}</strong></p>
        `;
      }
    });
   
    