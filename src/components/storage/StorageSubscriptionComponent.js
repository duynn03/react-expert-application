import useLocalStorage from "../../hook/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "../../utils/Constant";

const StorageSubscriptionComponent = () => {
    const [name] = useLocalStorage(LOCAL_STORAGE_KEY.NAME);

    return (
        <p>Current value of name in the local storage: {name}</p>
    );
}

export default StorageSubscriptionComponent;