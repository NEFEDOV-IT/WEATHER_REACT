const NavigationTab = ({ active, setActive }) => {
  return (
    <div className="tabs-block__nav">
      <div className={active === 'Now' ?
        "tabs-block__item tabs-item active" :
        'tabs-block__item tabs-item'}
           onClick={() => setActive('Now')}
      >
        Now
      </div>
      <div className={active === 'Details' ?
        "tabs-block__item tabs-item active" :
        'tabs-block__item tabs-item'}
           onClick={() => setActive('Details')}
      >
        Details
      </div>
      <div className={active === 'Forecast' ?
        "tabs-block__item tabs-item active" :
        'tabs-block__item tabs-item'}
           onClick={() => setActive('Forecast')}
      >
        Forecast
      </div>
    </div>
  )
}

export { NavigationTab }
