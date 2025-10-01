export default function Checkbox ({ id, label }) {
  return <div style={{backgroundColor: 'blue', border: '1px solid red'}}>
    <input type="checkbox" id={id} style={{margin: '0 8px'}}/>
    <label for={id}>{label}</label>
  </div>
}