class Footer{
    constructor(){
        this.filtroTurbulencia = document.getElementById('filtro-turbulencia');
    }

    efeitoOnda(){
        TweenMax.to(this.filtroTurbulencia, 18, {
            attr: {baseFrequency: 0.03},
            repeat: -1, 
            yoyo: true
        })
    }
}

export { Footer }