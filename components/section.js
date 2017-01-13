var Section = React.createClass({
	getDefaultProps:function(){
		return{
			"url":"http://datainfo.duapp.com/shopdata/getBanner.php"
		}
	},
	getInitialState:function(){
		return{
			"reset":""
		}
	},
	componentWillMount:function(){
		var This = this;
		$.ajax({
			url:this.props.url,
			dataType:"jsonp",
			success:function(res){
				This.setState({
					"reset":res
				})
			}
		})
	},
	render:function(){
		// console.log(this.state.reset);
		var arr=[];
		var reset = this.state.reset;
		if(reset){
			for(var i = 0;i<reset.length;i++){
				console.log(reset[i].goodsName)
				arr.push(
					<p>{reset[i].goodsName}</p>
				)
			}
		}
		return(
			<div>
				<div>
					{arr}
				</div>
				
			</div>
		)
	}
})

module.exports = Section