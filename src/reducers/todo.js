import { ITEM_PRICE, ITEM_CURRENCY } from "../constatns/todo_type";
import adject from "../images/adj.png";
const initialState = {
  list_inform: [
    {
      buy_pair: "HITBT/IOTA-",
      price: "0.33063",
      sell_exc: "BINANCE/IOTA-",
      sell_price: "0.334",
      trade: "353.3",
      arb: "1.01%[0.15%]",
      profit: "1",
      fees: "0.2",
      adj: adject,
    },
    {
      buy_pair: "BITFINEX/ZEC-",
      price: "35.50671",
      sell_exc: "KRAKEN/ZEC-",
      sell_price: "69.57002",
      trade: "2.1449",
      arb: "0.27%[0.15%]",
      profit: "0.2",
      fees: "0.2",
      adj: adject,
    },
    {
      buy_pair: "PERMANT/KER-",
      price: "48.1867",
      sell_exc: "LOREN/KER-",
      sell_price: "102.5725",
      trade: "152.479",
      arb: "0.37%[0.15%]",
      profit: "0.6",
      fees: "0.3",
      adj: adject,
    },
    {
      buy_pair: "TRAEX/NEO-",
      price: "18.4021",
      sell_exc: "BELRUN/NEO-",
      sell_price: "54.13102",
      trade: "1.3459",
      arb: "0.53%[0.15%]",
      profit: "3",
      fees: "0.8",
      adj: adject,
    },
    {
      buy_pair: "PRETIN/SIN-",
      price: "13.4804",
      sell_exc: "PORTL/SIN-",
      sell_price: "37.63132",
      trade: "620.359",
      arb: "0.24%[0.15%]",
      profit: "1",
      fees: "0.6",
      adj: adject,
    },
    {
      buy_pair: "WERDAN/PAT-",
      price: "3.5829",
      sell_exc: "MONETR/PAT-",
      sell_price: "29.1382",
      trade: "3.4551",
      arb: "0.31%[0.15%]",
      profit: "2",
      fees: "0.4",
      adj: adject,
    },
    {
      buy_pair: "LERMAT/POT-",
      price: "47.7521",
      sell_exc: "SERNAT/POT-",
      sell_price: "156.154",
      trade: "4.4519",
      arb: "0.74%[0.15%]",
      profit: "4.8",
      fees: "0.3",
      adj: adject,
    },
  ],
  currency: [
    {
      name_cur: "USD",
      course: 1,
    },
    {
      name_cur: "EUR",
      course: 0.86,
    },
    {
      name_cur: "PLN",
      course: 3.95,
    },
    {
      name_cur: "UAH",
      course: 26.63,
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_PRICE:
      return {
        ...state,
        list_inform: [...state.list_inform],
      };
    case ITEM_CURRENCY:
      return {
        ...state,
        currency: [...state.currency],
      };
    default:
      return state;
  }
};
