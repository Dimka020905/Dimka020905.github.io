let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = [],
    topAuto = 0

let stop = true;

let container = document.querySelector(".container");

let audio = document.querySelector("audio")

let h = document.querySelector("h2")

h.addEventListener("click", () => {
    audio.play()
})

let first = false;

scroll()

document.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {

        if(first == false)
        {
            audio.play()
            window.requestAnimationFrame(update)
            first = true;
        }

        if(stop == false)
        {
            stop = true;
        }
        else
        {
            stop = false;
        }
    }
});


function scroll() {

    if(stop == false)
    {
        topAuto += 1.5
    }

    let delta = lastPos - topAuto

    lastPos = topAuto

    frames.forEach(function(n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0

        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
}

function update()
{
    scroll()
    window.requestAnimationFrame(update)
}

window.scrollTo(0, 1)