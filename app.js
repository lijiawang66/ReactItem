require('./app.scss')
import {Router,Route,hashHistory} from "react-router"
import Layout from "./components/layout"
import Section from "./components/section"
import Footer from "./components/footer"
import Header from "./components/header"

import Classify from "./components/classify";
import ShopCar from "./components/shopcar";
import My from "./components/my";

const routes= {
	path:"/",
	component:Footer,
	childRoutes:[
		{
			path:"/layout",
			component:Layout,
		},
		{
			path:"/classify",
			component:Classify
		},
		{
			path:"shopcar",
			component:ShopCar
		},
    {
      path:"my",
      component:My
    }
	]
}

ReactDOM.render(<Router routes={routes} history={hashHistory}/>,document.getElementById("app"))
ReactDOM.render(<Layout />,document.getElementById("app"))
ReactDOM.render(<Header/>,document.getElementById('header'))
ReactDOM.render(<Section/>,document.getElementById('section'))
ReactDOM.render(<Footer/>,document.getElementById('footer'))
