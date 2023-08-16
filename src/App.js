/** @jsxImportSource @emotion/react */

const colors = {
  default: "rgb(36,41,47)",
  danger: "rgb(207,34,46)",
  outline: "rgb(9,105,218)"
}

const sizeStyles = {
  sm : {
    fontSize : "12px",
    padding : "3px 12px"
  },
  md : {
    fontSize : "14px",
    padding : "5px 16px"
  },
  lg : {
    fontSize : "16px",
    padding : "9px 20px"
  }
}

export function Button({children, variant = "default", size = "md"}) {
  return <button css={{
    borderRadius: "6px",
    backgroundColor: "rgb(246,248,250)",
    color: colors[variant],
    ...sizeStyles[size],
  }}>{children}</button>
}

function App() {
  return (
    <>
      <Button variant={"default"} size={"sm"}>Button</Button>
      <Button variant={"danger"} size={"md"}>Button</Button>
      <Button variant={"outline"} size={"lg"}>Button</Button>
    </>
  )
}

export default App;
