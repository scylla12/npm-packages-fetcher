import { Provider,ProviderProps } from "react-redux"; 
import RepositoriesList from "./RepositoriesList";
import { store } from "../state";


const providerProps: ProviderProps = {
  store: store,
};


const  App:React.FC = () => {
  return <Provider   {...providerProps}>
    <div> 
      <h1>Search For a Package</h1>
      <RepositoriesList/>
    </div>
  </Provider>;
}

export default App;
