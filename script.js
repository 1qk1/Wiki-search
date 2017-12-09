$(document).ready(function() {
  var searchtext = "";
  function search(){
  	searchtext = $("#searchbox").val();
  	$("#searchbox").val("").blur();
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchtext + "&callback=?", function(data){
    	var results = data.query.search;
    	$("#results").empty();
    	if (results != 0){
  	results.forEach(function(el){
  		$("#results")
    	.hide()
  		.append("<li><a target='_blank' href='https://en.wikipedia.org/?curid=" + el.pageid + "'><h5>" + el.title + "</h5>" + el.snippet + "</a></li>")
    	.show("normal");
  	  });
  } else{
  	$("#results").append("<h3>No results :(</h3>");
  }
    });
  }
  $("#searchbutton").on("click", search); 
  $("#searchbox").on("keypress", function(a){
  	if (a.which === 13){
  		a.preventDefault();
  		search();
  	}
  });
});
