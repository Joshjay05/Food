import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SharedLayout from "./SharedLayout";
// import Dashboard from "./Dashboard/Dashboard";
// import Services from "./Services/Services";
// import Settings from "./Settings/Settings";
import ONboarding from "./Onboarding/ONboarding";
// import Payment from "./Payment/Payment";
// import PaymentPage from "./Payment/PaymentPage";
// import UssdOrderSummary from "./Payment/UssdOrderSummary";
// import Confirmation from "./Payment/Confirmation";
// import CardPayment from "./Payment/CardPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ONboarding />} />
        {/* <Route path="dashboard" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="settings" element={<Settings />} />
          <Route path="payment" element={<PaymentPage/>}/>
            <Route path="ussd" element={<UssdOrderSummary/>}/>
            <Route path="confirmation" element={<Confirmation/>}/>
         <Route path="card" element={<CardPayment/>}/> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
