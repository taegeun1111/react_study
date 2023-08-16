/** @jsxImportSource @emotion/react */

const colors = {
  default: "rgb(36,41,47)",
  danger: "rgb(207,34,46)",
  outline: "rgb(9,105,218)"
}

export function Button({children, variant = "default"}) {
  return <button css={{
    borderRadius: "6px",
    backgroundColor: "rgb(246,248,250)",
    color: colors[variant],
    fontSize: "30px"
  }}>{children}</button>
}

function App() {
  return (
    <>
      <Button variant={"default"}>Button</Button>
      <Button variant={"danger"}>Button</Button>
      <Button variant={"outline"}>Button</Button>
    </>
  )
}

export default App;
