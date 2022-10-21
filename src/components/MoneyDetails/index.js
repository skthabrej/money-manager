import { Component } from "react";
import TransactionItem from '../TransactionItem'
import './index.css'

const balanceImg =
  'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png'
const incomeImg =
  'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png'
const expensesImg =
  'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png'

class MoneyDetails extends Component {
    render() {
        const {totalBalance, totalIncome, totalExpenses} = this.props
        return (
            <div className="all-amount-cards">
                <div className="amount-card-1">
                    <img src={balanceImg} alt='balance' className="all-images"/>
                    <div className="card-1">
                        <p className="all-card-headings">Your Balance</p>
                        <h1 className="all-card-paragraphs">totalBalance</h1>
                    </div>
                </div>
                <div className="amount-card-2">
                    <img src={incomeImg} alt='income' className="all-images"/>
                    <div className="card-1">
                        <p className="all-card-headings">Your Income</p>
                        <h1 className="all-card-paragraphs">totalIncome</h1>
                    </div>
                </div>
                <div className="amount-card-3">
                    <img src={expensesImg} alt='expenses' className="all-images"/>
                    <div className="card-1">
                        <p className="all-card-headings">Your Balance</p>
                        <h1 className="all-card-paragraphs">totalExpenses</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default MoneyDetails