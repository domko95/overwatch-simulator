import { useState } from 'react';

export default function Form() {
  const [region, setRegion] = useState('');
  const handleClick = (value) => {
    setRegion(value);
    localStorage.setItem('region', region);
  };
  return (
    <>
      <details>
        <summary>
          <h2>Anmeldung</h2>
        </summary>
        <button type="button" value="bfc" onClick={() => handleClick('bfc')}>
          Baden-Württermberg
        </button>
        <button type="button" value="apex" onClick={() => handleClick('apex')}>
          Bayern
        </button>
        <button type="button" value="ea" onClick={() => handleClick('ea')}>
          Brandenburg, Berlin, Sachsen, Sachsen-Anhalt, Thüringen
        </button>
        <button type="button" value="nwn" onClick={() => handleClick('nwn')}>
          Bremen, Niedersachsen
        </button>
        <button type="button" value="nl" onClick={() => handleClick('nl')}>
          Hamburg, Mecklemburg-Vorpommern, Schleswig-Holstein
        </button>
        <button type="button" value="hsr" onClick={() => handleClick('hsr')}>
          Hessen, Rheinland-Pfalz, Saarland
        </button>
        <button type="button" value="nrw" onClick={() => handleClick('nrw')}>
          Nordrhein-Westfalen
        </button>
        <button type="button" value="alps" onClick={() => handleClick('alps')}>
          Österreich, Schweiz
        </button>
        <button type="button" onClick={() => handleClick('')}>
          Clear
        </button>
      </details>
      <a href="https://www.dropbox.com/s/kqhstal05omzona/OW%20Projekt%20A.xlsx?dl=0">
        Excel-Sheet Download
      </a>
    </>
  );
}
