import Checkbox from "./Checkbox";

export default {
  component: Checkbox
}

export const Default = {
  args: {
    id: 'rememberCheck',
    label: 'Remember this device ???'
  },
  render: (args) => {
    return <Checkbox {...args} />
  }
}
