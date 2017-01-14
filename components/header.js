class Header extends React.Component{
	render(){
		return(
			<div>
				<div className="banner_img">
					<div className="swiper-container">
					    <div className="swiper-wrapper">
					        <div className="swiper-slide"><img src="/images/banner1.jpg" /></div>
					        <div className="swiper-slide"><img src="/images/banner2.jpg" /></div>
					        <div className="swiper-slide"><img src="/images/banner3.jpg" /></div>
					        <div className="swiper-slide"><img src="/images/banner4.jpg" /></div>
					        <div className="swiper-slide"><img src="/images/banner5.jpg" /></div>
					        <div className="swiper-slide"><img src="/images/banner6.jpg" /></div>
					    </div>
					    <div className="swiper-pagination"></div>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        autoplay : 3000,
		        autoplayDisableOnInteraction : true
		     });
	}
}
export default Header
