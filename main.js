var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue.js!",
        list: ["apple", "banana", "strawberry"],
        count: "pls Input number",
        show: true
    },
    methods: {
        handleClick: function(event){
            alert(event.target)
        }
    }
})