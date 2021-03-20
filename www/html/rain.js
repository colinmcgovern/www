$(document).ready(function() {
	update_canvas();
});

$(window).on('resize', function(){
	update_canvas();
});

var interval;

function update_canvas(){

	clearInterval(interval);

	var c = document.getElementById("c");
	var ctx = c.getContext("2d");

	var canvas = $('#canvas');
    canvas.css("width", $(document).width());
    canvas.css("height", $(document).height());

	ctx.clearRect(0, 0, c.width, c.height);

	c.width = $(document).width();
	c.height = $(document).height();

	var chars = 
	"日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ012345789:・.\"=*+-<>¦｜ç";
	chars = chars.split("");

	var font_size = 20;
	var columns = c.width/font_size;
	var drops = [];
	for(var x = 0; x < columns; x++)
		drops[x] = 1; 

	function draw(){
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, c.width, c.height);
		
		ctx.fillStyle = "#0F0"; 
		ctx.font = font_size + "px times new roman bold";
		for(var i = 0; i < drops.length; i++)
		{

			var text = chars[Math.floor(Math.random()*chars.length)];
			ctx.fillText(text, i*font_size, drops[i]*font_size);
			
			if(drops[i]*font_size > c.height && Math.random() > 0.975)
				drops[i] = 0;

			drops[i]++;
		}
	}

	interval = setInterval(draw, 33);
}

