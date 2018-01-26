import React from "react";
import "./form.style.css";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            from: "",
            to: "",
            type: "",
            airplane: false,
            train: false,
            bus: false,
            userHasClicked: false
        };
    }

    // ----------------------------------------------------------------------------------------------------
    validateInput() {
        // eslint-disable-next-line
        if (!this.state.bus && !this.state.train && !this.state.airplane ||
            this.state.from === "" ||
            this.state.to === "" ||
            this.state.type === "" ||
            this.state.from === this.state.to) {
            console.log("User input is invalid!");
            return false;
        }
        console.log("User input is valid!");
        return true;
    }

    // ----------------------------------------------------------------------------------------------------
    handleSubmit() {
        this.setState({ userHasClicked: true });
        console.log("Submit!");

        // TODO Implement axios

        if (this.validateInput()) {
            let bus = this.state.bus ? "&bus=bus" : "";
            let train = this.state.train ? "&train=train" : "";
            let airplane = this.state.airplane ? "&airplane=airplane" : "";

            const uri = "link.com?" +
                "from=" + this.state.from.split(" ").join("+") + "&" +
                "to=" + this.state.to.split(" ").join("+") + "&" +
                "type=" + this.state.type +
                bus + train + airplane;

            console.log(uri);

            this.props.onUserClick(uri);
        }

    }

    // ----------------------------------------------------------------------------------------------------
    handleFromChange(event) {
        this.setState({ from: event.target.value });
        console.log("From: " + event.target.value);
    }

    // ----------------------------------------------------------------------------------------------------
    handleToChange(event) {
        this.setState({ to: event.target.value });
        console.log("To: " + event.target.value);
    }

    // ----------------------------------------------------------------------------------------------------
    handleTypeChange(event) {
        this.setState({ type: event.target.value });
        console.log("Type: " + event.target.value);

        if (event.target.value === "most_scenic") {
            this.setState({ airplane: false });
            this.refs.airplaneBox.disabled = true;
        }
        else {
            this.refs.airplaneBox.disabled = false;
        }
    }

    // ----------------------------------------------------------------------------------------------------
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(name + ": " + value);
    }

    // ----------------------------------------------------------------------------------------------------
    render() {
        return (
            <div className="main-form">
                <h3 className="form-title">Where do you want to go?</h3>
                <select value={this.state.from} className={this.state.userHasClicked && this.state.from === "" ? "search-field error" : "search-field"} onChange={(e) => this.handleFromChange(e)}>
                    <option value="" disabled selected>From...</option>
                    <option>New York</option>
                    <option>Philadelphia</option>
                    <option>Washington</option>
                    <option>New Orleans</option>
                    <option>Los Angeles</option>
                    <option>Seattle</option>
                    <option>Chicago</option>
                </select>
                <select value={this.state.to} className={this.state.userHasClicked && this.state.to === "" ? "search-field error" : "search-field"} onChange={(e) => this.handleToChange(e)}>
                    <option value="" disabled selected>To...</option>
                    <option>New York</option>
                    <option>Philadelphia</option>
                    <option>Washington</option>
                    <option>New Orleans</option>
                    <option>Los Angeles</option>
                    <option>Seattle</option>
                    <option>Chicago</option>
                </select>
                <select value={this.state.type} className={this.state.userHasClicked && this.state.type === "" ? "search-field error" : "search-field"} onChange={(e) => this.handleTypeChange(e)}>
                    <option value="" disabled selected>Type...</option>
                    <option value="fastest">Fastest</option>
                    <option value="cheapest">Cheapest</option>
                    <option value="most_scenic">Most scenic</option>
                </select>

                <div className="transportation">
                    <p>Means of transportation</p>
                    <input type="checkbox" name="bus" checked={this.state.bus} onChange={this.handleInputChange.bind(this)} />
                    <span className="fa fa-bus" /> Bus
                    <br />
                    <input type="checkbox" name="train" checked={this.state.train} onChange={this.handleInputChange.bind(this)} />
                    <span className="fa fa-subway" /> Train
                    <br />
                    <input type="checkbox" name="airplane" checked={this.state.airplane} onChange={this.handleInputChange.bind(this)} ref="airplaneBox" />
                    <span className="fa fa-plane" /> Airplane
                </div>

                {/* <input type="submit" id="calculate-btn" value="Calculate" onClick={(e) => this.handleSend} /> */}
                {!this.state.airplane && !this.state.bus && !this.state.train && this.state.userHasClicked ? <p className="error-msg">Select at least 1 type of vehicle.</p> : ""}
                {this.state.from !== "" && this.state.to !== "" && this.state.from === this.state.to && this.state.userHasClicked ? <p className="error-msg">Select 2 different cities.</p> : ""}
                <button id="calculate-btn" onClick={(e) => this.handleSubmit(e)}>Calculate</button>
            </div>
        );
    }
}

export default Form;
