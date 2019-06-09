<template>
  <div class="container">
      <h4>Instructions
        <span class="float-right btn btn-sm btn-info" @click="toggleConfig()"> Customize </span>
      </h4>
      <hr>
      <ul>
        <li>The Quiz contains maximum {{ config.max_ques }} Questions </li>
        <li> You Cannot Skip Questions, However once answered you cannot go back. </li>
        <li> Number like 2.3333333 can be round off to two digits i.e 2.33, 1.589522 to 1.59 etc. </li>
        <li> There is no time limit for the Quiz </li>
      </ul>
      <strong>All The best!</strong>

      <div id="customize" v-if="show_config">
        <div class="form-group">
          <label for="">Max Questions</label>
          <input class="form-control" type="text" v-model="config.max_ques">
        </div>
        <div class="form-group">
          <label for="">Minimum Random Value</label>
          <input class="form-control" type="text" v-model="config.min_value">
        </div>
        <div class="form-group">
          <label for="">Maximum Random Value</label>
          <input class="form-control" type="text" v-model="config.max_value">
        </div>
        <div class="form-group">
          <label for="">Operators <small>comma seperated</small> </label>
          <input class="form-control" type="text" v-model="config.operators">
        </div>
      </div>

      <div class="text-center">
        <button @click="startQuiz" class="btn btn-lg btn-primary">Start Quiz !</button>
      </div>
  </div>
</template>

<script>
export default {
    name : 'QuizInstructions',
    props : ['max', 'config'],
    data : function () {
      return {
        show_config: false,
      }
    },
    methods : {
        startQuiz () {
            this.$emit('clicked', 'start');
        },
        toggleConfig () {
          this.show_config = !this.show_config
        }
    }
};
</script>

<style>
</style>
