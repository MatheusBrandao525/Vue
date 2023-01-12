const MyNameApp = {
    data() {
        return {
            name: 'Matheus',
            age: 20,
            input_name: '',
        }
    },
    methods: {
        sibmitForm(e) {
            e.preventDefault();
            
            console.log(this.input_name);
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");