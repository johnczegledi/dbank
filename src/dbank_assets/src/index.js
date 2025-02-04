import { dbank } from "../../declarations/dbank"

window.addEventListener("load", async function () {
    const currentAmount = await dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();
    // console.log("Submitted");

    const button = event.target.querySelector("#submit-btn");

    update;

    button.setAttribute("disabled", true);

    if (document.getElementById("input-amount").value.length != 0) {
        await dbank.topUp(inputAmount);
    };

    if (document.getElementById("withdrawal-amount").value.length != 0) {
        await dbank.withDraw(outputAmount);
    };

    await dbank.compound();

    update;

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";

    button.removeAttribute("disabled");
});

async function update() {
    const currentAmount = await dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
};
