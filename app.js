const app = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: ['yo'],
            value: true,
            showList: 'Show List',
            hideList: 'Hide List'
        }
    },
    methods: {
        addTasks(task) {
            this.tasks.push(task)
            this.task = ''
        },
        toggleList() {
                this.value = !this.value
            
        }
    }

 })

app.mount("#assignment")