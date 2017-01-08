import React from 'react';
import {StarNotes} from './notes';
import LetterLinks from './chunks/letter-links';

const StarsComponent = ({groupedStars, constellations}) => {
  const allFirstLetters = Object.keys(groupedStars);
  const starsIterable = allFirstLetters.map(key => groupedStars[key]);

  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="stars pure-u-1 center">
        <h1>Sterne</h1>
        <h3>strahlende Objekte im All</h3>
      </div>
      <div id="todo" className="pure-u-1">
        @me make it responsive<br />
        @wolfram pls make the filter work<br />
        @all find a way for sorter and filter on small screens (toggle-buttons?)
      </div>
      <div id="functionArea" className="stars pure-u-1">
        <div id="sort" className="stars">
          <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
          <div id="sortArea">
            <form id="sortStars" className="sort-form">
              <label>Sortieren:</label>
              <select name="sortStars">
                <option value="sortStarsNameUp" selected>Name - aufsteigend</option>
                <option value="sortStarsNameDown">Name - absteigend</option>
                <option value="sortStarsMagUp">Helligkeit - aufsteigend</option>
                <option value="sortStarsMagDown">Helligkeit - absteigend</option>
                <option value="sortStarsDistanceUp">Entfernung - aufsteigend</option>
                <option value="sortStarsDistanceDown">Entfernung - absteigend</option>
                <option value="sortStarsMassUp">Masse - aufsteigend</option>
                <option value="sortStarsMassDown">Masse - absteigend</option>
                <option value="sortStarsRadiusUp">Radius - aufsteigend</option>
                <option value="sortStarsRadiusDown">Radius - absteigend</option>
              </select>
            </form>
          </div>
        </div>
        <div id="filter" className="missions right">
          <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
          <div id="filterArea">
            <FilterRow constellations={constellations} />
          </div>
        </div>
        <LetterLinks letters={allFirstLetters} />
      </div>
      <div id="dataArea" className="stars pure-u-1">
        <div id="starsTable">
          {starsIterable.map((group, idx) => <StarsGroupComponent group={group} key={idx} />)}
        </div>
      </div>
      <StarNotes />
    </main>
  );
};

export default StarsComponent;

const FilterRow = ({constellations}) => {
  return (
            <form id="filterStarsConstellation" className="filter-form">
              <label>Sternbild:</label>
              <select name="constellation">
                <option selected>alle</option>
                {constellations.map((constellation, idx) => <option key={idx}>{constellation}</option>)}
              </select>
            </form>
  );
};

const StarsGroupComponent = ({group}) => {
  const groupKey = group.key;
  const stars = group.data;

  return (
          <div id={groupKey} className="pure-u-1 letter-section">
            <div className="pure-u-1 letter-section-header">
              <div className="first-letter pure-u-1-2">
                <p name={`#${groupKey}`}>{groupKey}</p>
              </div>
              <div className="scroll-up-arrow pure-u-1-2 right">
                <p><a href="javascript:self.scrollTo(0,0);">&uarr;</a></p>
              </div>
            </div>
            {stars.map((star, idx) => <StarComponent star={star} key={idx} />)}
          </div>
  );
};

const StarComponent = ({star}) => {
  const sunIcon = <sub>&#9737;</sub>;
  const noop = () => {};
  return (
            <div className="star-row data-row pure-u-1">
              <div className="star-name pure-u-1 pure-u-md-1-3 center">
                <p className="pure-u-1"><a href={star.link}>{star.name.name}</a></p>
                {star.name.bayer ? <p className="pure-u-1">({star.name.bayer})</p> : ''}
              </div>
              <div className="star-data1 pure-u-1 pure-u-md-1-3">
                {star.constellation ? <p className="pure-u-1-2 pure-u-md-1 center"><b>Sternbild:</b> <a href={star.constLink}>{star.constellation}</a></p> : ''}
                {star.distance ? <p className="pure-u-1-2 pure-u-md-1 center"><b>Entfernung:</b> {star.distance} Lj</p> : ''}
              </div>
              <div className="star-data2 pure-u-1 pure-u-md-1-4 center">
                <p className="pure-u-1-3 center">{star.appmagnitude ? `${star.appmagnitude} mag` : ''}</p>
                <p className="pure-u-1-3 center">{star.mass ? `${star.mass} M${sunIcon}` : ''}</p>
                <p className="pure-u-1-3 center">{star.radius ? `${star.radius} R${sunIcon}` : ''}</p>
              </div>
            </div>
  );
};
