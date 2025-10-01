import Checkbox from "./Checkbox";

export default {
  component: Checkbox
}

export const Default = {
  args: {
    id: 'rememberCheck',
    label: 'Remember me?'
  },
  render: (args) => {
    return <Checkbox {...args} />
  }
}
