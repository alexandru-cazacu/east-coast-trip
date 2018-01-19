import React from "react";
import "../styles/form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            from: 0,
            to: 0,
            type: 0,
            vehicles: {
                bus: 0,
                train: 0,
                airplane: 0
            }
        };
    }

    handleSubmit() {

    }

    render() {
        return (
            <form className="main-form">
                <h3 className="form-title">Where do you want to go?</h3>
                <select name="from" className="search-field">
                    <option value="" disabled selected>From...</option>
                    <option>New York</option>
                    <option>Philadelphia</option>
                    <option>Washington</option>
                    <option>New Orleans</option>
                    <option>Los Angeles</option>
                    <option>Seattle</option>
                    <option>Chicago</option>
                </select>
                <select name="to" className="search-field">
                    <option value="" disabled selected>To...</option>
                    <option>New York</option>
                    <option>Philadelphia</option>
                    <option>Washington</option>
                    <option>New Orleans</option>
                    <option>Los Angeles</option>
                    <option>Seattle</option>
                    <option>Chicago</option>
                </select>
                <select name="type" className="search-field">
                    <option value="" disabled selected>Type...</option>
                    <option>Fastest</option>
                    <option>Most scenic</option>
                    <option>Cheapest</option>
                </select>

                <div className="transportation">
                    <p>Means of transportation</p>
                    <input type="checkbox" name="bus" value="bus" />
                    <span className="fa fa-bus" /> Bus
                    <br />
                    <input type="checkbox" name="train" value="train" />
                    <span className="fa fa-subway" /> Train
                    <br />
                    <input type="checkbox" name="airplane" value="airplane" />
                    <span className="fa fa-plane" /> Airplane
                </div>

                {/* <input type="submit" id="calculate-btn" value="Calculate" onClick={(e) => this.handleSend} /> */}
                <button id="calculate-btn" onClick={(e) => this.handleSubmit}>Calculate</button>
            </form>
        );
    }
}

export default Form;
