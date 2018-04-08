import "./app.scss";
import * as React from "react";
import { render } from "react-dom";

import Selector from "./components/selector/selector";
import * as Card from "./components/card/card";
import Pages from "./components/pages/pages";
import PagesStore from "./components/pages/store";

interface CardData{
	url: string;
	kind: string;

	provider: string;
	title: string;
	category: string;
	tags: string[];
	content: string;
	id: string;
}

class App extends React.Component {

	//TEST OBJECTS!
	private recentCards: CardData[] = [
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad753c12b0fdc700d35"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 2",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad75323fwef2b0fdc700d36"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 3",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad753c23dfsf23thrdc700d37"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 3",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad23rsdf230fdc700d37"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 3",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad7523rfdwsfc700d37"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 3",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad345reb0fdc700d37"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 3",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad723412^12b0fdc700d37"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 3",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad753c1^1212b0fdc700d37"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 3",
			"category": "test",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad753c12b234dc700d37"
		}
	]
	private bookedCards: CardData[] = [
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang",
			"category": "go",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad753c12b0fdc700d35"
		},
		{
			"provider": "Medium",
			"url": "https://medium.com/@saginadir/why-i-love-golang-90085898b4f7",
			"kind": "article",
			"title": "Why I Love Golang 3",
			"category": "test",
			"tags": [
				"programming"
			],
			"content": "I love the Go programming language, or as some refer to it, Golang. It’s simple and it’s great.\r\n\r\nI write this on a tangent. Didn’t expect Golang to be so good.\r\n\r\nI first picked up go around January 2016, it had a relative small but enthusiastic community here in Israel.\r\n\r\nI didn’t think much of it at the time, I was honing my programming skills and Golang was just a tool I’ve used to accomplish a task.\r\n\r\nEven one year ago, using go was brilliant. The process was straightforward once I’ve got the general hang of the language.\r\n\r\nI wrote a crucial piece of code for Visualead, the company I work for, and it didn’t let us down, still running in production a year later with zero maintenance since then.\r\n\r\nRecently I found myself again using Golang again, and I felt compelled to write about the reasons I fell in love with Golang.\r\n\r\nThe GOPATH environment\r\nThis is one of the first things you’ll have to handle once you begin writing in Go.\r\n\r\nSetup your GOPATH directory anywhere on your computer, complete with bin, src, and pkg directories and you are ready to begin writing.\r\n\r\n",
			"id": "5ac7dad753c12b234dc700d37"
		}
	]

	componentDidMount(){
		
		PagesStore.showPage(0);

		this.recentCards.map((value: CardData) => {
			PagesStore.addRecent(
				<Card.default
					key={Math.random().toString()}
					identifier={value.id}
					category={value.category}
					tags={value.tags}
					bookmarked={false}
					provider={value.provider}

					icon={<img src={"https://www.google.com/s2/favicons?domain_url=" + value.url} />}
					body={{
						headline: value.title,
						image: null,
						content: value.content
					}}
				/>
			);
		});

		this.bookedCards.map((value: CardData) => {
			PagesStore.addBookmark(
				<Card.default
					key={Math.random()}
					identifier={value.id}
					category={value.category}
					tags={value.tags}
					bookmarked={true}
					provider={value.provider}
					icon={<img src={"https://www.google.com/s2/favicons?domain_url=" + value.url} />}
					body={{
						headline: value.title,
						image: null,
						content: value.content
					}}
				/>
			);
		});
	}

	render() {

		return (
			<div id={"app-base"}>
				<Selector tabs={[
					{
						title: "Recent",
						icon: 
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 299.995 299.995">
								<path d="M149.995,0C67.156,0,0,67.158,0,149.995s67.156,150,149.995,150s150-67.163,150-150S232.834,0,149.995,0z     M214.842,178.524H151.25c-0.215,0-0.415-0.052-0.628-0.06c-0.213,0.01-0.412,0.06-0.628,0.06    c-5.729,0-10.374-4.645-10.374-10.374V62.249c0-5.729,4.645-10.374,10.374-10.374s10.374,4.645,10.374,10.374v95.527h54.47    c5.729,0,10.374,4.645,10.374,10.374C225.212,173.879,220.571,178.524,214.842,178.524z" fill="#FFFFFF"/>
							</svg>,
						onClick: () => PagesStore.showPage(0)
					},
					{
						title: "Bookmarks",
						icon: 
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 56.868 56.868">
								<path d="M46.934,0.011V0h-36.91c-3.358,0-6.09,2.731-6.09,6.09v50.778l19-12.666l19,12.666V32v-7V14h2v11h9V6.136  C52.934,2.819,50.262,0.096,46.934,0.011z" fill="#FFFFFF"/>
							</svg>,
						onClick: () => PagesStore.showPage(1)
					},
					{
						title: "",
						icon: 
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 268.765 268.765">
								<path fill="white" d="M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z"/>
							</svg>,
						onClick: () => PagesStore.showPage(2)
					}
				]} selected={0} />
				<Pages />
			</div>
		);
	}
}

render(<App />, document.getElementById("react-base"));



import * as Browserium from "../../utils/Browserium"

const frontceiver = new Browserium.Frontceiver("front");

frontceiver.sendToBackground("test");