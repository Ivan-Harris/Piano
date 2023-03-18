const note = document.querySelectorAll('.note')
const voulume = document.querySelector('.volume input')


let allAudios = [], audio = new Audio('./audio/a.wav')

const pianoPlay = (note) => {
    audio.src = `./audio/$(note).wav`;
    audio.play()

    const clickkey = document.querySelector(`[data-key="${notes}]`)

    clickkey.classList.add('active')
    setTimeout(()=> {

        clickkey.classListist.remove('active')
    }, 150)
    
}

notes.forEach(note => {
    allAudios.push(note.dataset.key)

    note.addEventlistener('click' , () => pianoPlay(note.dataset.key))
    
})

const presskey = (e) => {
    pianoPlay(e.key)
    
}
document.addEventListener("keydown",presskey)

function slidevolume(e){
    audio.volume = e.target.value
}
volume.addEventListener('input' , slideVolume)
