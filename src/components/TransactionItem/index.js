import { Component } from "react";
import './index.css'

const deleteimg = "https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"

class TransactionItem extends Component {
    render() {
        const {historyItem} = this.props
        const {title,amount,salary} = historyItem
        return (
            <div className="transcation-container">
                <p className="details-all">{title}</p>
                <p className="details-all">{amount}</p>
                <p className="details-all">{salary}</p>
                <button>
                    <img src={deleteimg} className="delete-img" />
                </button>
            </div>
        )
    }
}
export default TransactionItem