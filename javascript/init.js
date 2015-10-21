$(document).ready(function() {
	
	
	$("#submit").click(function(i) {
		i.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var awesome = $("#awesome").val();
		if($("#recommend").is(":checked")) { 
			var recommend = "Yes, I will";
		} else {
			var recommend = "No, I won't";
		}
		$("#modal span[data-name=name]").text(name);
		$("#modal span[data-email=email]").text(email);
		$("#modal p[data-message=message]").text(message);
		$("#modal span[data-awesome=awesome]").text(awesome);
		$("#modal strong[data-recommend=recommend]").text(recommend);
		$("#modal").fadeIn(500);
		return false;
	});
	$("button").click(function() {
		$("#modal").fadeOut(300);
	});
});