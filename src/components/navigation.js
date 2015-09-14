export default class Navigation {
  
  render() {
    return (
      <nav className="pure-u-1 pure-menu pure-menu-horizontal">
        <ul id="menu" className="pure-menu-list">
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item chronicle" href="chronicle.php">Chronik</a>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item persons" href="persons.php">Personen</a>
            <ul className="pure-menu-children sub-menu persons">
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item persons" href="astronomers.php">Astronomen</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item persons" href="astronauts.php">Raumfahrer</a>
              </li>
            </ul>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item places" href="places.php">Orte</a>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item objects" href="objects.php">Objekte</a>
            <ul className="pure-menu-children sub-menu objects">
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item objects" href="solsys.php">Sonnensystem</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item objects" href="constellations.php">Sternbilder</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item objects" href="stars.php">Sterne</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item objects" href="stations.php">Raumstationen</a>
              </li>
            </ul>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item astronomy" href="astronomy.php">Astronomie</a>
            <ul className="pure-menu-children sub-menu astronomy">
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item astronomy" href="astronomers.php">Astronomen</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item astronomy" href="solsys.php">Sonnensystem</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item astronomy" href="constellations.php">Sternbilder</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item astronomy" href="stars.php">Sterne</a>
              </li>
            </ul>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item spaceflight" href="spaceflight.php">Raumfahrt</a>
            <ul className="pure-menu-children sub-menu spaceflight">
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item spaceflight" href="astronauts.php">Raumfahrer</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item spaceflight" href="missions.php">Missionen</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item spaceflight" href="stations.php">Raumstationen</a>
              </li>
            </ul>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item register" href="register.php">Register</a>
          </li>
        </ul>
      </nav>
    )
  }
  
}