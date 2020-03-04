var vueApp = new Vue({
    el: '#vueApp',
    data: {
        nombre: "Raul Capellan Fernandez",
        edad: "18",
        htmlCB: ["HTML1"],
        picked: 'female',
        colorB: '#5CA5BB',
        fecha: '2017-07-04',
        colorPD: "#5CD5BB",
        colorIZ: "gray",
        fraseColor: "Esta frase va a cambiar a rojo",
        fraseColoraux: false,
        check: false,
        counter: 0,
    }, 
    watch: {
        fecha: function (val) {
            var fechaN = new Date(this.fecha);
            var miFecha = new Date();

            anios = miFecha.getFullYear() - fechaN.getFullYear()-1;

            if(miFecha.getMonth() > fechaN.getMonth())
                anios++;
            else if(miFecha.getMonth() == fechaN.getMonth()){
                if(miFecha.getDay() >= fechaN.getDay)
                    anios++;
            }
            this.edad = anios;
            
        },
        picked: function (val) {
            if(this.picked == "male")
                this.colorPD = "pink";
            else 
                this.colorPD = "yellow";
        },
        colorB: function (val) {
            this.colorIZ = this.colorB;
        },
    },

    methods:{
        clickBotonEnviar: function(){
            alert("Has pulsado el boton enviar");
        },
        clickBotonChooseFiles: function(){
            alert("Has pulsado el boton choose files");
        },
        cabiaColorFrase: function () {
            setTimeout(() =>
                (this.fraseColor = "Cambia frase a rojo", this.fraseColoraux = true),
                5000)
        }
    },
    mounted: function () {
        this.cabiaColorFrase()
    },
})