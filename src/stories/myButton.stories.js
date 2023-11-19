import myButton from "@/components/elements/myButton.vue"

export default {
  title: "elements/myButton",
  component: myButton,
  argTypes: {
    href:{
      control: "text",
    },
    size:{
      control: "select",
      options:['regular', 'small']
    },
    variant:{
      control: "select",
      options:['default', 'rounded']
    },
    icon:{
      control: "boolean",
    }
  }
}

export const PrimaryButton = {
  render: (args) => {
    return{
      components: {
        myButton
      },
      setup(){
        return {args}
      },
      template: `<myButton v-bind="args">Hello World !</myButton>`
    }
  },
  args:{
    href: "/",
    size: "regular",
    variant: "default",
    icon: "false",
  }
}

export const SecondaryButton = {
  ...PrimaryButton,
  args:{
    href: "/",
    size: "regular",
    variant: "rounded",
    icon: "false",
  }
}

export const TertiairButton = {
  ...PrimaryButton,
  args:{
    href: "/",
    size: "regular",
    variant: "rounded",
    icon: "true",
  }
}

export const SmallPrimaryButton = {
  ...PrimaryButton,
  args:{
    href: "/",
    size: "small",
    variant: "default",
    icon: "false",
  }
}

export const SmallSecondaryButton = {
  ...PrimaryButton,
  args:{
    href: "/",
    size: "small",
    variant: "rounded",
    icon: "false",
  }
}

