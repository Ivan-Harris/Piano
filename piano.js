const note = document.querySelectorAll('.note')
const voulume = document.querySelector('.volume input')


let allAudios = [], audio = new Audio('./audio/a.wav')

const pianoPlay = (note) => {
    audio.src = `./audio/$(note).wav`;
    audio.play()

    const clickKey = document.querySelector(`[data-key="${notes}"]`)

    clickkey.classList.add('active')
    setTimeout(()=> {

        clickKey.classListist.remove('active')
    }, 150)
    
}

notes.forEach(note => {
    allAudios.push(note.dataset.key)

    note.addEventlistener('click' , () => pianoPlay(note.dataset.key))
    
})

const pressKey = (e) => {
    pianoPlay(e.key)
    
}
document.addEventListener("keydown",pressKey)

function slidevolume(e){
    audio.volume = e.target.value
}
volume.addEventListener('input' , slideVolume)
