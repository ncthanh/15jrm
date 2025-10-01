export default function Checkbox ({ id, label }) {
  return <div>
    <input type="checkbox" id={id} style={{margin: '0 8px'}}/>
    <label for={id}>{label}</label>
  </div>
}