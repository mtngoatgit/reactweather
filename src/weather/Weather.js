import React from 'react';
import City from './City.js';

const citylist = ["Chicago", "Orem", "New York", "Brisbane", "Detroit", "Las Vegas", "Seattle", "Philadelphia"]
//WEATHER COMPONENT
export default React.createClass({
	getInitialState() {
		return {
			cityInput: "",
			cityList: [],
		}
	},
	render() {
		return (
			<div>
					<input
						placeholder="What city would you like to know about?"
						value={this.state.cityInput}
						onChange={this.state.handleChange}
						onKeyDown={this.state.handleInput}
					/>
			</div>
		)
	},
	handleChange(e) {
		this.setState({
			cityInput: e.target.value,
		});
	},
	handleInput(e) {
		if (e.keyCode === 13) {
			this.setState({
				cityList: this.state.cityList.concat([this.state.cityInput]),
				cityInput: "",
			})
		}
	}
});









{
	// <input placeholder="type city here"
	// 	value={this.state.cityInput}
	// 	onChange={this.handleChange}
	// 	onKeyDown={this.handleInput} />
	// {this.state.cityList.map((city, index) => {
	// 	return <City key={index} city={city}/>
	// })}
}





{
	// <select onChange={e => this.setState({cityList: this.state.cityList.concat([e.target.value])})}>
	// 	{citylist
	// 		.filter((city) => {
	// 			return this.state.cityList.indexOf(city) === -1;
	// 		})
	// 		.map((city) => {
	// 			return <option key={city} value={city}>{city}</option>
	// 		})}
	// </select>
}
