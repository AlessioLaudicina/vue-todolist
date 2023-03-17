const { createApp } = Vue

  createApp({
    data() {
      return {

        newTask: '',
        error: false,

        tasklist: [
          {
            text: 'Messi', 
            done: false,
          },

          {
            text: 'Mbappe', 
            done: false,
          },
          {
            text: 'Haaland', 
            done: false,
          },
          {
            text: 'Cristiano Ronaldo', 
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
          done: false
        };
        this.tasklist.push(newTaskAdd)
        this.newTask = ""
        
      },

      checkLength(){
        if(this.newTask.length >= 5){
          this.error = false;
        } else {
          this.error = true
        }
      },

      invertDone(task){
      task.done = !task.done;

      }

    }

  }).mount('#app')