function App() {
  return(
    <div id="header">
	    <div class="circle-logo">
            <img src="css/images/MJ.png" alt=""/>
        </div> 
             <h3><mono style={{color: "white"}}>Mahi</mono></h3>
	    <nav class="navbar">
	    	<ul class="navbar-links">
		        <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
		    </ul>
	    </nav>
	    <div class="hamburger">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
	    </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("NAVBAR"));
