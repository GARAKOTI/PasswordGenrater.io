const passwordBox = document.querySelector("#passGen");

const capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallAlpha = "abcdefghijklmnopqrstuvwxyz";
const allNumber = "0123456789";
const spacialSymbol = "!@#$%^&*";
const length = 16;
const allCharSet = capAlpha + smallAlpha + spacialSymbol + allNumber;

function genratePassword() {
  let password = "";
  password += capAlpha[Math.floor(Math.random(capAlpha) * capAlpha.length)];
  password +=
    smallAlpha[Math.floor(Math.random(smallAlpha) * smallAlpha.length)];
  password += allNumber[Math.floor(Math.random(allNumber) * allNumber.length)];
  password +=
    spacialSymbol[
      Math.floor(Math.random(spacialSymbol) * spacialSymbol.length)
    ];

  while (length > password.length) {
    password +=
      allCharSet[Math.floor(Math.random(allCharSet) * allCharSet.length)];
  }

  passwordBox.value = password;
  console.log(passwordBox.value);
}

function copyPassword() {
  const copyPass = document.querySelector("#passGen");
  copyPass.select();
  document.execCommand("copy");
}
