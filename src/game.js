const loadingPage = document.querySelector(".loadingPage");
loadpageSpin((spinNow = true));
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
var checkKey = false;
let stop = false;
let firstTime = true;
let correctAns = [];
const getAllData = async () => {
  const data = await fetch("data.json");
  const jsonData = await data.json();
  // console.log(jsonData);
  return jsonData;
};

function loadpageSpin(spinNow) {
  if (spinNow) loadingPage.classList.remove("hidden");
  else loadingPage.classList.add("hidden");
}

const getDataByAN = async (no) => {
  // console.log(no);
  const data = await fetch(
    "https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=" +
      no
  );
  const jsonData = await data.json();
  // console.log(jsonData);
  if (jsonData.message != "does not exists") return jsonData;
};

async function createBox1(odata, atNo) {
  const pdiv = document.createElement("div");
  pdiv.className = `sinBox w-full h-full text-center box  hover:transition-all hover:duration-200 transition-all duration-200  select-none md:active:scale-110 active:transition-all active:duration-200 hover:z-10  bg-gray-200 border border-black md:hover:scale-[1.18] cursor-pointer`;
  const obToSt = JSON.stringify(odata);
  // pdiv.setAttribute("onclick", `doOperation(${obToSt})`);

  if (atNo === 2) {
    pdiv.classList.add("g2");
  }
  if ((atNo === 57) | (atNo === 89)) {
    pdiv.classList.add("emp");
    pdiv.classList.remove("sinBox");
    pdiv.innerHTML = `<div class="text-[0.9rem] md:text-[1rem] lg:text-[1.4rem]">*</div>`;
    div1.appendChild(pdiv);
    return;
  }
  // pdiv.setAttribute("onclick", `doOperation(${obToSt})`);
  pdiv.setAttribute("data", `${obToSt}`);

  pdiv.innerHTML = `
        <div class="lg:font-bold md:font-semibold font-normal md:text-[0.9rem] lg:text-base text-[10px]">
        ${odata.atomicNumber}
        </div>
        <div class="lg:text-[1.4rem] lg:font-semibold md:text-[1.1rem] md:font-semibold text-[0.7rem]">
        ${odata.symbol}
        </div>
        <div class=" text-[0.6rem] px-0.5  hidden">${odata.name}</div>
    `;
  // console.log(pdiv);
  div1.appendChild(pdiv);
  //   console.log(pdiv);
}

