var url = "https://restcountries.eu/rest/v1/name/";
var capital = "https://restcountries.eu/rest/v2/alpha/col";
var countriesList = $("#countries");

$("#search").click(searchCountries);

function searchCountries() {
  var countryName = $("#country-name").val();
  if (!countryName.length) countryName = "Poland";
  $.getJSON(url + countryName, showCountriesList);
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
    $("<li>")
      .text(item.name)
      .appendTo(countriesList);
  });
}
