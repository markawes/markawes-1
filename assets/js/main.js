for (let element of document.querySelector('#social').querySelectorAll('div')) {
    element.onmouseenter = _ => {
        element.querySelector('img').src = element.querySelector('img').src.replace(/\.svg/g, '-filled.svg')
        document.getElementById('site').innerHTML = element.id
        document.getElementById('icon').innerHTML = `<img src="assets/images/${element.id.toLowerCase()}-filled.svg" />`
        if (element.classList.contains('before')) document.documentElement.style.setProperty('--before', 1)
        if (element.classList.contains('after')) document.documentElement.style.setProperty('--after', 1)
        document.documentElement.style.setProperty('--primary', element.getAttribute('color'))
        document.querySelector('div[background]').style.opacity = 1
        document.querySelector('footer').style.opacity = 1
    }
    element.onmouseleave = _ => {
        element.querySelector('img').src = element.querySelector('img').src.replace(/-filled\.svg/g, '.svg')
        document.documentElement.style.setProperty('--before', 0)
        document.documentElement.style.setProperty('--after', 0)
        document.querySelector('div[background]').style.opacity = 0
        document.querySelector('footer').style.opacity = 0
        setTimeout((styles = document.documentElement.style) => styles.getPropertyValue('--primary') === element.getAttribute('color') ? styles.removeProperty('--primary') : void 0, 400)
    }
}

const locale = new Date()

setInterval(_ => {
    document.getElementById('global').innerHTML = new Date().toLocaleTimeString()
    document.getElementById('local').innerHTML = normalize((new Date().getTime() - locale.getTime()))
}, 1000)

function normalize(ms, short, sec = (ms / 1000).toFixed(0), min = Math.floor(sec / 60), hrs = min > 59 ? Math.floor(min / 60) : 0, result = []) {
    min = min - hrs * 60
    sec = Math.floor(sec % 60)
    hrs ? result.push(`${hrs} Hour${hrs === 1 ? '' : 's'}`) : void 0
    min ? result.push(`${min} Minute${min === 1 ? '' : 's'}`) : void 0
    sec ? result.push(`${min ? 'and ' : ''} ${sec} Second${sec === 1 ? '' : 's'}`) : void 0
    return short ? (result[0] ?? '0 seconds') : result.join(' ')
}

document.getElementById('avatar').onmouseenter = _ => document.getElementById('time').style.opacity = 1
document.getElementById('avatar').onmouseleave = _ => document.getElementById('time').style.opacity = 0
document.getElementById('avatar').ondblclick = _ => {
    const pfp = document.getElementById('avatar')
    pfp.style.background = 'url(assets/images/pfp-replace.gif) no-repeat'
    pfp.style.backgroundSize = 'cover'
    pfp.style.backgroundPosition = 'center'
    document.querySelector('audio').play()
}