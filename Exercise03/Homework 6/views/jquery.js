$("input").on("change input textInput", () => {
	var id = $("input[name='id']").val();
	var name = $("input[name='name']").val();
	var price = $("input[name='price']").val();

	var query ="?";
	if (id) {
		query += "id="+id+"&";
	}
	if (name) {
		query += "name="+name+"&";
	}
	if (price) {
		query += "price="+price;
	}
	var url = "http://localhost:3000/findToy/"+query;

	$.getJSON(url, (toys, status) => {
		if (status) {
			console.log(status);
		} else {
			var results = $("#results");
			resutls.html("");
			toys.forEach((toy) => {
				results.append("<li><i>"+toy.id+"</i>, ");
				results.append(toy.name + ", $");
				results.append(toy.price + ". </li>");
				console.log(results);
			});
		}
	});
});