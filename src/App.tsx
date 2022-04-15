import { Provider } from "react-redux"
import { GlobalStyle } from "./GlobalStyles";
import UsersPage from "./pages/UsersPage";
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div>
        <UsersPage />
      </div>
    </Provider>
  )
}

export default App
