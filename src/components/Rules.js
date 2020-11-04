import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Rules() {
  return (
    <>
      <Container>
        <h2>Regeln</h2>
        <OrderedList>
          <li>
            Lobby-Code
            <strong> M6W17 </strong>
            verwenden
          </li>
          <li>Ergebnis nach dem Match in das Ergebnis-Feld eintragen</li>
          <li>Matches können ausgespielt oder simuliert werden</li>
          <li>Bots in der angegebenen Schwierigkeit verwenden</li>
          <li>Vorgegebene Maps verwenden</li>
          <li>
            Hero-Picks für Spieler und Bots werden anhand generierter Meta
            vorgegeben
          </li>
          <li>Nicht schummeln, man betrügt schließlich nur sich selbst</li>
          <li>Spaß haben</li>
        </OrderedList>
      </Container>
      <Container>
        <h2>Match-Regeln</h2>
        <OrderedList>
          <li>
            Matches sind im First to 3 Format, Ausnahme Finale, dort gilt First
            to 4
          </li>
          <li>
            <h3>Map-Reihenfolge</h3>
            <div>
              <OrderedList>
                <li>Control(vorgegeben)</li>
                <li>Hybrid(Losers-Pick)</li>
                <li>Assault(Losers-Pick)</li>
                <li>Escort(Losers-Pick)</li>
                <li>Control(Losers-Pick)</li>
                <li> + jede weitere Map: Control(Losers-Pick)</li>
              </OrderedList>
            </div>
          </li>
          <li>
            Das im Spielplan erst genannte Team startet als Team 1, das andere
            Team entsprechend als Team 2
          </li>
          <li>
            Ab der zweiten Map hat der Gewinner der vorherigen Map Seitenwahl,
            darf also aussuchen, ob er zuerst angreifen oder verteidigen möchte,
            entsprechend sind die Seiten anzupassen.
          </li>
          <li>
            Der Verlierer der vorangegangenen Map darf die nächste Map
            bestimmen. Siehe oben.
          </li>
          <li>
            <h3>Team-Setup: </h3>
            <div>
              <ul>
                <li>Main-Tank</li>
                <li>Off-Tank</li>
                <li>Hitscan-DPS</li>
                <li>Flex-DPS</li>
                <li>Main-Support</li>
                <li>Flex-Support</li>
              </ul>
            </div>
          </li>
        </OrderedList>
      </Container>
    </>
  );
}
