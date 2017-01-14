require('./app.scss')
import {Router,Route,hashHistory} from "react-router"

import Layout from "./components/layout"
import Header from "./components/header"
import Section from "./components/section"

import Index from "./components/index"
import Classify from "./components/classify"
import ShopCar from "./components/shopcar"
import My from "./components/my"

const routes= {
	path:"/index",
	component : Index, //路由开始显示的页面,
	indexRoute : {component:Layout},
	childRoutes:[
		{
			path:"/index",
			component:Layout
		},
		{
			path:"/classify",
			component:Classify
		},
		{
			path:"/shopcar",
			component:ShopCar
		},
    {
      path:"/my",
      component:My
    }
	]
}

ReactDOM.render(<Router routes={routes} history={hashHistory}/>,document.getElementById("app"))
ReactDOM.render(<Header/>,document.getElementById('header'))
ReactDOM.render(<Section/>,document.getElementById('section'))
