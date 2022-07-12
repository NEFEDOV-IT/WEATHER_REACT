import { useState } from "react";
import './Tabs.css'
import { Now } from "./Now/Now";
import { Details } from "./Details/Details";
import { Forecast } from "./Forecast/Forecast";
import { NavigationTab } from "./NavigationTab/NavigationTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Now')

  return (
    <div className="forest__body-weather">
      <div className="tabs">
        <div className="tabs-block__body">

          <Now
            activeTab={activeTab}
          />
          <Details
            active={activeTab}
          />
          <Forecast
            active={activeTab}
          />
        </div>

        <NavigationTab
          active={activeTab}
          setActive={setActiveTab}
        />
      </div>
    </div>
  )
}

export { Tabs }
