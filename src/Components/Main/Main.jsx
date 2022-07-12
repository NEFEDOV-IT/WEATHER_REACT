import { FormSubmit } from "../FormSubmit/FormSubmit";
import { Tabs } from "../Tabs/Tabs";
import { Locations } from "../Locations/Locations";
import './Main.css'

const Main = () => {

  return (
    <main className="main">
      <div className="container">
        <div className="weather__forest">

          <FormSubmit/>

          <div className="forest__body">

            <Tabs/>
            <Locations/>

          </div>
        </div>
      </div>
    </main>
  )
}

export { Main }
