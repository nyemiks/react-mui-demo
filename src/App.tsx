import "./App.css";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextField";
import { MuiSelect } from "./components/MuiSelect";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiCheckBox } from "./components/MuiCheckBox";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiRating } from "./components/MuiRating";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiLayout } from "./components/MuiLayout";
import { MuiCard } from "./components/MuiCard";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiImageList } from "./components/MuiImageList";

function App() {
  return (
    <>
      <div className="App">
        {/** <MuiTypography></MuiTypography>
         * <MuiButton></MuiButton>
         * <MuiTextField></MuiTextField>
         *  <MuiSelect></MuiSelect> 
          <MuiRadioButton></MuiRadioButton>
          <MuiCheckBox></MuiCheckBox>
          <MuiSwitch></MuiSwitch>
          MuiRating
          <MuiRating></MuiRating>
           <MuiAutocomplete></MuiAutocomplete>
                    <MuiLayout></MuiLayout>
             <MuiCard></MuiCard>
             <MuiAccordion></MuiAccordion>
          */}

        <MuiImageList></MuiImageList>
      </div>
    </>
  );
}

export default App;
