import React from 'react';
import Navigation from './navigation';

const Header = ({appUrl}) => {
  return (
    <header className="pure-u-1">
      <div id="brand" className="pure-u-lg-1-6">
        <a href="/" title="CosmoWiki.de" rel="home"></a>
      </div>
      <div id="mobileMenuContainer">
        <div id="mobileMenuToggle">
          <a href="#" title="Navigation"></a>
          <nav id="mobileMenu" className="pure-menu custom-restricted-width">
            <ul className="pure-u-1">
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
            </ul>
          </nav>
        </div>
      </div>
      <Navigation appUrl={appUrl} />
    </header>
  )
};

export default Header;