async function createBox2(odata, atNo) {
  const pdiv = document.createElement("div");
  pdiv.className = `sinBox w-full h-full text-center box md:hover:scale-[1.18] hover:transition-all hover:duration-200 transition-all duration-200 cursor-pointer select-none md:active:scale-110 active:transition-all active:duration-200 hover:z-10 bg-gray-200 border border-black`;
  const obToSt = JSON.stringify(odata);
  // pdiv.setAttribute("onclick", `doOperation(${obToSt})`);

  if ((atNo === 56) | (atNo === 88)) {
    pdiv.classList.add("emp", "g11");
    pdiv.classList.remove("sinBox");
    pdiv.innerHTML = `<div class="text-[0.9rem] md:text-[1rem] lg:text-[1.4rem]">*</div>`;
    div2.appendChild(pdiv);
    return;
  }
  if ((atNo === 54) | (atNo === 55) | (atNo === 86) | (atNo === 87)) {
    pdiv.classList.add("emp");
    pdiv.classList.remove("sinBox");
    div2.appendChild(pdiv);
    return;
  }
  pdiv.setAttribute("data", `${obToSt}`);

  pdiv.innerHTML = `
        <div class="lg:font-bold md:font-semibold font-normal md:text-[0.9rem] lg:text-base text-[10px]">
        ${odata.atomicNumber}
        </div>
        <div class="lg:text-[1.4rem] lg:font-semibold md:text-[1.1rem] md:font-semibold text-[0.7rem]">
        ${odata.symbol}
        </div>
        <div class=" text-[0.6rem] px-0.5  hidden md:hidden ">${odata.name}</div>
      `;
  div2.appendChild(pdiv);
  //   console.log(pdiv);
}
function createg5() {
  // const odata = await getRandomData();
  const pdiv = document.createElement("div");
  pdiv.className = `w-full h-full gpr1`;
  pdiv.innerHTML = `
  <div class="grid grid-rows-3">
  <ul class="my-auto">
    <div class="flex justify-center gap-1 md:gap-5">
      <!-- 1 -->

      <h3
        class="diffText hidde my-auto text-[0.65rem] lg:text-lg md:text-base"
      >
        Difficulty :
      </h3>

      <!-- 2 -->

      <select
        class="hidde my-auto outline-none bg-transparent border-b-2 border-[rgb(73,145,204)] md:px-2 md:py-1 text-center text-[0.65rem] lg:text-lg md:text-base"
        name="selectDifficulty"
        id="selectDifficulty"
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <!-- 3 -->

      <div class="flex gap-0.5 md:gap-1 ">
        <button
          class="playBtn hidde my-auto px-2 md:p-0.5 lg:p-1 md:px-4 lg:px-6 text-white text-[0.65rem] lg:text-lg md:text-base bg-gradient-to-tr from-blue-300 to-blue-600 rounded-md md:rounded-lg border-2 border-gray-500 transition duration-200 hover:border-2 hover:border-blue-700 hover:scale-[1.03] hover:transition-all hover:duration-200 active:scale-[1] shadowo1 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-300"
        >
          Play
        </button>

        <!-- 4 -->

        <button
          class="quitBtn hidden my-auto px-2 md:p-0.5 lg:p-1 md:px-4 lg:px-6 text-white text-[0.65rem] lg:text-lg md:text-base bg-gradient-to-tr from-blue-300 to-blue-600 rounded-md md:rounded-lg border-2 border-gray-500 transition duration-200 hover:border-2 hover:border-blue-700 hover:scale-[1.03] hover:transition-all hover:duration-200 active:scale-[1] shadowo1 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-300"
        >
          Quit
        </button>

        <!-- 5 -->

        <button
          class="pyAgBtn hidden my-auto px-0.5 md:p-0.5 lg:p-1 md:px-4 lg:px-6 text-white text-[0.65rem] lg:text-lg md:text-base bg-gradient-to-tr from-blue-300 to-blue-600 rounded-md md:rounded-lg border-2 border-gray-500 transition duration-200 hover:border-2 hover:border-blue-700 hover:scale-[1.03] hover:transition-all hover:duration-200 active:scale-[1] shadowo1 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-300"
        >
          Play Again
        </button>

        <!-- 6 -->

        <div class="my-auto flex flex-col relative">
          <button class="text-[7px] md:text-base text-cyan-500 peer">
            <i
              class="border-2 border-gray-400 rounded-full fa-solid fa-circle-info hover:border-2 hover:border-red-400"
            ></i>
          </button>
          <div
            class="scale-0 absolute top-[100%] -left-[20vw] md:-left-[12vw] p-1 transition-all duration-200 peer-hover:transition-all peer-hover:duration-200 hover:scale-100 peer-hover:scale-100 bg-[rgba(3,3,3,0.8)] text-center text-yellow-400 text-xs w-[40vw] md:w-[25vw]"
          >
            <p>How to Play :</p>
            <p class="">
              An Element Name is Shown, Incorrect Guesses
              <span class="text-[red]">Decrease 50 Pts</span>. while
              Correct Guesses
              <span class="text-[#86ff41]">Increases 100 Pts</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </ul>

  <!-- 2 -->
  <div class="row-span-2 flex justify-center items-center">
    <div class="playBox hidden w-fit h-fit flex flex-col items-center">
      <div
        class=" bg-white py-0.5 px-3 md:p-1 md:px-3 lg:px-5 lg:p-2 w-full text-center rounded-t-lg shadow-sm shadow-black lg:text-lg md:text-base text-xs font-medium"
      >
        <h3 class="hidden highScore">
          <span class="">Highscore : </span
          ><span class="text-[blue] font-bold">0</span>
        </h3>
        <h3 class="hidde ranEleText text-violet-500 lg:text-lg md:text-base text-xs font-semibold">
          Hydrogen
        </h3>
      </div>
      <div
        class="bg-gray-300 py-0.5 px-3 md:p-1 md:px-3 lg:px-5 lg:p-2 w-full text-center rounded-b-lg shadow-sm shadow-black lg:text-lg md:text-base text-xs font-medium"
      >
        <h3>
          Score :
          <span class="score text-[blue] font-bold">0</span>
        </h3>
      </div>
    </div>
  </div>
</div>
  `;
  div1.appendChild(pdiv);
}
async function addBoxes1() {
  const datas = await getAllData();
  // console.log(datas[0].atomicNumber);
  for (let i = 0; i < 118; i++) {
    const atNo = datas[i].atomicNumber;
    if (atNo == 5) {
      createg5(datas[i]);
      await createBox1(datas[i], atNo);
    } else if (
      (atNo <= 57) |
      ((atNo >= 72) & (atNo <= 89)) |
      ((atNo >= 104) & (atNo <= 118))
    ) {
      await createBox1(datas[i], atNo);
    }
  }
  await addBoxes2();
  userOption();
}
addBoxes1();

