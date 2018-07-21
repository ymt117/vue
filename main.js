var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue.js!",
        list: ["apple", "banana", "strawberry"],
        count: "pls Input number",
        show: true,
        name: '',
        monster: [
            {id: 1, name: 'スライム', hp: 100},
            {id: 2, name: 'ゴブリン', hp: 200},
            {id: 3, name: 'ドラゴン', hp: 500}
        ]
    },
    methods: {
        handleClick: function(event){
            alert(event.target)
        },
        doAdd: function(){
            var max = this.monster.reduce(function(a, b){
                return a.id > b.id ? a.id : b.id
            }, 0)
            this.monster.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function(index){
            this.monster.splice(index, 1)
        },
        doAttack: function(index){
            this.monster[index].hp -= 10
        }
    }
})