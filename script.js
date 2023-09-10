let typeScroll = 0,
	topAuto = 0,
	stop = true,
	first = false;

let scip = false;
let scipR = false;

window.onload = () => {
	window.scrollTo(0, 1)

	let select = confirm("Використати автоматичний показ презентації?")

	if(select)
	{
		typeScroll = 1
		update()
	}

}

document.addEventListener('keydown', (e) => {

    if (e.code == 'Space') {
		stop = (stop == true) ? false : true;
		console.log(stop)
    }
    if (e.code == 'KeyR') {
		window.scrollTo(0, 1)
		topAuto = 0;
		console.log("q")
    }
    if(e.code == "ArrowLeft")
    {
        scip = true;
    }
    if(e.code == "ArrowRight")
    {
        scipR = true;
    }
    console.log(e.code)

});

function resetFrames()
{
	topAuto = topAuto += 0.7
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

function autoScroll()
{

	if(typeScroll == 1 && stop == false)
	{
	    if(scip == true)
	    {
	        topAuto -= 15.5;
	        scip = false;
	    }
	    if(scipR == true)
	    {
	        topAuto += 15.5;
	        scipR = false;
	    }

		topAuto = topAuto += 0.8
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
}

function update()
{
    autoScroll()
    window.requestAnimationFrame(update)
}

let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	if(typeScroll == 0)
	{
		let top = document.documentElement.scrollTop,
				delta = lastPos - top

		lastPos = top

		frames.forEach(function(n, i) {
			zVals.push((i * zSpacing) + zSpacing)
			zVals[i] += delta * -5.5
			let frame = frames[i],
					transform = `translateZ(${zVals[i]}px)`,
					opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
			frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
		})
	}
}

setTimeout(() => {

	window.scrollTo(0, 1)
	resetFrames()
	console.log("q")

}, 3000)