import "./ListHeader.css"

export default function ListHeader () {
    return (
        <div className="ListHeader-container">
            <input type="checkbox" />
            <div className="ListHeaderItem">NAME</div>
            <div className="ListHeaderItem">EMAIL</div>
            <div className="ListHeaderItem">PHONE</div>
            <div className="ListHeaderItem">PROFESSION</div>
        </div>
    )
}