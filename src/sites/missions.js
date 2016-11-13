import React from 'react';
import MissionsComponent from '../components/missions';

export default class Missions {
  
  static componentWithData(missions) {
    return <MissionsComponent missions={missions} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Mission.fromRawData(raw))
  }
  
}

class Mission {
  
  static fromRawData(raw) {
    const mission = new Mission();
    
    const launchyear = raw.missionlaunchy;
    const launchmonth = raw.missionlaunchm ? `${raw.missionlaunchm}.` : '';
    const launchday = raw.missionlaunchd ? `${raw.missionlaunchd}.` : '';
    mission.launchDate = `${launchday}${launchmonth}${launchyear}`;
    mission.name = raw.missionname;
    mission.link = raw.missionlink;
    mission.country = raw.missioncountry;
    if (raw.missionrocket) {
      mission.rocket = new Rocket(raw.missionrocket, raw.rocketlink);
    }
    if (raw.missionpad) {
      mission.pad = new Pad(raw.missionpad, raw.padlink);
    }
    mission.destination = raw.missiontarget;
    mission.crew = raw.missioncrew;
    mission.duration = raw.missionduration;
    const endyear = raw.missionendy ? `${raw.missionendy}`: '';
    const endmonth = raw.missionendm ? `${raw.missionendm}.` : '';
    const endday = raw.missionendd ? `${raw.missionendd}.` : '';
    mission.endDate = `${endday}${endmonth}${endyear}`;
    
    return mission;
  }
  
}

class Rocket {
  
  constructor(name, wikipediaUrl) {
    this.name = name;
    this.wikipediaUrl = wikipediaUrl;
  }
  
}

class Pad {
  
  constructor(name, wikipediaUrl) {
    this.name = name;
    this.wikipediaUrl = wikipediaUrl;
  }
  
}

/*
  {
    "missionlaunchy": "1957", 
    "missionlaunchm": "10", 
    "missionlaunchd": "04", 
    "missionname": "Sputnik 1", 
    "missioncountry": "UdSSR", 
    "missionrocket": "Sputnik (R-7)", 
    "rocketlink": "https://de.wikipedia.org/wiki/R-7", 
    "missionpad": "Ba LC-1/5", 
    "padlink": "https://de.wikipedia.org/wiki/Baikonur", 
    "missioncrew": "-", 
    "missiontarget": "Erdorbit", 
    "missionlat": "45.92", 
    "missionlong": "63.342", 
    "missionduration": "92d ", 
    "missionendy": "1958", 
    "missionendm": "01", 
    "missionendd": "04", 
    "missionlink": "https://de.wikipedia.org/wiki/Sputnik_1", 
    "missiondescript": "Sputnik 1 (russisch Спутник für Begleiter (der Erde)) war der erste künstliche Erdsatellit. Mit ihm begann am 4. Oktober 1957 das Zeitalter der Raumfahrt. Der Satellit war zwar von der Sowjetunion für den Verlauf des Internationalen Geophysikalischen Jahres (IGY 1957-58) angekündigt worden, doch rechnete die westliche Fachwelt erst Mitte 1958 mit der Fertigstellung der sowjetischen Entwicklungen und wurde durch den Start überrascht. Auch in der westlichen Öffentlichkeit löste der Start Besorgnisse aus; diese wurden mit dem Begriff Sputnik-Schock benannt. Dieser Sputnik - späteres Synonym für alle sowjetischen Satelliten, auch der Kosmos-Serie und anderer „Sputniks“ - wog 83,6 kg und damit fünfmal mehr als der US-Explorer 1 vom 31. Januar 1958 und war eine mit Stickstoff gefüllte, hochglanzpolierte Aluminiumkugel. Sie bestand aus 2 mm starkem Blech aus der Aluminiumlegierung AlMg6T, hatte 58 cm Durchmesser und zwei Antennenpaare (je 2,4 m bzw. 2,9 m lang) ragten aus ihr heraus. Die Trägerrakete R-7 des Satelliten war eine Weiterentwicklung militärischer Interkontinentalraketen durch den Konstrukteur Sergei Pawlowitsch Koroljow. Der Satellit trug zwei Funksender vom Typ D 200 mit einem Watt Leistung für codierte Kurzwellensignale, in denen Innendruck und -temperatur verschlüsselt waren, auf einer Frequenz von 20,005 und 40,002 MHz, die 21 Tage funktionsfähig blieben. Die „piepsenden“ Signale des Sputnik konnten an sich auf der ganzen Welt empfangen werden, wenn der verwendete Empfänger für die schwachen 1-Watt-Signale empfindlich genug war. Im westlichen Europa konnte dabei ein Astronom den ersten Erfolg verkünden: Heinz Kaminski von der Volkssternwarte Bochum. Nach 92 Tagen trat Sputnik 1 in die dichteren Atmosphärenschichten ein und verglühte am 4. Januar 19507."
  },
 */