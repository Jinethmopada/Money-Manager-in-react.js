import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="transactions-container">
      <p className="mode">{title}</p>
      <p className="mode">Rs {amount}</p>
      <p className="mode">{type}</p>
      <div className="item-details">
        <button
          className="delete-btn"
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
