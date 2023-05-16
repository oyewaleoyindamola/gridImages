document.title = "GRID IMAGES."
const body = document.body;

const mainDiv = document.createElement("div");
const divTop = document.createElement("div");
const divButt = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");

const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");
const img5 = document.createElement("img");
const img6 = document.createElement("img");
const img7 = document.createElement("img");
const img8 = document.createElement("img");
const img9 = document.createElement("img");

img1.setAttribute(
  "src",
  "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
);
img2.setAttribute(
  "src",
  "https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
);
img3.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEkwZGfgnEH30j02oW2nQ5A4ZOCbkaJMGTA&usqp=CAU"
);
img4.setAttribute(
  "src",
  "https://ychef.files.bbci.co.uk/1280x720/p0f4p79z.jpg"
);
img5.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8&w=1000&q=80"
);
img6.setAttribute(
  "src",
  "https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
);
img7.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlf8WRWObuaaJAK9u8V_Q6bl0_GmyYixYjVg&usqp=CAU"
);
img8.setAttribute(
  "src",
  "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg"
);
img9.setAttribute(
  "src",
  "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRPMKnq00NF_T7RusUNeLrSazRZM0S5O8_AOcw2iBTmYTxd3Q7uXf0sW41odpAKqSblKDMUMHGb8nZRo9g"
);

mainDiv.classList.add("container");
mainDiv.append(div1, div2, div3, div4, div5, div6, div7, div8, div9);
div1.append(img1);
div2.append(img2);
div3.append(img3);
div4.append(img4);
div5.append(img5);
div6.append(img6);
div7.append(img7);
div8.append(img8);
div9.append(img9);

body.append(mainDiv);
