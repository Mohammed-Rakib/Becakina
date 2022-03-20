import Navigatinons from "./navigations/Navigatinons";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <>
      <Navigatinons />
      <MessengerCustomerChat
        pageId="100727945919234"
        appId="1016997412229888"
        htmlRef="http://localhost:3000"
      />
    </>
  );
}

export default App;
