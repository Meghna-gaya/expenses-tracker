import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>2022 August 22</div>
            <div className="expense-item__name">Car Insurance</div>
            <div className="expense-item__amount"> 20000</div>
        </div>
    );
}

export default ExpenseItem;