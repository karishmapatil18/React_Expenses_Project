
import Expenses from './components/Expenses';

function App(){
    let expenses=[
        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2021,5,23)

        },
        {
            id: 'e2',
            title: 'Books',
            amount: 650,
            date: new Date(2023,6,23)

        },
        {
            id: 'e3',
            title: 'House Rent',
            amount: 100,
            date: new Date(2023,7,4)

        },
        {
            id: 'e4',
            title: 'Food',
            amount: 745,
            date: new Date(2023,4,14)

        }
    ];

    return (
        <div>
            <h2>Lets Get Started</h2>
            <Expenses item = {expenses}/>
                 
        </div>
       
    );
}

export default App;