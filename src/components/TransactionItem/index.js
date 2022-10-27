import './index.css'

const deleteimg = "https://i.postimg.cc/HW4M7V54/delete.png"

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
                <img src={deleteimg} className="delete-img" alt='delete'/>
            </button>
        </div>
    )
}
export default TransactionItem