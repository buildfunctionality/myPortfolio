var TxtRotate = function (el, toRotate, period, fixedText) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
	this.fixedText=fixedText;
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
	
	//Stops when text completes
	if(this.loopNum >= this.toRotate.length) return;

    var i = this.loopNum;
    var fullTxt = this.toRotate[i];

	// Get the letter to substring that needs to be appended in the span
    this.txt = fullTxt.substring(0, this.txt.length + 1);
	
	
	if(this.loopNum === 0) {
	    this.el.innerHTML = '<span class="wrap">' +this.fixedText+' '+ this.txt + '</span>';
	}else{
	//adds a letter on the screen
	var spacing = '';
	var countSpacing = 0
	while(countSpacing < (this.fixedText.length * 2) + 1) {spacing = spacing+"&nbsp;"; countSpacing++;}
    this.el.innerHTML = '<span class="wrap">' +spacing+ this.txt + '</span>';
	}
    var that = this;
	
	//calculates the time  to wait before writing next letter
    var delta = 300 - Math.random() * 100;

	// If backspacing reduce it by  half
    if (this.isDeleting) { delta /= 2; }

	// If the word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
	    //add a delay of 500mx
        delta = 500;
		// add a new line (</br>
        this.el.innerHTML = `<span class="wrap">${this.el.textContent}</br></span>`;
		// add a sibling element to you element
		var next_txt=document.createElement("span");
		// add sibling element to the parent
		this.el.parentNode.appendChild(next_txt);
		
		// make your self new element, so that it writes into the new element next time
		this.el = next_txt;
		//  pick the next word
        this.loopNum++;
		//clear current txt
		this.txt = '';
    }

    setTimeout(function () {
      
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
		        var fixedText = elements[i].getAttribute('data-fixed');

        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period, fixedText);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};