import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*

// shallow case - hence the name shallo

describe("test suite for app component", function() {
	
	it("only one element in app class", function() {
	const wrapper = shallow(<App />);
	expect(wrapper)
	});
});

// deep test - mount creates all depndencies

it("dog list contains two dogs", function() {
	const wrapper = mount(<App />);
	expect(wrapper.find("Dogs").find("DogItem")).length(2);
});

// test for user interaction

it("successfully adds dog to list when form submitted", function() {
	const wrapper = mount(<App />);
	const adddog = wrapper.find("AddDog");

	adddog.find("#dogName").get(0).value = "Lola";
	adddog.find("#imageURL").get(0).value = "https://static.pexels.com/photos/54386/pexels-photo-54386.jpeg";
	adddog.find("#dogBreed").get(0).value = "Beagle";

	const form = adddog.find("form");
	form.simulate("submit");
	expect(wrapper.find("Dogs").find("DogItem")).length(3);
	expect(wrapper.state().dogs[2].name == "Lola");
});

it("removes dog from list when deleted", function() {
	const wrapper = mount(<App/>);
	const deleteLink = wrapper.find("a").first();

	deleteLink.simulate("click");

	expect(wrapper.find("Dogs").find("DogItem")).length(1);
});
*/
