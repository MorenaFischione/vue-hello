
// istanzizzione di Vue. Creo un nuovo oggetto

var app = new Vue ({
        
    el: "#root",
    // tutte le variabili da monitorare da HTML
    data: {
        title: "Buongiorno",
        message: "Benvenuto ",
        nome: "",
        cognome: "",
        img: "https://i2.wp.com/www.blogparsec.it/wp-content/uploads/2020/08/homer-758x550-1.jpg?resize=406%2C294",
        mieClassi: "pt-5 text-danger ",
        color: "",
    },
    methods: {
        changeColor: function () {
            if(this.color == "magenta"){
                this.color = "blue";
            } else {
                this.color = "magenta";
            }
        }
    }
    
});

