<template>
  <div>
    <h1>messages</h1>
    <v-data-table
      :headers="headers"
      :items="messages"
      :sort-by="['time']"
      :sort-desc="[true]"
      class="elevation-1"
    >
      <template v-slot:item.time="{ item }">
        <span v-if="item.time">
          {{ new Date(item.time).toString().substr(0, 24) }}
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data: ()=>({
    messages: [],
    headers: [
      {
        text: 'Имя',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {
        text: 'Телефон',
        sortable: false,
        value: 'phone',
      },
      {
        text: 'Цель',
        sortable: false,
        value: 'target',
      },
      {
        text: 'Какая форма',
        sortable: false,
        value: 'where',
      },
      {
        text: 'Время',
        value: 'time',
      },
    ],
  }),
  methods: {
    updateMessages() {
      this.$store.dispatch('fetchMessages')
        .then((res)=>{
          this.messages = res
          console.log(res)
        })
    },
  },
  created() {
    this.updateMessages()
  }
}
</script>