// let rangeInp = document.querySelector(".psd-length input");
// let counter = document.querySelector(".psd-length .counter"),
//   inp = document.querySelector(".input-field input"),
//   btn = document.querySelector("button"),
//   opts = document.querySelectorAll(".opt input"),
//   icon = document.querySelector(".input-field i"),
//   strength = document.querySelector(".progress span"),
//   charcter = {
//     lowercase: "abcdefghijklmnopkrstvwxyz",
//     uppercase: "ABCDEFGHIJKLMNOPKRSTVWXYZ",
//     numbers: "0123456789",
//     symbols: "!§$%&/()?*'#<>",
//   };
// function upSlider() {
//   counter.innerText = rangeInp.value;
//   genetratePassword();
//   upstrength();
// }
// function upstrength() {
//   strength.className =
//     rangeInp.value <= 8 ? "weak" : rangeInp.value <= 16 ? "medium" : "strong";
// }
// function genetratePassword() {
//   let staticPassword = "",
//     randomPassword = "",
//     sliderLength = rangeInp.value,
//     excDuplicate = false;
//   opts.forEach((opt) => {
//     if (opt.checked) {
//       if (opt.id !== "exc-duplicate" && opt.id !== "spaces") {
//         staticPassword += charcter[opt.id];
//       } else if (opt.id == "sapaces") {
//         staticPassword = ` ${staticPassword} `;
//       } else {
//         excDuplicate = true;
//       }
//     }
//   });
//   for (let i = 0; i < sliderLength; i++) {
//     randomChar =
//       staticPassword[Math.floor(Math.random() * staticPassword.length)];
//     if (excDuplicate) {
//       !randomPassword.includes(randomChar) || randomChar == " "
//         ? (randomPassword += randomChar)
//         : i--;
//     } else {
//       randomPassword += randomChar;
//     }
//   }
//   inp.value = randomPassword;
// }
// function copyPassord() {
//   navigator.clipboard.writeText(inp.value)
//   icon.className = "fa fa-check checked"
//   setTimeout(() => {
//     icon.className = "fa fa-copy"
//   },1500)
// }
// icon.addEventListener("click", copyPassord);
// btn.addEventListener("click", genetratePassword);
// rangeInp.addEventListener("input", upSlider);
// let num = 2.9
// console.log(Math.floor(Math.random()))
// console.log(Math.random())
// console.log(Math.random())
// -------------------------------------repeat * 2
// let rangeInp = document.querySelector(".psd-length input");
// let counter = document.querySelector(".psd-length .counter");
// let button = document.querySelector("button"),
// strength = document.querySelector(".progress span"),
//   opts = document.querySelectorAll(".opt input"),
//   inp = document.querySelector(".input-field input"),
//   icon = document.querySelector(".input-field i"),
//   charcter = {
//     lowercase: "abcdefghijklmnopkrstvwxyz",
//     uppercase: "ABCDEFGHIJKLMNOPKRSTVWXYZ",
//     numbers: "0123456789",
//     symbols: "!§$%&/()?*'#<>",
//   };
// function updateCounter() {
//   counter.innerText = rangeInp.value;
//   generatePassword();
//   updatestrength();
// }
// function updatestrength() {
//   strength.className = rangeInp.value <= 8 ? "weak" : rangeInp.value <= 16 ? "medium" : "strong" ;
// }
// function generatePassword() {
//   let staticPassword = "";
//   let randomPassword = "",
//     excDuplicate = false;
//   opts.forEach((opt) => {
//     if (opt.checked) {
//       if (opt.id !== "spaces" && opt.id !== "exc-duplicate") {
//         staticPassword += charcter[opt.id];
//       } else if (opt.id == "sapaces") {
//         staticPassword = ` ${staticPassword} `;
//       } else {
//         excDuplicate = true;
//       }
//     }
//   });
//   for (let i = 0; i < rangeInp.value; i++) {
//     randomChar =
//       staticPassword[Math.floor(Math.random() * staticPassword.length)];
//     if (excDuplicate) {
//       !randomPassword.includes(randomChar) || randomChar === " "
//         ? (randomPassword += randomChar)
//         : i--;
//     } else {
//       randomPassword += randomChar;
//     }
//   }
//   inp.value = randomPassword;
// }
// function copyPassord() {
//   navigator.clipboard.writeText(inp.value)
//   icon.className = "fa fa-check checked"
//   setTimeout(() => {
//     icon.className = "fa fa-copy"
//   },1500)
// }
// icon.addEventListener("click", copyPassord);
// rangeInp.addEventListener("input", updateCounter);
// button.addEventListener("click", generatePassword);
// ------------------------------------repeat * 3
let rangeInp = document.querySelector(".psd-length input");
let icon = document.querySelector(".input-field i"),
  counter = document.querySelector(".psd-length .counter");
(opts = document.querySelectorAll(".opt input")),
  (btn = document.querySelector("button")),
  (strength = document.querySelector(".progress span")),
  (inp = document.querySelector(".input-field input")),
  (charcter = {
    lowercase: "abcdefghijklmnopkrstvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPKRSTVWXYZ",
    numbers: "0123456789",
    symbols: "!§$%&/()?*'#<>",
  });
  // let keys = Object.keys(charcter)
  // console.log(keys[3])
function updateCounter() {
  counter.innerText = rangeInp.value;
  generatePassword();
  updateStrength();
}
function updateStrength() {
  strength.className =
    rangeInp.value <= 8 ? "weak" : rangeInp.value <= 16 ? "medium" : "strong";
}
function generatePassword() {
  let randomPassword = "",
    staticPassword = "",
    excDuplicate = false;
  opts.forEach((opt) => {
    if (opt.checked) {
      if (opt.id !== "spaces" && opt.id !== "exc-duplicate") {
        staticPassword += charcter[opt.id];
      } else if (opt.id === "spaces") {
        staticPassword = ` ${staticPassword} `;
      } else {
        excDuplicate = true;
      }
    }
  });
  for (let i = 0; i < rangeInp.value; i++) {
    randomchar =
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (excDuplicate) {
      !randomPassword.includes(randomchar) || randomchar === " "
        ? (randomPassword += randomchar)
        : i--;
    } else {
      randomPassword += randomchar;
    }
  }
  inp.value = randomPassword;
}
function copyPassword() {
  navigator.clipboard.writeText(inp.value);
  icon.className = "fa fa-check checked";
  setTimeout(() => {
    icon.className = "fa fa-copy";
  }, 1500);
}
icon.addEventListener("click", copyPassword);
btn.addEventListener("click", generatePassword);
rangeInp.addEventListener("input", updateCounter);
