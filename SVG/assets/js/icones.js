class Icones{
    constructor(){
        this.listaIcones = document.querySelectorAll('.icone');
    }

    animaIcones(){
        TweenMax.to(this.listaIcones, .5, {scale: .95, repeat: -1, yoyo: true})
    }
}

export{ Icones }