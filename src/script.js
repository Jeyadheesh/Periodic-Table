const loadingPage = document.querySelector(".loadingPage");
loadpageSpin((spinNow = true));
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const srchEle = document.querySelector(".srchEle");
const srchBtn = document.querySelector(".srchBtn");
const srchInp = document.querySelector("#srchInp");
const searchOption1 = document.getElementById("searchOption1");
const searchOption2 = document.querySelector("#searchOption2");
const searchOption3 = document.querySelector("#searchOption3");
const para = document.querySelector(".para");
const eleInfo = document.querySelector(".eleInfo");
const homeBtn = document.querySelector(".homeBtn");
const gameBtn = document.querySelector(".gameBtn");
const srchBlk = document.querySelector(".srchBlk");
const spinner = document.querySelector("#spinner");

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

function createg5() {
  const pdiv = document.createElement("div");
  pdiv.className = `w-full h-full gpr`;
  pdiv.innerHTML = `<ul
  class="hidden md:grid lg:grid md:grid-cols-2 md:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 lg:mx-auto md:mx-auto items-center gap-x-5"
>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-[yellow] my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">Non Metals</h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-[red] my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">Alkali Metals</h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-[rgb(26,45,216)] my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">
      Alkaline Earth Metals
    </h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-cyan-500 my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">Transitional Metals</h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-green-600 my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">
      Metals
    </h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-[orange] my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">Noble Gases</h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-[cyan] my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">Lanthanide</h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-blue-300 my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">Actinide</h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-rose-400 my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">
      Post-Transition Metals
    </h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-violet-500 my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">Halogen</h1>
  </li>
  <li class="flex">
    <span
      class="border-2 border-black lg:px-2 lg:mr-2 md:p-1 md:mr-1 md:h-3 lg:h-4 bg-lime-400 my-auto"
    ></span>
    <h1 class="lg:text-md md:text-xs text-sm">Metalloid</h1>
  </li>
</ul>`;
  div1.appendChild(pdiv);
}

async function createBox1(odata, atNo) {
  const pdiv = document.createElement("div");
  pdiv.className = `w-full h-full text-center box hover:scale-[1.18] hover:transition-all hover:duration-200 transition-all duration-200 cursor-pointer select-none active:scale-110 active:transition-all active:duration-200 hover:z-10 `;
  const obToSt = JSON.stringify(odata);
  pdiv.setAttribute("onclick", `dispEleInfo(${obToSt})`);
  if (atNo === 2) {
    pdiv.classList.add("g2");
  }
  if ((atNo === 57) | (atNo === 89)) {
    pdiv.classList.add("emp");
    pdiv.innerHTML = `<div class="text-[0.9rem] md:text-[1rem] lg:text-[1.4rem]">*</div>`;
    div1.appendChild(pdiv);
    return;
  }
  setColor(odata, pdiv);
  pdiv.innerHTML = `
      <div class="lg:font-bold md:font-semibold font-normal md:text-[0.9rem] lg:text-base text-[10px]">
      ${odata.atomicNumber}
      </div>
      <div class="lg:text-[1.4rem] lg:font-semibold md:text-[1.1rem] md:font-semibold text-[0.7rem]">
      ${odata.symbol}
      </div>
      <div class="text-[0.6rem] px-0.5 lg:block hidden">
      ${odata.name}
      </div>
  `;
  div1.appendChild(pdiv);
}

async function createBox2(odata, atNo) {
  const pdiv = document.createElement("div");
  pdiv.className = `w-full h-full text-center box hover:scale-[1.18] hover:transition-all hover:duration-200 transition-all duration-200 cursor-pointer select-none active:scale-110 active:transition-all active:duration-200 hover:z-10 `;
  const obToSt = JSON.stringify(odata);
  pdiv.setAttribute("onclick", `dispEleInfo(${obToSt})`);

  if ((atNo === 56) | (atNo === 88)) {
    pdiv.classList.add("emp", "g11");
    pdiv.innerHTML = `<div class="text-[0.9rem] md:text-[1rem] lg:text-[1.4rem]">*</div>`;
    div2.appendChild(pdiv);
    return;
  }
  if ((atNo === 54) | (atNo === 55) | (atNo === 86) | (atNo === 87)) {
    pdiv.classList.add("emp");
    div2.appendChild(pdiv);
    return;
  }
  setColor(odata, pdiv);
  pdiv.innerHTML = `
      <div class="lg:font-bold md:font-semibold font-normal md:text-[0.9rem] lg:text-base text-[10px]">
      ${odata.atomicNumber}
      </div>
      <div class="lg:text-[1.4rem] lg:font-semibold md:text-[1.1rem] md:font-semibold text-[0.7rem]">
      ${odata.symbol}
      </div>
      <div class="text-[0.6rem] px-0.5 lg:block hidden">
      ${odata.name}
      </div>
    `;
  div2.appendChild(pdiv);
  //   console.log(pdiv);
}

