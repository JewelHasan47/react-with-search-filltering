import './App.css';
import Products from './components/Products/Products';
import Search from './components/Search/Search';

function App() {
    return (
        <div className={ 'container' }>
            <Search/>
            <Products/>
        </div>
    );
}

export default App;