async function addBoxes2() {
  const datas = await getAllData();
  for (let i = 53; i < 118; i++) {
    const atNo = datas[i].atomicNumber;
    if (((atNo >= 54) & (atNo <= 71)) | ((atNo >= 86) & (atNo <= 103))) {
      await createBox2(datas[i], atNo);
    }
  }
  loadpageSpin((spinNow = false));
}

function userOption() {
  const selectDifficulty = document.querySelector("#selectDifficulty");
  const divs = document.querySelectorAll(".sinBox");
  // console.log(divs);
  playGame(divs, selectDifficulty);
  selectDifficulty.addEventListener("change", () => {
    const sdValue = selectDifficulty.value;

    if (sdValue === "Easy") {
      divs.forEach((ele) => {
        // console.log(ele.children[0]);
        ele.children[0].classList.remove("text-transparent");
        ele.children[1].classList.remove("text-transparent");
      });
    } else if (sdValue === "Medium") {
      divs.forEach((ele) => {
        // console.log(ele.children[0]);
        ele.children[0].classList.remove("text-transparent");
        ele.children[1].classList.add("text-transparent");
      });
    } else if (sdValue === "Hard") {
      divs.forEach((ele) => {
        // console.log(ele.children[0]);
        ele.children[0].classList.add("text-transparent");
        ele.children[1].classList.add("text-transparent");
      });
    }
  });
}

async function playGame(divs, selectDifficulty) {
  const playBox = document.querySelector(".playBox");
  const playBtn = document.querySelector(".playBtn");
  const pyAgBtn = document.querySelector(".pyAgBtn");
  const diffText = document.querySelector(".diffText");
  const quitBtn = document.querySelector(".quitBtn");
  const score = document.querySelector(".score");
  const ranEleText = document.querySelector(".ranEleText");
  const highScore = document.querySelector(".highScore");
  const allDatas = await getAllData();

  // clickDiv(divs, ranEleText);

  // const sdValue = selectDifficulty.value;

  // Game Start

  playBtn.addEventListener("click", gameStart);

  async function gameStart() {
    setRandomName(allDatas, ranEleText);
    // console.log(allDatas);
    diffText.classList.add("hidden");
    playBtn.classList.add("hidden");
    pyAgBtn.classList.add("hidden");
    selectDifficulty.classList.add("hidden");
    quitBtn.classList.remove("hidden");
    playBox.classList.remove("hidden");
    ranEleText.classList.remove("hidden");
    highScore.classList.add("hidden");
    // console.log(ranEleText.innerText);
    checkKey = true;
    stop = false;
    score.innerText = 0;
    if (firstTime) clickDiv(divs, ranEleText, allDatas, score);
    firstTime = false;
  }
  // pyAgBtn.addEventListener("click", gameStart());

  // Game End
  quitBtn.addEventListener("click", () => {
    correctAns = [];
    diffText.classList.remove("hidden");
    playBtn.classList.remove("hidden");
    // pyAgBtn.classList. ("hidden");
    selectDifficulty.classList.remove("hidden");
    quitBtn.classList.add("hidden");
    stop = true;
    ranEleText.classList.add("hidden");
    highScore.classList.remove("hidden");
    var numScore = parseInt(score.innerText);
    setHighScore(numScore, highScore);
    divs.forEach((div) => {
      div.classList.remove("bg-green-500", "bg-red-500", "wrong", "correct");
      div.classList.add(
        "bg-gray-200",
        "md:hover:scale-[1.18]",
        "cursor-pointer",
        "md:active:scale-110"
      );
      div.children[2].classList.remove("lg:block");
    });
    if (!firstTime) {
      playBtn.classList.add("hidden");
      pyAgBtn.classList.remove("hidden");
      pyAgBtn.addEventListener("click", gameStart);
    }
  });
}

