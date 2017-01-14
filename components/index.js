import {Link} from "react-router";

//想让路由在那个页面进行集合 那么我们需要在那个页面引入 {this.props.children}
//Index 组件的目的单页面路由的集合
class Index extends React.Component{
 	constructor(props){
    	super(props);
  }
	render(){
		return(
        <div id="box">
          {/*子路由componentIndex渲染的地方*/}
          {this.props.children}
          <div id="footer">
            <ul>
              <li>
                <Link to="/index">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/classify">
                  分类
                </Link>
              </li>
              <li>
                <Link to="/shopcar">
                  购物车
                </Link>
              </li>
              <li>
                <Link to="/my">
                  我的
                </Link>
              </li>
            </ul>
          </div>
        </div>
		)
	}
}

export default Index;
