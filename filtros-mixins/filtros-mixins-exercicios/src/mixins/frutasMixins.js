export default  {
    data() {
        return {
            fruta: "",
            frutas: ["Banana", "Goiaba"]
        };
    },
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = "";
        }
    }
}