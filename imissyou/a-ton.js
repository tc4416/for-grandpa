let actions = [
  "I haven't found a better tea than the one you make",
  "I am scared that I will never see you again",
  "mom is strong and you should be proud of her",
  "the first wish I make when I pray is always for you",
  "your snoring is always very loud and I love it",
  "I wish I could know more about you",
  "smoking is bad",
  "I am sorry that I don't call you as much as I want to",
  "good morning, have a beautiful day",
  "good afternoon",
  "good night",
  "please don't worry about me",
  "those orchids in your living room are very pretty",
  "I wish I could spend more time with you",
  "New York is beautiful in fall",
  "you are the best grandpa"
];
const finalPhrase = "I love you and thank you for loving me";

let imageArray = [
  "media/hello1.png",
  "media/hello2.png",
  "media/hello3.png",
  "media/hello4.png",
  "media/hello5.png",
  "media/hello6.png",
  "media/hello7.png",
  "media/hello8.png",
  "media/hello9.png",
  "media/hello10.png",
  "media/hello11.png",
  "media/hello12.png",
  "media/hello13.png",
  "media/hello14.png",
  "media/hello15.png",
  "media/hello16.png",

];

let choose;
let slot;
let image;
let phrase;
let hyperlink;
let clickcount = 0;
let main;
let imageIndex = 0;
let actionIndex = 0;

window.onload = async () => {
  console.log("window has loaded");

  shuffle(actions);
  shuffle(imageArray);

  slot = document.getElementById("slot");
  image = document.getElementById("image");
  phrase = document.getElementById("phrase");
  hyperlink = document.getElementById("hyperlink");
  main = document.getElementById("main");

  document.addEventListener("click", () => {
    clickcount += 1;

    if (clickcount > 25) {
      phrase.innerHTML = finalPhrase;
      phrase.classList.add("show", "final-phrase");
      phrase.classList.remove("hide");
      image.classList.add("hide");
      image.classList.remove("show");
      slot.classList.add("final-phrase");
      return;
    }

    choose = Math.round(Math.random());
    console.log(choose);
    if (choose == 0) {
      //show image
      if (image.classList.contains("show")) {
        image.src = imageArray[imageIndex];
        // image.src = imageArray[Math.floor(Math.random() * imageArray.length)];
        if (imageIndex < imageArray.length - 1) {
          imageIndex++;
        } else {
          imageIndex = 0;
        }
      } else {
        image.src = imageArray[imageIndex];
        // image.src = imageArray[Math.floor(Math.random() * imageArray.length)];

        image.classList.add("show");
        image.classList.remove("hide");
        phrase.classList.add("hide");
        phrase.classList.remove("show");
        if (imageIndex < imageArray.length - 1) {
          imageIndex++;
        } else {
          imageIndex = 0;
        }
      }
    } else {
      //show phrase
      if (phrase.classList.contains("show")) {
        phrase.innerHTML = actions[actionIndex];
        //phrase.innerHTML = actions[Math.floor(Math.random() * actions.length)];
        if (actionIndex < actions.length - 1) {
          actionIndex++;
        } else {
          actionIndex = 0;
        }
      } else {
        phrase.innerHTML = actions[actionIndex];
        // phrase.innerHTML = actions[Math.floor(Math.random() * actions.length)];
        phrase.classList.add("show");
        phrase.classList.remove("hide");
        image.classList.add("hide");
        image.classList.remove("show");

        if (actionIndex < actions.length - 1) {
          actionIndex++;
        } else {
          actionIndex = 0;
        }
      }
    }
  });
};

function shuffle(array) {
  // Loop from the end of the array down to the second element
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements array[i] and array[j] using destructuring assignment
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
