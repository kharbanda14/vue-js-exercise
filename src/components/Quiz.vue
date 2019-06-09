<template>
  <div id="quiz">
    <div class="container" v-if="quiz_completed == false">
      <h3 class="badge badge-primary">Question {{ iteration }} / {{ max_questions }}</h3>
      <h2>
        <span class="badge badge-default">{{ question }}</span>
      </h2>

      <div class="form-group">
        <label for>Your Answer</label>
        <input class="form-control" type="text" v-model="answer" id>
      </div>

      <div class="form-group">
        <button class="btn btn-primary" @click="switchNext()">Next</button>
        <div class="float-right badge badge-success">Score {{ live_score }} / {{ max_questions }}</div>
      </div>
    </div>
    <div class="container" v-if="quiz_completed">
      <score-card-vue :questions="questions" />
    </div>
  </div>
</template>

<script>
import * as quiz from "../lib/Quiz";
import ScoreCardVue from './ScoreCard.vue';



export default {
  data: function() {
    return {
      question: quiz.generate_question(),
      questions: [],
      answer: "",
      iteration: 1,
      max_questions: 5,
      quiz_completed: false
    };
  },
  components : {
    ScoreCardVue
  },
  methods: {
    switchNext() {
      this.questions.push({
        question: this.question,
        answer: this.answer,
        is_correct: eval(this.question) == this.answer,
        correct_answer: eval(this.question)
      });

      this.question = quiz.generate_question();

      if (this.iteration == this.max_questions) {
        this.quiz_completed = true;
        return;
      }

      this.iteration++;
      this.answer = "";
    }
  },
  computed: {
    get_correct_answers() {
      return this.questions.filter(v => v.is_correct);
    },
    live_score() {
      return this.get_correct_answers.length;
    }
  }
};
</script>

<style>
</style>
