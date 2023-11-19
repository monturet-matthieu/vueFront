import myIcon from "@/components/elements/myIcon.vue"

export default {
  title: "elements/myIcon",
  component: myIcon,
  argTypes: {
    name:{
      control: "select",
      options:["camion", "chevron", "couverts", "couvertsCroises", "etoile", "facebook", "fleche", "heure", "instagram", "linkedin", "loupe", "phone", "ping", "play", "sac", "twitter"],
    },
    direction:{
      control: "select",
      options:["default", "gauche"],
    },
    size:{
      control: "select",
      options:["small", "medium", "big"],
    },
    bg:{
      control: "select",
      options:["none", "black", "white", "orange", "orange-blanc", "blanc-orange"],
    },
    shadow:{
      control: "boolean",
    },
    etoile:{
      control: "select",
      options:["none", "vide", "pleine"],
    },
  }
}

export const CamionIcon = {
  render: (args) => {
    return{
      components: {
        myIcon
      },
      setup(){
        return {args}
      },
      template: `<myIcon v-bind="args" />`
    }
  },
  args:{
    name: "camion",
    direction: "default",
    size: "big",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const CamionOrangeIcon = {
  ...CamionIcon,
  args:{
    name: "camion",
    direction: "default",
    size: "big",
    bg: "orange",
    shadow: "false",
    etoile: "none"
  }
}

export const ChevronIcon = {
  ...CamionIcon,
  args:{
    name: "chevron",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const ChevronBlancIcon = {
  ...CamionIcon,
  args:{
    name: "chevron",
    direction: "default",
    size: "medium",
    bg: "white",
    shadow: "true",
    etoile: "none"
  }
}

export const CouvertsIcon = {
  ...CamionIcon,
  args:{
    name: "couverts",
    direction: "default",
    size: "big",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const CouvertsOrangeIcon = {
  ...CamionIcon,
  args:{
    name: "couverts",
    direction: "default",
    size: "big",
    bg: "orange",
    shadow: "false",
    etoile: "none"
  }
}

export const CouvertsCroisesIcon = {
  ...CamionIcon,
  args:{
    name: "couvertsCroises",
    direction: "default",
    size: "big",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const CouvertsCroisesOrangeIcon = {
  ...CamionIcon,
  args:{
    name: "couvertsCroises",
    direction: "default",
    size: "big",
    bg: "orange",
    shadow: "false",
    etoile: "none"
  }
}

export const EtoileVideIcon = {
  ...CamionIcon,
  args:{
    name: "etoile",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "none",
    etoile: "vide"
  }
}

export const EtoilePleinIcon = {
  ...CamionIcon,
  args:{
    name: "etoile",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "none",
    etoile: "pleine"
  }
}

export const FacebookIcon = {
  ...CamionIcon,
  args:{
    name: "facebook",
    direction: "default",
    size: "medium",
    bg: "orange",
    shadow: "none",
    etoile: "none"
  }
}

export const FlecheDroitIcon = {
  ...CamionIcon,
  args:{
    name: "fleche",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const FlecheGaucheIcon = {
  ...CamionIcon,
  args:{
    name: "fleche",
    direction: "gauche",
    size: "small",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const FlecheWhiteDroitIcon = {
  ...CamionIcon,
  args:{
    name: "fleche",
    direction: "default",
    size: "medium",
    bg: "white",
    shadow: "true",
    etoile: "none"
  }
}

export const FlecheWhiteGaucheIcon = {
  ...CamionIcon,
  args:{
    name: "fleche",
    direction: "gauche",
    size: "medium",
    bg: "white",
    shadow: "true",
    etoile: "none"
  }
}

export const FlecheOrangeDroitIcon = {
  ...CamionIcon,
  args:{
    name: "fleche",
    direction: "default",
    size: "medium",
    bg: "orange-blanc",
    shadow: "true",
    etoile: "none"
  }
}

export const FlecheOrangeGaucheIcon = {
  ...CamionIcon,
  args:{
    name: "fleche",
    direction: "gauche",
    size: "medium",
    bg: "orange-blanc",
    shadow: "true",
    etoile: "none"
  }
}

export const FlecheBlackIcon = {
  ...CamionIcon,
  args:{
    name: "fleche",
    direction: "default",
    size: "medium",
    bg: "black",
    shadow: "true",
    etoile: "none"
  }
}

export const HeureIcon = {
  ...CamionIcon,
  args:{
    name: "heure",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const InstagramIcon = {
  ...CamionIcon,
  args:{
    name: "instagram",
    direction: "default",
    size: "medium",
    bg: "orange",
    shadow: "none",
    etoile: "none"
  }
}

export const LinkedinIcon = {
  ...CamionIcon,
  args:{
    name: "linkedin",
    direction: "default",
    size: "medium",
    bg: "orange",
    shadow: "none",
    etoile: "none"
  }
}

export const LoupeIcon = {
  ...CamionIcon,
  args:{
    name: "loupe",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const PhoneIcon = {
  ...CamionIcon,
  args:{
    name: "phone",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const PingIcon = {
  ...CamionIcon,
  args:{
    name: "ping",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const PlayIcon = {
  ...CamionIcon,
  args:{
    name: "play",
    direction: "default",
    size: "big",
    bg: "blanc-orange",
    shadow: "true",
    etoile: "none"
  }
}

export const SacIcon = {
  ...CamionIcon,
  args:{
    name: "sac",
    direction: "default",
    size: "small",
    bg: "none",
    shadow: "false",
    etoile: "none"
  }
}

export const TwitterIcon = {
  ...CamionIcon,
  args:{
    name: "twitter",
    direction: "default",
    size: "medium",
    bg: "orange",
    shadow: "none",
    etoile: "none"
  }
}