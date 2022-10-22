import './index.css'

const deleteimg = "https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"

const TransactionItem = props => {
    const {historyItem,deleteFunction} = props
    const {title,amount,salary,type,id} = historyItem

    const onDeleteButton = () => {
        console.log(id)
        deleteFunction(id)
    }

    return (
        <div className="transcation-container">
            <p className="details-all">{title}</p>
            <p className="details-all">{amount}</p>
            <p className="details-all">{type}</p>
            <p className="details-all">{salary}</p>
            <button className="btn-style" onClick={onDeleteButton}>
                <img src={deleteimg} className="delete-img" />
            </button>
        </div>
    )
}
export default TransactionItem