function setColor(odata, pdiv) {
  if (odata.groupBlock === "nonmetal") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-yellow-200",
      "via-yellow-200",
      "to-[yellow]"
    );
  } else if (odata.groupBlock === "alkali metal") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-red-400",
      "via-red-500",
      "to-[red]"
    );
  } else if (odata.groupBlock === "alkaline earth metal") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-blue-300",
      "via-blue-500",
      "to-blue-500"
    );
  } else if (odata.groupBlock === "transition metal") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-cyan-300",
      "via-cyan-400",
      "to-cyan-500"
    );
  } else if (odata.groupBlock === "metal") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-green-200",
      "via-green-400",
      "to-green-500"
    );
  } else if (odata.groupBlock === "metalloid") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-lime-200",
      "via-lime-400",
      "to-lime-400"
    );
  } else if (odata.groupBlock === "post-transition metal") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-pink-200",
      "via-pink-300",
      "to-pink-300"
    );
  } else if (odata.groupBlock === "halogen") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-violet-200",
      "via-violet-400",
      "to-violet-500"
    );
  } else if (odata.groupBlock === "noble gas") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-orange-300",
      "via-orange-400",
      "to-orange-400"
    );
  } else if (odata.groupBlock === "lanthanoid") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-cyan-200",
      "via-cyan-300",
      "to-cyan-400"
    );
  } else if (odata.groupBlock === "actinoid") {
    pdiv.classList.add(
      "bg-gradient-to-r",
      "from-sky-200",
      "via-sky-300",
      "to-sky-300"
    );
  }
}

async function addBoxes1() {
  const datas = await getAllData();
  console.log(datas[0].atomicNumber);
  for (let i = 0; i < 118; i++) {
    const atNo = datas[i].atomicNumber;
    if (atNo == 5) {
      createg5();
      await createBox1(datas[i], atNo);
    } else if (
      (atNo <= 57) |
      ((atNo >= 72) & (atNo <= 89)) |
      ((atNo >= 104) & (atNo <= 118))
    ) {
      await createBox1(datas[i], atNo);
    }
  }
}
addBoxes1();
addBoxes2();

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

//Search

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
// getDataByAN();

//Search Element Info

function createSrchEle(odata) {
  const pdiv = document.createElement("div");
  pdiv.className = `md:p-4 p-2 bg-white rounded-lg md:w-[70vw] w-full mx-auto`;
  const pdiv1 = document.createElement("div");
  pdiv1.className = `srchEleHead rounded-lg p-3 gap-3 shadow-sm shadow-black grid grid-cols-2 grid-rows-2 cursor-pointer hover:scale-[1.01] hover:transition-all hover:duration-200 transition-all duration-200 active:scale-[1]`;

  pdiv1.innerHTML = `
          <h1 class="  md:text-6xl text-3xl font-bold">${odata.symbol}</h1>
          <h2 class="  place-self-end md:text-3xl lg:text-4xl text-lg font-bold">
            ${odata.atomicNumber}
          </h2>
          <h3 class=" self-center   md:text-2xl text-lg font-bold">${odata.name}</h3>
          <h3 class=" self-center md:text-2xl justify-self-end text-[0.9rem] font-bold capitalize">
            ${odata.groupBlock}
          </h3>`;

  const pdiv2 = document.createElement("div");
  pdiv2.className = `hidden transition-all duration-300 srchEleTog grid mt-3 p-2 px-3 rounded-lg md:text-[0.9rem] lg:text-lg text-xs gap-y-2 shadow-sm shadow-black`;
  pdiv2.innerHTML = `
          <div class="flex justify-between">
            <h3>Atomic Mass</h3>
            <h3>${odata.atomicMass}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Electronic Configuration</h3>
            <h3>${odata.electronicConfiguration}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Electronegativity</h3>
            <h3>${odata.electronegativity}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Atomic Radius</h3>
            <h3>${odata.atomicRadius}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Ion Radius</h3>
            <h3>${odata.ionRadius}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Van Der Waals Radius</h3>
            <h3>${odata.vanDerWaalsRadius}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Ionization Energy</h3>
            <h3>${odata.ionizationEnergy}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Electron Affinity</h3>
            <h3>${odata.electronAffinity}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Oxidation States</h3>
            <h3>${odata.oxidationStates}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Standard State</h3>
            <h3>${odata.standardState}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Bonding Type</h3>
            <h3>${odata.bondingType}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Melting Point</h3>
            <h3>${odata.meltingPoint}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Boiling Point</h3>
            <h3>${odata.boilingPoint}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Density</h3>
            <h3>${odata.density}</h3>
          </div>
          <div class="flex justify-between">
            <h3>Year Discovered</h3>
            <h3>${odata.yearDiscovered}</h3>
          </div>`;
  srchEle.appendChild(pdiv);
  pdiv.appendChild(pdiv1);
  pdiv.appendChild(pdiv2);
  setColor(odata, pdiv1);
  setColor(odata, pdiv2);
}

