<template>
  <div id="results">
    <div class="text-center">
      <h3>
        <strong>{{ get_remarks() }}</strong>
      </h3>
      <h5>Your Score was {{ get_score() }} / {{ max_questions }}</h5>
    </div>
    <table class="table table-striped">
      <tr>
        <th>#</th>
        <th>Question</th>
        <th>Your Answer</th>
        <th>Correct Answer</th>
        <th>Score</th>
      </tr>
      <tr v-for="(ques, index) in questions" v-bind:key="index" v-bind:class="{'table-danger' : !ques.is_correct}">
        <td>{{ index + 1 }}</td>
        <td>{{ ques.question }}</td>
        <td>{{ ques.answer }}</td>
        <td>{{ ques.correct_answer }}</td>
        <td>{{ ques.is_correct ? '1' : '0'}}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <th>Total</th>
        <th>{{ get_score() }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
import * as quiz from "../lib/Quiz";
export default {
  name: "ScoreCard",
  props: ['questions'],
  data: function() {
    return {
        max_questions : this.questions.length,
    };
  },
  methods: {
    get_remarks() {
      const score = this.get_score();
      const max = this.max_questions;
      return quiz.get_remarks(score, max );
    },
    get_score () {
        return this.questions.filter(v => v.is_correct).length;
    }
  }
};
</script>

<style>
</style>
