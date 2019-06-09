<template>
  <div class="container">
      <h4>Instructions</h4>
      <hr>
      <ul>
        <li>The Quiz contains maximum {{ max }} Questions </li>
        <li> You Can Skip Questions, However once answered or skipped you cannot go back. </li>
        <li> Number like 2.3333333 can be round off to two digits i.e 2.33 </li>
        <li> There is no time limit for the Quiz </li>
      </ul>
      <strong>All The best!</strong>
      <div class="text-center">
        <button @click="startQuiz" class="btn btn-lg btn-primary">Start Quiz !</button>
      </div>
  </div>
</template>

<script>
export default {
    name : 'QuizInstructions',
    props : ['max'],
    methods : {
        startQuiz () {
            this.$emit('clicked', 'start');
        }
    }
};
</script>

<style>
</style>