function toggleFunction() {
  const srchEleHead = document.querySelectorAll(".srchEleHead");
  const srchEleTog = document.querySelectorAll(".srchEleTog");
  // console.log(srchEleHead);
  // console.log(srchEleTog);
  for (let i = 0; i < srchEleHead.length; i++) {
    const element1 = srchEleHead[i];
    const element2 = srchEleTog[i];
    element1.addEventListener("click", () => {
      // console.log(element);
      element2.classList.toggle("hidden");
    });
  }
}

srchInp.addEventListener("keyup", (e) => {
  if (e.key === "Enter") afterClick();
});

srchBtn.addEventListener("click", afterClick);

async function getDataByName(ename) {
  const data = await fetch(
    "https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=" +
      ename
  );
  const jsonData = await data.json();
  console.log(jsonData);
  if (jsonData.message != "does not exists") return jsonData;
}

async function getDataBySymbol(sym) {
  const data = await fetch(
    "https://neelpatel05.pythonanywhere.com/element/symbol?symbol=" + sym
  );
  const jsonData = await data.json();
  console.log(jsonData);
  if (jsonData.message != "does not exists") return jsonData;
}

async function getDataByState(sta) {
  const data = await fetch(
    "https://neelpatel05.pythonanywhere.com/element/state?state=" + sta
  );
  const jsonData = await data.json();
  console.log(jsonData);
  return jsonData;
}

async function getDataByBonType(btype) {
  const data = await fetch(
    "https://neelpatel05.pythonanywhere.com/element/bondingtype?bondingtype=" +
      btype
  );
  const jsonData = await data.json();
  console.log(jsonData);
  return jsonData;
}

searchOption1.addEventListener("change", () => {
  const srchOp1 = searchOption1.value;
  if (srchOp1 === "State") {
    searchOption3.parentElement.classList.add("hidden");
    searchOption2.parentElement.classList.remove("hidden");
    srchInp.parentElement.classList.add("hidden");
  } else if (srchOp1 === "Bonding Type") {
    searchOption2.parentElement.classList.add("hidden");
    searchOption3.parentElement.classList.remove("hidden");
    srchInp.parentElement.classList.add("hidden");
  } else if (
    (srchOp1 === "Atomic Number") |
    (srchOp1 === "Atomic Name") |
    (srchOp1 === "Symbol")
  ) {
    srchInp.placeholder = `Search by ${srchOp1}`;
    searchOption2.parentElement.classList.add("hidden");
    searchOption3.parentElement.classList.add("hidden");
    srchInp.parentElement.classList.remove("hidden");
  }
});

// Main
async function afterClick() {
  spin((crt = true));
  para.classList.add("hidden");
  srchEle.innerHTML = "";
  try {
    const srchOp1 = searchOption1.value;
    const srchOp2 = searchOption2.value;
    const srchOp3 = searchOption3.value;

    // console.log(srchOp3);
    if (srchOp1 === "Atomic Number" && srchInp.value) {
      // para.classList.add("hidden");
      const srchInput = srchInp.value;
      console.log(srchInput);
      const srchData = await getDataByAN(srchInput);
      createSrchEle(srchData);
      toggleFunction();
      spin((crt = false));
      srchBlk.scrollIntoView({
        behavior: "smooth",
      });
    }
    //
    else if (srchOp1 === "Atomic Name" && srchInp.value) {
      // para.classList.add("hidden");
      const srchInput = srchInp.value;
      const srchData = await getDataByName(srchInput);
      createSrchEle(srchData);
      toggleFunction();
      spin((crt = false));
      srchBlk.scrollIntoView({
        behavior: "smooth",
      });
    }
    //
    else if (srchOp1 === "Symbol" && srchInp.value) {
      // para.classList.add("hidden");
      const srchInput = srchInp.value;
      const srchData = await getDataBySymbol(srchInput);
      createSrchEle(srchData);
      toggleFunction();
      spin((crt = false));
      srchBlk.scrollIntoView({
        behavior: "smooth",
      });
    }
    //
    else if (srchOp1 === "State") {
      // para.classList.add("hidden");

      if (srchOp2 === "Solid") {
        var srchData = await getDataByState(srchOp2);
      } else if (srchOp2 === "Liquid") {
        var srchData = await getDataByState(srchOp2);
      } else if (srchOp2 === "Gas") {
        var srchData = await getDataByState(srchOp2);
      }
      srchData.forEach((element) => {
        createSrchEle(element);
      });
      toggleFunction();
      spin((crt = false));
      srchBlk.scrollIntoView({
        behavior: "smooth",
      });
    }
    //
    else if (srchOp1 === "Bonding Type") {
      // para.classList.add("hidden");

      if (srchOp3 === "Atomic") {
        var srchData = await getDataByBonType(srchOp3);
      } else if (srchOp3 === "Diatomic") {
        var srchData = await getDataByBonType(srchOp3);
      } else if (srchOp3 === "Covalent Network") {
        var srchData = await getDataByBonType(srchOp3);
      } else if (srchOp3 === "Metallic") {
        var srchData = await getDataByBonType(srchOp3);
      }
      srchData.forEach((element) => {
        createSrchEle(element);
      });
      toggleFunction();
      spin((crt = false));
      srchBlk.scrollIntoView({
        behavior: "smooth",
      });
    }
    //
    else {
      console.log("bye");
      para.children[0].innerHTML = `' ${srchInp.value} ' Is invalid Option`;
      para.classList.remove("hidden");
      para.classList.add("bg-[red]", "text-white");
      spin((crt = false));
    }
  } catch (err) {
    console.log(err);
    para.children[0].innerHTML = `' ${srchInp.value} ' Is invalid Option`;
    para.classList.remove("hidden");
    para.classList.add("bg-[red]", "text-white");
    spin((crt = false));
  }
}

