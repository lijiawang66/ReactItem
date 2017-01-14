import {Link} from "react-router";
import {Router,Route,hashHistory} from "react-router"
class Footer extends React.Component{
	constructor(props){
    	super(props);
  }
	render(){
		return(
			<div>

				<ul>
				{this.props.children}
						<li><Link to="/layout">首页</Link></li>
						<li><Link to="/classify">分类</Link></li>
						<li><Link to="/shopcar">购物车</Link></li>
						<li><Link to="/my">我的</Link></li>
				</ul>
			</div>
		)
	}

}

export default Footer
