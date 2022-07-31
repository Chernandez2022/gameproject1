function check() {
  let counter = 0;
  let question1 = document.quiz.question1.value;
  let question2 = document.quiz.question2.value;
  let question3 = document.quiz.question3.value;
  let question4 = document.quiz.question4.value;
  let question5 = document.quiz.question5.value;
  let question6 = document.quiz.question6.value;
  let question7 = document.quiz.question7.value;
  let question8 = document.quiz.question8.value;
  let result = document.getElementById("result");
  if (question1 == "Trenton") {
    counter++;
  }
  if (question2 == "Australia") {
    counter++;
  }
  if (question3 == "21") {
    counter++;
  }
  if (question4 == "12") {
    counter++;
  }
  if (question5 == "Lunch and Dinner") {
    counter++;
  }
  if (question6 == "Cellphone") {
    counter++;
  }
  if (question7 == "A widow") {
    counter++;
  }
  if (question8 == "Stairs") {
    counter++;
  }

  if (counter <= 4) {
    result.textContent = "You Lose!";
  } else {
    result.textContent = "You Win!";
  }
}
// let questions = [
//   {
//     prompt:
//       "What is the capital of New Jersey? \n (a) Wayne \n (b) Paramus \n (c) Trenton \n (d) (Paterson)",
//     answer: "c",
//   },
//   {
//     prompt:
//       "Where can Kangaroos be found? \n (a) Australia \n (b) Mexico \n (c) Bolivia \n (d) Japan",
//     answer: "a",
//   },
//   {
//     prompt: "What's 9 + 10? \n (a) 21 \n (b) 11 \n (c) 20 \n (d) 19",
//     answer: "d",
//   },
//   {
//     prompt:
//       "How many months have 28 days?? \n (a) 6\n (b) 12 \n (c) 3 \n (d) 5",
//     answer: "b",
//   },
//   {
//     prompt:
//       "What are two things you can never eat for breakfast? \n (a) Lunch and Dinner\n (b) Candy and more candy \n (c) Steak and milk \n (d) Cookies and Milk",
//     answer: "a",
//   },
//   {
//     prompt:
//       "What never asks a question but gets answered all the time?? \n a Computer\n (b) Cellphone \n (c) The door \n (d) A delivery",
//     answer: "b",
//   },
//   {
//     prompt:
//       "What do you call a woman who knows where her husband is all the time? \n (a) Karen\n (b) Overbearing \n (c) A widow \n (d) Paranoid",
//     answer: "c",
//   },
//   {
//     prompt:
//       "What goes up and down, but always remains in the same place? \n (a) Elevator\n (b) Plane \n (c) Age \n (d) Stairs",
//     answer: "d",
//   },
// ];

// let counter = 0;
// for (let i = 0; i < questions.length; i++) {
//   let response = window.prompt(questions[i].prompt);
//   if (response == questions[i].answer) {
//     counter++;
//     alert("Correct!!!");
//   } else {
//     alert("Wrong!!!");
//   }
// }

// alert("You got" + counter + "correct");
