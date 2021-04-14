import firebase from "firebase/app";

export default {
  state: {
    messages: [],
    quiz: []
  },
  mutations: {
    addMessage(state, payload) {
      state.messages.push(payload)
    },
    addQuiz(state, payload) {
      state.quiz.push(payload)
    }
  },
  actions: {
    async fetchMessages({commit}) {
      let answer = []
      const res = (await firebase.database().ref(`/messages`).once('value')).val()
      for (let i in res) {
        answer.push(res[i])
        commit('addMessage', res[i])
      }
      return answer
    },
    async fetchQuiz({commit}) {
      let answer = []
      const res = (await firebase.database().ref(`/quiz`).once('value')).val()
      for (let i in res) {
        answer.push(res[i])
        commit('addQuiz', res[i])
      }
      return answer
    },
  }
}