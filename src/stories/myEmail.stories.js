import myEmail from "@/components/elements/myEmail.vue"

export default {
  title: "elements/myEmail",
  component: myEmail,
  argTypes: {
    size:{
      control: "select",
      options: ["small", "big"]
    },
  }
}

export const EmailSmall = {
  render: (args) => {
    return{
      components: {
        myEmail
      },
      setup(){
        return {args}
      },
      template: `<myEmail v-bind="args"/>`
    }
  },
  args:{
    size: "small"
  }
}
export const EmailBig = {
  ...EmailSmall,
  args:{
    size: "big"
  }
}
