<template>
<div>
  <div class="container">
    <div class="container mx-auto col-xs-12 col-sm-12 col-md-10 col-lg-8">
      <div class="container form-group">
        <div class="form-group">


        <input type="text" id="materialFormLoginPasswordEx" placeholder="Add Todos" class="form-control" v-model="todo">
    </div>

    <div class="text-center">
        <button class="btn btn-default" @click="add(todo)" >Add</button>
    </div>
      </div>
      <div class="container">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(todo,iter) in todos" :key="iter"
        >
        &nbsp;&nbsp;&nbsp;&nbsp;{{todo}}
          <span class="badge badge-danger" @click="remove(todo)" style="cursor:pointer; " >X</span>
        </li>


      </ul>
      </div>
    </div>
  </div>

</div>

</template>

<script>
export default {
  data() {
    return {
      todo: null,
      todos: []
    };
  },
  methods: {
    add(todo) {
      if (todo !== null && todo.length > 0) {
        console.log(todo, ' in component');
        this.$store.dispatch('AddTodo', { todo: this.todo });
      }
    },
    remove(todo) {
      console.log(todo);
      this.$store.dispatch('DeleteTodo', { todoIndex: todo });
    }
  },
  computed: {
    todoList() {
      return this.$store.getters.getTodoList;
    }
  },
  watch: {
    todoList(list) {
      this.todos = list;
    }
  }
};
</script>
<style scoped>
* {
  font-weight: 400;
}
</style>
