const left = document.getElementById("left");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

const arrow = document.getElementById("arrow");
const circle = document.getElementById("circle");

const art = [
    "starrynight.jpg",
    "kahlo.jpg"
];
const artTitle = [
    "Starry Night",
    "Self-Portrait with Thorn Necklace and Hummingbird"
];
const artDescs = [
    "This piece was created in 1889 by Vincent van Gogh. It was painted during his stay at an asylum during his blue period.",
    "This piece was created in 1940 by Frida Kahlo. It depicts large green leaves and Frida herself."
];

let index = 0;
function presentArt()
{
    left.style.backgroundImage = `url("${art[index]}")`;
    title.textContent = artTitle[index];
    desc.textContent = artDescs[index];
}
presentArt();

arrow.addEventListener("click", () =>
{
    growCircle().then(() =>
    {
        // set new
        index = (index + 1 === art.length) ? 0 : index + 1;
        presentArt();
        shrinkCircle();
    });
});

function growCircle()
{
    return new Promise(resolve =>
    {
        circle.style.transform = "scale(5)";

        setTimeout(() =>
        {
            resolve();
        }, 500);
    });
}

function shrinkCircle()
{
    circle.style.transform = "scale(0)";
}