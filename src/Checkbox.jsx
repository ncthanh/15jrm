export default function Checkbox ({ id, label }) {
  return <div style={{backgroundColor: 'green', border: '1px solid red', borderRadius: '8px', padding: '10px', color: 'purple', fontSize: '40px'}}>
    <input type="checkbox" id={id} style={{margin: '0 8px'}}/>
    <label for={id}>{label}</label>
  </div>
}