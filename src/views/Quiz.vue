<template>
  <div class="quiz">
    <h1>Quiz</h1>
    <v-data-table
      :headers="headers"
      :items="quiz"
      :sort-by="['time']"
      :sort-desc="[true]"
      class="elevation-1"
    >
      <template v-slot:item.phone="{ item }">
        <span v-if="item.phone && item.phone.number" :class="$style.phone">
          <img :src="require('/src/assets/img/whatsapp.svg')" alt="" v-if="item.phone.sendTo == 'WhatsApp'">
          <img :src="require('/src/assets/img/telegram.svg')" alt="" v-if="item.phone.sendTo == 'Telegram'">
          <img :src="require('/src/assets/img/telephone.svg')" alt="" v-if="item.phone.sendTo == 'Телефон'">
          {{ item.phone.number }}
        </span>
      </template>
      <template v-slot:item.experience="{ item }">
      <span :class="{'green--text': item.experience, 'red--text': !item.experience,}">
        {{ item.experience ? 'Да' : 'Нет' }}
      </span>
      </template>
      <template v-slot:item.time="{ item }">
        {{ new Date(item.time).toString().substr(0, 24) }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data: ()=>({
    quiz: [],
    headers: [
      {
        text: 'Телефон',
        sortable: false,
        value: 'phone',
      },
      {
        text: 'Есть ли опыт',
        align: 'start',
        sortable: false,
        value: 'experience',
      },
      {
        text: 'Цель',
        sortable: false,
        value: 'target',
      },
      {
        text: 'Возраст',
        sortable: false,
        value: 'age',
      },
      {
        text: 'Время',
        value: 'time',
      },
    ],
  }),
  methods: {
    updateMessages() {
      this.$store.dispatch('fetchQuiz')
        .then((res)=>{
          this.quiz = res
          console.log(res)
        })
    },
  },
  created() {
    this.updateMessages()
  }
}
</script>

<style lang="scss" module>
.phone {
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
}
</style>