function dispEleInfo(odata) {
  eleInfo.innerHTML = "";
  console.log(odata.name);
  eleInfo.classList.remove("hidden");
  const pdiv = document.createElement("div");
  pdiv.className = `w-full lg:w-[42vw] md:w-[50vw] mx-auto bg-white p-5 px-5 md:px-8 rounded-lg border-4 border-pink-600 relative`;

  const pdiv1 = document.createElement("div");
  pdiv1.className = `flex flex-col rounded-lg p-3 items-center gap-1.5 shadow-md shadow-black`;
  pdiv1.innerHTML = `
    <h3 class="font-bold text-lg">${odata.atomicNumber}</h3>
    <h3 class="text-3xl font-bold">${odata.symbol}</h3>
    <h3 class="font-semibold text-2xl">${odata.name}</h3>
    <h3 class="font-semibold">${odata.groupBlock}</h3>
  `;
  setColor(odata, pdiv1);
  const pdiv2 = document.createElement("div");
  pdiv2.className = `grid mt-3 p-2 px-5 rounded-lg md:text-sm lg:text-lg text-xs shadow-sm shadow-black mx-auto overflow-y-scroll h-[62vh]`;
  pdiv2.innerHTML = `
  <div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Atomic Mass</h3>
  <h3>${odata.atomicMass}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Electronic Configuration</h3>
  <h3>${odata.electronicConfiguration}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Electronegativity</h3>
  <h3>${odata.electronegativity}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Atomic Radius</h3>
  <h3>${odata.atomicRadius}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Ion Radius</h3>
  <h3>${odata.ionRadius}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Van Der Waals Radius</h3>
  <h3>${odata.vanDerWaalsRadius}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Ionization Energy</h3>
  <h3>${odata.ionizationEnergy}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Electron Affinity</h3>
  <h3>${odata.electronAffinity}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Oxidation States</h3>
  <h3>${odata.oxidationStates}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Standard State</h3>
  <h3>${odata.standardState}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Bonding Type</h3>
  <h3>${odata.bondingType}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Melting Point</h3>
  <h3>${odata.meltingPoint}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Boiling Point</h3>
  <h3>${odata.boilingPoint}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Density</h3>
  <h3>${odata.density}</h3>
</div>
<div
  class="flex justify-between hover:bg-gray-200 hover:font-semibold hover:scale-105 py-1 px-2 hover:transition-all hover:duration-200 transition-all duration-200 hover:shadow-md hover:shadow-gray-200"
>
  <h3>Year Discovered</h3>
  <h3>${odata.yearDiscovered}</h3>
</div>
  `;

  const pdiv3 = document.createElement("div");
  pdiv3.className = `absolute top-0 md:top-1 right-1`;
  pdiv3.innerHTML = `
    <button
      class="closeBtn text-lg md:text-[1.35rem] text-sky-600 hover:scale-[1.15] hover:transition-all hover:duration-200 transition-all duration-200 active:scale-[1]"
      >
        <i class="fa-solid fa-circle-xmark"></i>
    </button>
  `;

  pdiv.appendChild(pdiv1);
  pdiv.appendChild(pdiv2);
  pdiv.appendChild(pdiv3);
  eleInfo.appendChild(pdiv);

  const closeBtn = document.querySelector(".closeBtn");
  closeBtn.addEventListener("click", () => {
    eleInfo.classList.add("hidden");
  });
}

function spin(crt) {
  if (crt) spinner.classList.remove("hidden");
  else spinner.classList.add("hidden");
}
