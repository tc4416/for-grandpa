let actions = [
  "tell me that you miss me",
  "make coffee for me every day",
  "are my grandpa",
  "tell me you are proud of me",
  "pick me up from school everyday",
  "tell me I am as pretty as a fresh strawberry",
  "buy me the most expensive fruit in the market",
  "take three-hour naps every day",
  "own a teapot collection",
  "are just a tiny bit into gambling",
  "know all the foods I like",
  "are living a good life",
  "show me that saying goodbye does not need to be sad",
  "are you", // This should be the last one.
];
let imageArray = [
  "media/grandpa1.jpg",
  "media/grandpa2.jpg",
  "media/grandpa3.jpg",
  "media/grandpa4.jpg",
  "media/grandpa5.jpg",
  "media/grandpa6.jpg",
  "media/grandpa7.jpg",
  "media/grandpa8.jpg",
  "media/grandpa9.jpg",
  "media/grandpa10.jpg",
  "media/grandpa11.jpg",
  "media/grandpa12.jpg",
  "media/grandpa13.jpg",
  "media/grandpa14.jpg",
  "media/grandpa15.jpg",
  "media/grandpa16.jpg",
  "media/grandpa16.jpg",
  "media/grandpa18.jpg",
  "media/grandpa19.jpg",
  "media/grandpa20.jpg",
  "media/grandpa21.jpg",
  "media/grandpa22.png",
    "media/grandPa.jpg"
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
    choose = Math.round(Math.random());
    console.log(choose);
    if (choose == 0) {
      if (image.classList.contains("show")) {
        image.src = imageArray[imageIndex];
        //image.src = imageArray[Math.floor(Math.random() * imageArray.length)];
        if (imageIndex < imageArray.length - 1) {
          imageIndex++;
        } else {
          imageIndex = 0;
        }
      } else {
        image.src = imageArray[imageIndex];
        //image.src = imageArray[Math.floor(Math.random() * imageArray.length)];

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
        //phrase.innerHTML = actions[Math.floor(Math.random() * actions.length)];
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
    if (clickcount >= 15) {
      hyperlink.classList.remove("hide");
      hyperlink.classList.add("show");
      console.log("hyperlink!");
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
