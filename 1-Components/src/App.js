import Expenses from "./components/Expenses/Expenses.js";

function App() {
    let expenses = [
        {
            id: 'e1',
            title: 'school fee',
            amount: 250,
            date: new Date(1023, 3, 15)
        },
        {
            id: 'e2',
            title: 'Shopping',
            amount: 250,
            date: new Date(2023, 3, 5)
        },
        {
            id: 'e3',
            title: 'house Rent',
            amount: 450,
            date: new Date(1023, 5, 10)
        },
        {
            id: 'e4',
            title: ' Fee',
            amount: 1000,
            date: new Date(1023, 3, 8)
        }
    ]
    return (
        <div>
            <Expenses item={expenses} />
        </div>
    );
}

export default App