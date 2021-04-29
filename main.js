let prevX = 0
let prevY = 0
let diff = 0

let mouseEvent

document.getElementById("page-wrapper").addEventListener('mousemove', (e) => {
    mouseEvent = e
})

setInterval(() => {
    let fakeCursor = document.getElementById("fake-cursor")
    fakeCursor.style.left = `${mouseEvent.screenX - 50}px`
    fakeCursor.style.top = `${mouseEvent.screenY - 115}px`
    diff = Math.sqrt((mouseEvent.screenX - prevX) ** 2 + (mouseEvent.screenY - prevY) ** 2) * 5
    prevX = mouseEvent.screenX
    prevY = mouseEvent.screenY
}, 1000 / 120)

let hue = 0

setInterval(() => {
    hue += 1

    for (let el of document.getElementsByClassName('light-bar')) {
        el.style.background = `linear-gradient(60deg, hsla(${hue}, 100%, 80%, 0.0), hsl(${hue + 90}, 100%, 50%), hsl(${hue + 210}, 100%, 50%))`
    }


}, 1000 / 60)

let actualRadius = 0

function render() {
    let canvas = document.getElementById("fake-cursor")
    let context = canvas.getContext('2d')
    context.clearRect(0, 0, 100, 100)
    let grad = context.createLinearGradient(0, 0, 100, 100)
    grad.addColorStop(0, `hsl(${hue},100%,50%)`)
    grad.addColorStop(1, `hsl(${hue + 180},100%,50%)`)
    context.lineWidth = 2.5
    context.beginPath()
    let radius = Math.min(diff, 40)
    radius = Math.max(radius, 5)
    radius = 50 - radius
    actualRadius += actualRadius < radius ? 1 : -1
    context.arc(50, 50, actualRadius, 0, 2 * Math.PI)
    context.strokeStyle = grad
    context.stroke()
    requestAnimationFrame(() => render())
}

requestAnimationFrame(() => render())

let helloText = "Hello, I am Hai"

setInterval(() => {
    let el = document.getElementById('hello-text')
    if (helloText.length > 0) {
        let span = document.createElement('span')
        span.innerHTML = helloText[0]
        el.appendChild(span)
    }
    helloText = helloText.slice(1)
}, 200)

setTimeout(() => {
    helloText = "It all starts with a dream";
    document.getElementById('hello-text').innerHTML = ''
    document.getElementById('hello-text-desc').style.display = 'none'
}, 7000)

setTimeout(() => {
    document.getElementById('hello-text').innerHTML = 'It all starts with <span style="color: red;margin-right: 0.3em">passion</span>'
    document.getElementById('hello-text-desc').innerHTML = 'ALWAYS SAY NO TO GIVING UP. JUST BE READY TO STAND UP AND FIGHT FOR THE TRUE PATHWAY TO SUCCESS.'
    document.getElementById('hello-text-desc').style.display = 'inline'
}, 13000)