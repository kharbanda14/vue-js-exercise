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
        <h3> {{ get_remarks() }} </h3>
        <h4> Your Score was {{ live_score }} / {{ max_questions }} </h4>
        <table class="table table-striped">
            <tr>
                <th>#</th>
                <th>Question</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
                <th>Score</th>
            </tr>
            <tr v-for="(ques, index) in questions" v-bind:key="index">
                <td> {{ index + 1 }} </td>
                <td>{{ ques.question }}</td>
                <td> {{ ques.answer }} </td>
                <td> {{ ques.correct_answer }} </td>
                <td> {{ ques.is_correct ? '1' : '0'}} </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <th> Total </th>
                <th> {{ live_score }} </th>
            </tr>
        </table>
        <ul class="list-group"> 
            
        </ul>
    </div>
  </div>
</template>

<script>
import * as quiz from "../lib/Quiz";

export default {
  data: function() {
    return {
      question: quiz.generate_question(),
      questions: [],
      answer: "",
      iteration: 1,
      max_questions: 5,
      quiz_completed : false
    };
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
    },
    get_remarks () {
        return quiz.get_remarks(this.live_score, this.max_questions )
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
