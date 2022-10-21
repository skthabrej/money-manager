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

    onGetHistoryLayout = () => {
        const {titleInput, amountInput, optionId, historyList} = this.state
        return (
          <div className="history-container">
            <h1>History</h1>
            <ul>
              <li className="history-header-container">
                <p className="header-item">Title</p>
                <p className="header-item">Amount</p>
                <p className="header-item">Type</p>
                <p className="header-item">DELETE</p>
              </li>
              {historyList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  historyItem={eachItem}
                  deleteFunction={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        )
      }

    onGetFormLayout = () => {
        return (
            <form className='form-container'>
                <div className='form-card-container'>
                    <h1 className='form-heading'>Add Transaction</h1>
                    <label className='label-1' htmlFor='title'>Title</label>
                    <input type="text" id='title' className='all-input'></input>
                    <label className='label-1' htmlFor='amount'>Amount</label>
                    <input type="text" id='amount'className='all-input'></input>
                    <label className='label-1' htmlFor='select'>Type</label>
                    <select id='select' className='select-input'>
                    {transactionTypeOptions.map(eachOption => (
                        <option
                            key={eachOption.optionId}
                            value={eachOption.optionId}
                            id={eachOption.optionId}
                        >
                            {eachOption.displayText}
                        </option>
                        ))}
                    </select>
                    <button className="add-button" type="submit">Add</button>
                    </div>
            </form>
        )
    }

    render() {
        const { titleInput,amountInput,optionId,historyList,totalBalance,totalIncome,totalExpenses,} = this.state
        return (
            <div className='bg-container'>
                <div className='card-container'>
                    <div className='top-card'>
                        <h1 className='main-heading'>HI, Thomas</h1>
                        <p className='main-paragraph'>Welcome back to your <span className='highlight-element'>!Money Manager</span></p>
                    </div>
                    <MoneyDetails
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