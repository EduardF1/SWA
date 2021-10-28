
const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/11.jpg',
        }
    },
    methods: {
        async getUser() {
            const response = await axios.get('https://randomuser.me/api');
            const {results} = response.data;

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        }
    },
})

app.mount('#app');