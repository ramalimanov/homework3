
var capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowChar = "abcdefghijklmnopqrstuvwxzy";
var numChar = "1234567890";
var specChar = "~!@#$%^&*()_+{}|[];:'/?><,.`";

var passGenBtn = document.querySelector("#passGen");
var copyClipBtn = document.querySelector("#copyClip");
var passGenBtnPhone = document.querySelector("#passGenPhone");
var copyClipBtnPhone = document.querySelector("#copyClipPhone");

passGenBtn.addEventListener("click", passIntro);
copyClipBtn.addEventListener("click", screenShot);
passGenBtnPhone.addEventListener("click", passIntro);
copyClipBtnPhone.addEventListener("click", screenShot);


function followDirections() {
    document.querySelector("#passwordForm").textContent = "";
    document.querySelector("#passwordForm").textContent = "1C4ntf0LL0wD1rect10ns!";
}
function itsASpy() {
    document.body.style.display = "none";
}

function passIntro() {
    var newPass = "";
    var newPassArray = [];
    var newPassGen = "";
    var passLength = 0;
    var i = 0;

    var myWindows = 0;

    passLength = prompt("Type a number between 8 and 128.");
    if (passLength >= 8 && passLength <= 128) {
        var addCaps = confirm("");
        if (addCaps === true) {
            var addLower = confirm("");
            if (addLower === true) {
                var addNum = confirm("");
                if (addNum === true) {
                    var addSym = confirm("");
                    if (addSym === true) {
                        alert("");

                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + capChar + lowChar + numChar + specChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regAaoneSpec));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("")
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + capChar + lowChar + numChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regAaone));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
                else {
                    var addSym = confirm("");
                    if (addSym === true) {
                        alert("")
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + capChar + lowChar + specChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regAaSpec));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("");
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + capChar + lowChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regAa));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
            }
            else {
                var addNum = confirm("");
                if (addNum == true) {
                    var addSym = confirm("");
                    if (addSym === true) {
                        alert("");
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + capChar + numChar + specChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regAoneSpec));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("");
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + capChar + numChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regAone));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
                else {
                    var addSym = confirm("");
                    if (addSym === true) {
                        alert("")
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + capChar + specChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regASpec));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("");
                        newPass = newPass + capChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++) {
                            newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                        }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
            }
        }

        else {
            var addLower = confirm("");
            if (addLower === true) {
                var addNum = confirm("");
                if (addNum === true) {
                    var addSym = confirm("");
                    if (addSym === true) {
                        alert("");
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + lowChar + numChar + specChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regaoneSpec));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        myWindows = prompt("");
                        if (myWindows > 97 && myWindows < 99) {
                            alert("");
                            document.body.style.display = "none";
                        }
                        else {
                            alert("");
                            do {
                                var newPass = "";
                                var i = 0;
                                var newPassGen = "";
                                newPass = newPass + lowChar + numChar;
                                newPassArray = newPass.split("");
                                for (i = 0; i < passLength; i++) {
                                    newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                                }
                            }
                            while (!newPassGen.match(regaone));
                            document.querySelector("#passwordForm").textContent = "";
                            document.querySelector("#passwordForm").textContent = newPassGen;
                        }
                    }
                }
                else {
                    var addSym = confirm("");
                    if (addSym === true) {
                        alert("");
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + lowChar + specChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regaSpec));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("");
                        newPass = newPass + lowChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++) {
                            newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                        }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
            }

            else {
                var addNum = confirm("");
                if (addNum === true) {
                    var addSym = confirm("");
                    if (addSym === true) {
                        alert("");
                        do {
                            var newPass = "";
                            var i = 0;
                            var newPassGen = "";
                            newPass = newPass + numChar + specChar;
                            newPassArray = newPass.split("");
                            for (i = 0; i < passLength; i++) {
                                newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                            }
                        }
                        while (!newPassGen.match(regoneSpec));
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("");
                        newPass = newPass + numChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++) {
                            newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                        }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }

                else {
                    var addSym = confirm("");
                    if (addSym === true) {
                        alert("");
                        newPass = specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++) {
                            newPassGen += newPassArray[Math.floor(Math.random() * newPassArray.length)];
                        }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        newPassGen = prompt("");
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = "";
                    }
                }
            }
        }
    }

    else {
        alert("PLease try again")
        followDirections();
    }
}
function screenShot() {
    document.body.style.display = "none";
    setTimeout(function () {
        (document.body.style.display = "initial");
    }, 100);
    setTimeout(function () {
        (copyPass());
    }, 500);
}

function copyPass() {
    var copyPass = "";
    copyPass = document.getElementById("passwordForm");
    copyPass.select();
    document.execCommand('copy');
    
}