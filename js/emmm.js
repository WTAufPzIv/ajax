$(document).ready(function(){

	$("#add1").click(function(){
		$("div").css({"display":"block"});
		$("span").each(function(){
			$(this).html("")
		});
		$.ajax({
			type:'get',
			url:'https://www.tangliurain.com/feTest/user/getUserInfo?num=1646',
			success:function(data,status){
				alert(status);
				$.each(data.userList,function(i,item){
					$($(".one")[i]).append(item.userName);
					$($(".two")[i]).append(item.sex);
					$($(".three")[i]).append(item.class);
				});
			},
			error:function(){
				alert(status);
			}
		})
		// $.getJSON("https://www.tangliurain.com/feTest/user/getUserInfo",function(data,status){
		// 	alert(status);
		// 	$.each(data.userList,function(i,item){
		// 		$($(".one")[i]).append(item.userName);
		// 		$($(".two")[i]).append(item.sex);
		// 		$($(".three")[i]).append(item.class);
		// 	});
		// });
	});

// for( var i = 0; i < 10; ){
// 	funtion(){
// 		settimeout({
// 			function(){
// 				i++;
// 			}
// 		},500)
// 	}
// 	consolg.log(i)
// }
   $(".delete").click(function(){
   	$(this).parents("tr").remove();
   });

});