import ContactInfo from "../components/ContactInfo";
import FilterButtons from "../components/FilterButtons";
import GetSiteLinkCommand from "../components/GetSiteLinkCommand";
import TaggedContent from "../components/TaggedContent";
import { FilterProvider } from "../context/FilterContext";
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
				<div className="flex gap-6 max-h-[100px]">
					<img
						src={`${process.env.PUBLIC_URL}/eu.png`}
					/>
					<img
						src={`${process.env.PUBLIC_URL}/nome.png`}
					/>
				</div>
				<ContactInfo/>
				<div className="flex flex-col gap-4">
					<p>Hey there! My name is Rafa Teivfik, and I'm from Curitiba, Brazil.</p>
					<p>I'm a <b><i>game developer</i></b>, <b><i>programmer</i></b> and <b><i>game designer</i></b>, always ready to take on new challenges!</p>
					<p>I believe games are more than products to be consumed - they are experiences to be felt. I'm driven to make games by a deep artistic need to build worlds that resonate with others.</p>
				</div>
				<div className="mx-10 w-full h-1 bg-white"/>
				<FilterProvider>
					<GetSiteLinkCommand/>
					<FilterButtons/>
					<TaggedContent tags={["teste"]}>
						Testando
					</TaggedContent>
					{/* Projetos */}
					{/* Showcase geral */}
					<FilterButtons/>
					{/* Experiência */}
					Contexto de filtro
				</FilterProvider>
				<ContactInfo/>
			</div>
		);
	}
}

export default Home;