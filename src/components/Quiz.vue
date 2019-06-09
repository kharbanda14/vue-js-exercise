<template>
  <div id="quiz">
    <quiz-instructions-vue :max="max_questions" :config="customize" @clicked="onStartQuiz" v-if="start_quiz == false" />
    <div class="container" v-if="quiz_completed == false && start_quiz == true">
      <h3 class="badge badge-primary">Question {{ iteration }} / {{ max_questions }}</h3>
      <h2>
        <span class="badge badge-default">{{ question }}</span>
      </h2>

      <div class="form-group">
        <label for>Your Answer</label>
        <input class="form-control" type="text" v-model="answer" id>
        <span v-if="showErr" class="text text-danger">Answer Required</span>
      </div>

      <div class="form-group">
        <button class="btn btn-primary" @click="switchNext()">{{ iteration == max_questions ? 'Finish' : 'Next' }}</button>
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
import QuizInstructionsVue from './QuizInstructions.vue';


export default {
  data: function() {
    return {
      showErr : '',
      question: '',
      questions: [],
      /**
       * Custom configuration provided to the library for generating questions.
       */
      customize : {
        max_ques : 5,
        min_value : 1,
        max_value : 10,
        operators : '+,-,*,/'
      },
      answer: "",
      iteration: 1,
      max_questions: 5,
      quiz_completed: false,
      start_quiz : false,
    };
  },
  components : {
    ScoreCardVue,
    QuizInstructionsVue
  },
  methods: {
    switchNext() {

      /**
       * Check for empty value
       */
      if (this.answer.trim().length == 0) {
        this.showErr = true;
        return;
      }
      this.showErr = false;


      const correct_ans = Math.round(eval(this.question) * 100) / 100
      
      /**
       * Adds question to the list
       */
      this.questions.push({
        question: this.question,
        answer: this.answer,
        is_correct: correct_ans  == this.answer,
        correct_answer: correct_ans
      });

      /**
       * Generate a new question
       */
      this.question = quiz.generate_question();

      if (this.iteration == this.max_questions) {
        this.quiz_completed = true;
        return;
      }

      this.iteration++;
      this.answer = "";
    },
    /**
     * Starts the quiz and updates the configuration provided
     */
    onStartQuiz () {
      this.start_quiz = true;      
      quiz.initialize(this.customize);
      this.max_questions = this.customize.max_ques;
      this.question = quiz.generate_question();
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
