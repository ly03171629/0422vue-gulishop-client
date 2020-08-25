<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
      <slot :todo="todo" :index="index">
        {{todo.text}}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    todos: Array
  }
}
</script>