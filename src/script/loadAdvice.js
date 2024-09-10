export async function adviceGenerator(){
    const advice =await fetchAdvice();
    const adviceContainer = document.querySelector("#adviceContainer");
    adviceContainer.innerText = advice.slip.advice;

    const adviceId = document.querySelector("#adviceId");
    adviceId.innerText = advice.slip.id;
}


async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    return await response.json();
}

window.addEventListener("load", adviceGenerator)