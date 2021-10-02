import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class MainPage extends Component {
  state = {
    list: [],
    currency: "USD",
    curr_value: 1,
    num_list: 0,
  };

  getRandomNum = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  randomList = () => {
    const price_pay = this.props.sell;
    let newArr = [];
    const num = Math.round(this.getRandomNum(2, 6));
    this.setState({ num_list: num });
    for (let i = 0; i <= num; i++) {
      let rand = Math.round(this.getRandomNum(0, 6));
      newArr.push(price_pay[rand]);
    }
    return newArr;
  };

  changeCurrency = (e) => {
    this.setState({ currency: e.target.value });
    const newCurr = this.props.currency;
    const result = newCurr.find(({ name_cur }) => name_cur == e.target.value);
    this.setState({ curr_value: result.course });
    return result.course;
  };
  changePrice = (el) => {
    const res = el * this.state.curr_value;
    return res;
  };
  componentDidMount = () => {
    setInterval(() => {
      const array_price = this.randomList();
      this.setState({ list: array_price });
    }, 5000);
  };

  render() {
    return (
      <div className="general">
        <div className="mainBlock">
          <label className="clear">Clear filter</label>
          <div className="find-block">
            <div className="find">
              <label>Buy advice exchange</label>
              <input type="text" />
            </div>
            <div className="find">
              <label>Buy advice currency</label>
              <input type="text" />
            </div>
            <div className="find">
              <label>Buy advice currency</label>
              <input type="text" />
            </div>
            <div className="find">
              <label>Sell advice exchange</label>
              <input type="text" />
            </div>
            <button>Filter Arbitrage</button>
          </div>
          <table className="font-name">
            <tr>
              <th>Buy exchange pair</th>
              <th>Buy price</th>
              <th>Sell exchange</th>
              <th>Sell price</th>
              <th>Trade amount</th>
              <th>Arb%[Free%]</th>
              <th>
                Exp.profit <br />
                {this.state.currency}
              </th>
              <th>
                Exp.fees <br />
                {this.state.currency}
              </th>
              <th>Adj.</th>
            </tr>
            {this.state.list.map((el) => {
              return (
                <tr key={el.id}>
                  <td>
                    {el.buy_pair}
                    {this.state.currency}
                  </td>
                  <td>{this.changePrice(el.price)}</td>
                  <td>
                    {el.sell_exc}
                    {this.state.currency}
                  </td>
                  <td>{this.changePrice(el.sell_price)}</td>
                  <td>{el.trade}</td>
                  <td>{el.arb}</td>
                  <td>{el.profit}</td>
                  <td>{el.fees}</td>
                  <td>
                    <img alt="adj" src={el.adj} />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="right-blocks">
          <div className="choose-curr">
            <h4>Dashboard profit currency</h4>
            <div className="curren">
              <select
                className="form-control"
                onChange={this.changeCurrency}
                value={this.state.currency}
              >
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
                <option value="PLN">PLN</option>
                <option value="EUR">EUR</option>
              </select>
              <label>
                Selected currency will affect all prifit in dashboard
              </label>
            </div>
          </div>
          <div className="instance">
            <h4>Instance</h4>
            <div className="instan-blocks">
              <div>
                <label>Most profit instance</label>
                <h4>BTS-{this.state.currency}</h4>
              </div>
              <div className="active">
                <label>Active instance</label>
                <h4>{this.state.num_list}</h4>
              </div>
              <div>
                <label>Total instance</label>
                <h4>5</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sell: state.todo.list_inform,
    currency: state.todo.currency,
  };
}
export default connect(mapStateToProps)(MainPage);
