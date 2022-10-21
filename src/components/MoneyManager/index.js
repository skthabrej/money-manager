import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
    {
      optionId: 'INCOME',
      displayText: 'Income',
    },
    {
      optionId: 'EXPENSES',
      displayText: 'Expenses',
    },
  ]

class MoneyManager extends Component {

    state = {titleInput: '', amountInput: '', optionId: transactionTypeOptions[0].optionId, historyList: [],
    totalBalance: 0, totalIncome: 0, totalExpenses: 0,}


    onGetFormLayout = () => {
        return (
            <form className='form-container'>
                <div className='from-card-container'>
                    <h1 className=''>Add Transaction</h1>
                    <label className='label-1' htmlFor='title'>Title</label>
                    <input type="text" id='title'></input>
                    <label className='label-2' htmlFor='amount'>Amount</label>
                    <input type="text" id='amount'></input>
                    <label className='label-3' htmlFor='select'>Type</label>
                    <select id='select'>
                        
                    </select>
                    </div>
            </form>
        )
    }

    render() {
        return (
            <div className='bg-container'>
                <div className='card-container'>
                    <div className='top-card'>
                        <h1 className='main-heading'>HI,Zain</h1>
                        <p className='main-paragraph'>Welcome back to your <span className='highlight-element'>!Money Manager</span></p>
                    </div>
                    <MoneyDetails
                        //totalBalance={totalBalance}
                        //totalIncome={totalIncome}
                        //totalExpenses={totalExpenses}
                    />
                    <div className="form-history-container">
                        {this.onGetFormLayout()}
                        {this.onGetHistoryLayout()}
                    </div>
                </div>
            </div>
        )
    }
}
export default MoneyManager