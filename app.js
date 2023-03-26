const notifContainer = document.querySelector(".notifContainer");
const button = document.getElementById("button");

const notification = [
    "Instagram Bildirim",
    "Twitter Bildirim",
    "Youtube Bildirim",
    "Medium Bildirim",
    "LinkedIn Bildirim",
    "Github Bildirim",
];

const colors = ["red", "rebeccapurple", "black", "gray", "green", "blue"];
button.addEventListener("click", () => creatNotification())
function creatNotification() {
    const notif = document.createElement("div")
    notif.classList.add("notif")
    notif.classList.add(getRandomColor())

    notif.innerText = getRandomNotif()
    notifContainer.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomNotif() {
    return notification[Math.floor(Math.random() * notification.length)]
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}