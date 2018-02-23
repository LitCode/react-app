import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StaticRouter } from 'react-router';
import ShowCard from '../ShowCard';
import Header from '../Header';
import preload from '../../data.json';

Enzyme.configure({adapter: new Adapter()})

test('Search renders correctly', () => {
	let data = [
	{imdbID:"abc", title: "billion"},
	 {imdbID: "ayuc", title: "lite"}
	 ]
const component = shallow(<Search preload={data} />)

	expect(component).toMatchSnapshot();
})

test('Search should render correct anmount of showcard components', () => {
	let data = [
		{imdbID:"hjg", title: "second stub"},
	 	{imdbID: "abdc", title: "sec"}
	 ]


	const component = shallow(<Search preload={data} />)

	expect(data.length).toEqual(component.find(ShowCard).length)
});

test("should render correct amount of showcard component for Search field", () => {

	let searchWord = "black"; 
	const component = shallow(<Search preload={preload.shows}  />);
	const headerComponent = shallow(<Header searchInput/>);

	headerComponent.find('input').simulate('change', { target: { value: searchWord } });

	const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase() >= 0 ))

	expect(showCount.length).toEqual(component.find(ShowCard).length);

	
})