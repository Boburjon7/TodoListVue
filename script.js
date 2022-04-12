let hisob = {
    data() {
        return {
            title: "",
            descr: "",
            todoList: [],
            className: "",
            search: '',
            intosearch: '',
        }
    },
    methods: {
        addTask() {
            if (this.title == "" && this.descr == "") {
                this.className = "active"
                setTimeout(() => {
                    this.className = ""
                }, 1000);
            }
            else {
                this.todoList.push({
                    title: this.title,
                    descr: this.descr,
                    time: new Date().toLocaleString(),
                    done: true,
                    class: '',
                    visible: false,
                    edit: true,
                })
            }
            this.title = ""
            this.descr = ""
        },
        change(i) {
            this.todoList.forEach((el, index) => {
                if (i == index) {
                    el.done = !el.done
                    el.class = el.class == 'bg' ? '' : 'bg'
                }
            });
        },
        edit(i) {
            this.todoList.forEach((el, j) => {
                if (j == i) {
                    el.visible = !el.visible
                    el.edit = !el.edit
                }
            })
        },
        save(i) {
            this.todoList.forEach((el, j) => {
                if (j == i) {
                    el.visible = !el.visible
                    el.edit = !el.edit
                    el.time = new Date().toLocaleString()
                }
            })
        },
        del(i) {
            this.todoList.forEach((el, j) => {
                console.log(i);
                if (i == j) {
                    this.todoList.splice(j, 1)
                }
            })
        },

    },
    computed:{
        todofilter(){
            this.intosearch =  this.search.toLowerCase();               
            for (const obj of this.todoList) {
                return obj.filter((elem) => {
                    // if(elem.filter)
                })
            }
        }
    },
}

// camelCase componentda esa kebab-case
const app = Vue.createApp(hisob)

app.mount("#todo-list")