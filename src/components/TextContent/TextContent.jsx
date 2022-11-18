import "./TextContent.css"

export default function TextContent({children}) {
  return (
    <div className="TextContent">
      <p>{children}</p>
    </div>
  )
}