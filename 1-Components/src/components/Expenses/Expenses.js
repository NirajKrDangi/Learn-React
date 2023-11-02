import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './UI/Card';

function Expenses({ item }) {
    return (
        <Card className="expenses">
            <h1 className="heading-center">Lets Get Started</h1>
            <ExpenseItem
                date={item[0].date}
                title={item[0].title}
                amount={item[0].amount}>
            </ExpenseItem>

            <ExpenseItem
                date={item[1].date}
                title={item[1].title}
                amount={item[1].amount}>
            </ExpenseItem>

            <ExpenseItem
                date={item[2].date}
                title={item[2].title}
                amount={item[2].amount}>
            </ExpenseItem>

            <ExpenseItem
                date={item[3].date}
                title={item[3].title}
                amount={item[3].amount}>
            </ExpenseItem>
        </Card>
    );
}

export default Expenses;