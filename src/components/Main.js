import React, { useState, useEffect } from "react";
import Select from "./Select";
import Loader from "./Loader";

const Main = ({ min, max, url }) => {
  const [market, setMarket] = useState([]);
  const [orderbook, setOrderbook] = useState([]);
  const [currentPair, setCurrentPair] = useState(`BTC-PLN`);
  const [bid, setBid] = useState("");
  const [ask, setAsk] = useState("");

  const getMarket = async () => {
    const marketCodes = [];
    const response = await fetch(`${url}ticker`);
    const json = await response.json();
    for (const market in json.items) {
      marketCodes.push(market);
    }
    setMarket(marketCodes);
  };

  useEffect(() => {
    getMarket();
    const orderbookInterval = () => {
      return setInterval(async () => {
        const response = await fetch(`${url}orderbook/${currentPair}`);
        const json = await response.json();
        setOrderbook(json);
        const bidOffers = json.buy.map((b) => (
          <ul className="offers">
            <li>{b.ra}</li>
            <li>{b.ca}</li>
            <li>{(b.ra * b.ca).toFixed(2)}</li>
            <li>{b.co}</li>
          </ul>
        ));
        setBid(bidOffers);

        const askOffers = json.sell.map((b) => (
          <ul className="offers">
            <li>{b.ra}</li>
            <li>{b.ca}</li>
            <li>{(b.ra * b.ca).toFixed(2)}</li>
            <li>{b.co}</li>
          </ul>
        ));
        setAsk(askOffers);
      }, 2500);
    };
    const int = orderbookInterval();
    return () => clearInterval(int);
  }, [currentPair, orderbook]);

  return (
    <main>
      <div className="top">
        <Select
          currentPair={currentPair}
          setCurrentPair={setCurrentPair}
          market={market}
        />
        <span>{`Spread: ${(min / max).toFixed(4)}`}</span>
        <div className="minMax">
          <div className="min">{`24h max: ${max}`}</div>
          <div className="max">{`24h min: ${min}`}</div>
        </div>
      </div>
      <div className="columnsContainer">
        <div className="columnLeft">
          <div className="bid">BID</div>
          <div className="overflow">
            <ul className="titles">
              <li>Kurs</li>
              <li>Ilość </li>
              <li>Suma PLN</li>
              <li>Liczba ofert</li>
            </ul>
            {bid ? bid : <Loader/>}
          </div>
        </div>
        <div className="columnSeparator">
          <div className="separator"></div>
        </div>
        <div className="columnRight">
          <div className="ask">ASK</div>
          <div className="overflow">
            <ul className="titles">
              <li>Kurs</li>
              <li>Ilość </li>
              <li>Suma PLN</li>
              <li>Liczba ofert</li>
            </ul>
            {ask ? ask : <Loader/>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