function doOperation(odata) {
  if (checkKey) {
    console.log(odata);
  }
}

function clickDiv(divs, ranEleText, allDatas, score) {
  try {
    if (checkKey) {
      divs.forEach((div) => {
        div.addEventListener("click", () => {
          var scrValue = parseInt(score.innerText);
          // console.log(div);
          if (
            !stop &
            !div.classList.contains("wrong") &
            !div.classList.contains("correct")
          ) {
            div.children[2].classList.add("lg:block");
            const dat = div.getAttribute("data");
            const datt = JSON.parse(dat);
            // console.log(datt.name);
            if (datt.name === ranEleText.innerText) {
              div.classList.remove("bg-gray-200");
              div.classList.add("bg-green-500");
              // gameStart();
              scrValue += 100;
              score.innerText = scrValue;
              setTextColor(score);
              // correctAns.push(div.children[0].innerText);
              setRandomName(allDatas, ranEleText);
              div.classList.remove(
                "md:hover:scale-[1.18]",
                "cursor-pointer",
                "md:active:scale-110"
              );
              div.classList.add("correct");
              // console.log(correctAns);
              crtDiv(divs);
            } else {
              div.children[2].classList.add("lg:block");
              scrValue -= 50;
              score.innerText = scrValue;
              setTextColor(score);
              div.classList.remove("bg-gray-200");
              div.classList.add("bg-red-500", "wrong");
              div.classList.remove(
                "md:hover:scale-[1.18]",
                "cursor-pointer",
                "md:active:scale-110"
              );
              // wrongAns.push(div);
              // console.log(wrongAns);
            }
          }
        });
      });
    }
    // console.log(wrongAns);
    // return;
  } catch (err) {
    console.log("Error");
  }
}

function crtDiv(divs) {
  divs.forEach((div) => {
    if (div.classList.contains("wrong")) {
      div.classList.remove("bg-red-500");
      // si.classList.remove("bg-green-500");
      div.classList.add(
        "bg-gray-200",
        "md:hover:scale-[1.18]",
        "cursor-pointer",
        "md:active:scale-110"
      );
      div.classList.remove("wrong");
      div.children[2].classList.remove("lg:block");
    }
  });
}

function setHighScore(numScore, highScore) {
  const oldScore = getHighScore();
  if (!oldScore) localStorage.setItem("highScore", numScore);
  if (numScore >= oldScore) localStorage.setItem("highScore", numScore);
  highScore.children[1].innerText = getHighScore();
  setTextColor(highScore.children[1]);
}

function getHighScore() {
  const oldScore = localStorage.getItem("highScore");
  return oldScore;
}

function setTextColor(textDiv) {
  var val = textDiv.innerText;
  if (val > 0) textDiv.style.color = "green";
  else if (val < 0) textDiv.style.color = "red";
  else textDiv.style.color = "blue";
}

async function setRandomName(allDatas, ranEleText) {
  let fixProblem = true;
  let randomNum = Math.floor(Math.random() * 118);
  let ranAnNo = randomNum + 1;
  // console.log(ranAnNo);
  correctAns.forEach((ansu) => {
    if (ranAnNo == ansu) {
      // console.log("Match");
      fixProblem = false;
    }
  });
  if (fixProblem) {
    const randomData = allDatas[randomNum];
    console.log(randomData.atomicNumber);
    ranEleText.innerText = `${randomData.name}`;
    correctAns.push(randomNum + 1);
    console.log(correctAns);
    return randomData.name;
  } else setRandomName(allDatas, ranEleText);
}
