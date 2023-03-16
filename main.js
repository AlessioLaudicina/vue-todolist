const { createApp } = Vue

  createApp({
    data() {
      return {

        newTask: '',

        tasklist: ['Task 1', 'Task 2', 'Task 3']

        
        
      }
    },

    methods: {
      removeTask(index){
        this.tasklist.splice(index, 1);
      },

      addTask(){
        this.tasklist.push(this.newTask);
        this.newTask = ""
      }

    }

  }).mount('#app')