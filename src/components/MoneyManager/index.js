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

    state = {titleInput: '',
      amountInput: '', 
      optionId: transactionTypeOptions[0].optionId,
      type:'Income',
      historyList: [],
      totalBalance: 0, 
      totalIncome: 0,
      totalExpenses: 0,
    }

    onDeleteItem = id => {
        const {historyList} = this.state
        const filteredUsersData = historyList.filter(
          each => each.id !== id
        )
        this.setState({
          historyList: filteredUsersData
        })
      }

      addSubmitFrom = event => {
        const{historyList} = this.state
        event.preventDefault()
        const{titleInput,amountInput,type} = this.state
        const addNewDetails = {
          title:titleInput,
          amount:amountInput,
          type:type,
          id:uuidv4()
        }
        
        this.setState(prevState => ({
          historyList:[...prevState.historyList,addNewDetails],
          titleInput:'',
          amountInput:''
        }))
        let expenses = 0
        let income = 0
        let balance = 0
        for (let item of historyList) {
          if (item.title === 'income') {
            income = income + parseInt(item.amount)
          } else {
            expenses = expenses + parseInt(item.amount)
          }
        }
        balance = income - expenses
        this.setState({
          totalIncome:income,
          totalBalance:balance,
          totalExpenses:expenses
        })
      }


      onTakeInputTitle = event => {
        this.setState({titleInput:event.target.value})
      }

      onTakeInputAmount = event => {
        this.setState({amountInput:event.target.value})
      }

      onTakeSelectType = event => {
        this.setState({type:event.target.value})
      }

    onGetHistoryLayout = () => {
        const {historyList} = this.state
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
      const {type,titleInput,amountInput} = this.state
        return (
            <form className='form-container' onSubmit={this.addSubmitFrom}>
                <div className='form-card-container'>
                    <h1 className='form-heading'>Add Transaction</h1>
                    <label className='label-1' htmlFor='title'>Title</label>
                    <input type="text" id='title' className='all-input' onChange={this.onTakeInputTitle} value={titleInput}></input>
                    <label className='label-1' htmlFor='amount'>Amount</label>
                    <input type="text" id='amount'className='all-input' onChange={this.onTakeInputAmount} value={amountInput}></input>
                    <label className='label-1' htmlFor='select'>Type</label>
                    <select id='select' className='select-input' value={type} onChange={this.onTakeSelectType}>
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
        const { titleInput,amountInput,historyList,totalBalance,totalIncome,totalExpenses,type} = this.state
        console.log(titleInput,amountInput,type)
        console.log(historyList)
        return (
            <div className='bg-container'>
                <div className='card-container'>
                    <div className='top-card'>
                        <h1 className='main-heading'>HI, Thomas</h1>
                        <p className='main-paragraph'>Welcome back to your <span className='highlight-element'>!Money Manager</span></p>
                    </div>
                    <MoneyDetails
                    totalBalance={totalBalance}
                    totalExpenses={totalExpenses}
                    totalIncome={totalIncome}
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