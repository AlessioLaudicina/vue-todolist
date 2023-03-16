const { createApp } = Vue

  createApp({
    data() {
      return {

        newTask: '',

        tasklist: [
          {
            text: 'Task 1', 
            done: false,
          },

          {
            text: 'Task 2', 
            done: false,
          },
          {
            text: 'Task 3', 
            done: false,
          },
          {
            text: 'Task 4', 
            done: false,
          }
        ]

        
        
      }
    },

    methods: {
      removeTask(index){
        this.tasklist.splice(index, 1);
      },

      addTask(){
      

  
        const newTaskAdd = {
          text: this.newTask,
        };
        this.tasklist.push(newTaskAdd)
      }

    }

  }).mount('#app')