<template>
  <div class="home">
    <div class="row">
      <div class="col-md-6">
        <quiz-component></quiz-component>
      </div>
      <div class="col-md-6">
        <quiz-component></quiz-component>
      </div>
    </div>
  </div>
</template>

<script>

import QuizComponent from '@/components/Quiz.vue'

export default {
  name: 'home',
  components: {
    QuizComponent
  }
}
</script>
