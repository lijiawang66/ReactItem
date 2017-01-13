require('./app.scss')
var Layout = require('./components/layout')
var Section = require('./components/section')
var Footer = require('./components/footer')
import Header from "./components/header"
ReactDOM.render(<Layout />,document.getElementById("app"))
ReactDOM.render(<Header/>,document.getElementById('header'))
ReactDOM.render(<Section/>,document.getElementById('section'))
ReactDOM.render(<Footer/>,document.getElementById('footer'))