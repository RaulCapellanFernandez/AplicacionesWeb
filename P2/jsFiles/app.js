var vueApp = new Vue({
    el: '#vueApp',
    data: {
        nombre: "Raul Capellan Fernandez",
        edad: "18",
        htmlCB: ["HTML1"],
        picked: 'female',
        color: '#5CA5BB',
        fecha: '2017-07-04',
    
    }, 

    methods:{
        clickBotonEnviar: function(){
            alert("Has pulsado el boton enviar");
        },
        clickBotonChooseFiles: function(){
            alert("Has pulsado el boton choose files");
        }
    },
})