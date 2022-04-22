const htmlSpan = document.querySelector(".html span");
const cssSpan = document.querySelector(".css span");
const javaScriptSpan = document.querySelector(".javascript span");
const pythonSpan = document.querySelector(".python span");
const reactSpan = document.querySelector(".react span");

const htmlProgress = "86%";
const cssProgress = "74%";
const javaScriptProgress = "65%";
const pythonProgress = "54%";
const reactProgress = "49%";

htmlSpan.innerText = htmlProgress;
cssSpan.innerText = cssProgress;
javaScriptSpan.innerText = javaScriptProgress;
pythonSpan.innerText = pythonProgress;
reactSpan.innerText = reactProgress;

const root = document.documentElement;

root.style.setProperty("--html-width", htmlProgress);
root.style.setProperty("--css-width", cssProgress);
root.style.setProperty("--javascript-width", javaScriptProgress);
root.style.setProperty("--python-width", pythonProgress);
root.style.setProperty("--react-width", reactProgress);
