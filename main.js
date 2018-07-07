var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue.js!",
        list: ["apple", "banana", "strawberry"]
    },
    methods: {
        handleClick: function(event){
            alert(event.target)
        }
    }
})