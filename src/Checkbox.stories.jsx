import Checkbox from "./Checkbox";

export default {
  component: Checkbox
}

export const Default = {
  args: {
    id: 'rememberCheck',
    label: 'Remember this computer?'
  },
  render: (args) => {
    return <Checkbox {...args} />
  }
}
