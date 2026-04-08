function Button1({color, text}){
  return <button style={{
    backgroundColor: color,
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px'
  }} type="button">{text}</button>
}

export default Button1
