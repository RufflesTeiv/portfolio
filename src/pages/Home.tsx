import ContactInfo from "../components/ContactInfo";
import './../App.css';
import React from 'react';


class Home extends React.Component {

	render() {
		return (
			<div
				className="bg-repeat w-full h-full flex flex-col gap-10 pt-10 text-white items-center"
				style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background-tile.png)` }}
			>
				{/* Título */}
				<p className="text-5xl">rafa.teivfik</p>
				{/* Informações de contato */}
				<ContactInfo/>
				<div className="flex flex-col gap-4">
					<p>Hey there! My name is Rafa Teivfik, and I'm from Curitiba, Brazil.</p>
					<p>I'm a <b><i>game developer</i></b>, <b><i>programmer</i></b> and <b><i>game designer</i></b>, always ready to take on new challenges!</p>
					<p>I believe games are more than products to be consumed—they are experiences to be felt. I'm driven to make games by a deep artistic need to build worlds that resonate with others.</p>
				</div>
				<ContactInfo/>
			</div>
		);
	}
}

export default Home;