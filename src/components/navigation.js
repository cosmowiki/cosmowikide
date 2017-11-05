import React from 'react';

const Navigation = ({ appUrl }) => {
  return (
    <div id="navContainer" className="pure-u-md-1-2 pure-u-lg-2-3">
      <nav className="pure-menu pure-menu-horizontal center">
        <ul id="menu" className="pure-menu-list">
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item welcome" href={appUrl.welcomeSite()}></a>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item chronicle" href={appUrl.eventsSite()}>Chronik</a>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item persons" href={appUrl.peopleSite()}>Personen</a>
            <ul className="pure-menu-children sub-menu persons">
              {[
                {url: appUrl.scientistsSite(), name: 'Wissenschaftler'},
                {url: appUrl.astronautsSite(), name: 'Raumfahrer'},

              ].map(link =>
                <li key={link.url} className="pure-menu-item">
                  <a className="pure-menu-link sub-menu-item persons" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item places" href="places.php">Orte</a>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item objects" href={appUrl.objectsSite()}>Objekte</a>
            <ul className="pure-menu-children sub-menu objects">
              {[
                {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
                {url: appUrl.constellationsSite(), name: 'Sternbilder'},
                {url: appUrl.starsSite(), name: 'Sterne'},
                {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

              ].map(link =>
                <li key={link.url} className="pure-menu-item">
                  <a className="pure-menu-link sub-menu-item objects" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item astronomy" href={appUrl.astronomySite()}>Astronomie</a>
            <ul className="pure-menu-children sub-menu astronomy">
              {[
                {url: appUrl.scientistsSite(), name: 'Wissenschaftler'},
                {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
                {url: appUrl.constellationsSite(), name: 'Sternbilder'},
                {url: appUrl.starsSite(), name: 'Sterne'},
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

              ].map(link =>
                <li key={link.url} className="pure-menu-item">
                  <a className="pure-menu-link sub-menu-item astronomy" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item spaceflight" href={appUrl.spaceflightSite()}>Raumfahrt</a>
            <ul className="pure-menu-children sub-menu spaceflight">
              {[
                {url: appUrl.astronautsSite(), name: 'Raumfahrer'},
                {url: appUrl.missionsSite(), name: 'Missionen'},
                {url: appUrl.spacewalksSite(), name: 'Weltraumausstiege'},
                {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

              ].map(link =>
                <li key={link.url} className="pure-menu-item">
                  <a className="pure-menu-link sub-menu-item spaceflight" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li className="pure-menu-item search">
            <a className="pure-menu-link menu-item search" href="#"></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
