export default function Checkbox ({ id, label }) {
  return <div style={{backgroundColor: 'green', border: '1px solid red', padding: '10px'}}>
    <input type="checkbox" id={id} style={{margin: '0 8px'}}/>
    <label for={id}>{label}</label>
  </div>
}