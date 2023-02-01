let input = document.getElementById("address");
let button = document.getElementById("btn");
let result = document.getElementById("result");

function showUserDetails() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
    latitude.innerHTML = latitude;
    longitude.innerHTML = longitude;
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=cba085cce1dd4a47bbf2f056eeca6e64`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0]);

        document.getElementById(
          "time"
        ).innerHTML = `${data.results[0].timezone.name}`;
        document.getElementById("lat").innerHTML = `${data.results[0].lat}`;
        document.getElementById("lon").innerHTML = `${data.results[0].lon}`;
        document.getElementById(
          "dst"
        ).innerHTML = `${data.results[0].timezone.offset_DST}`;
        document.getElementById(
          "std"
        ).innerHTML = `${data.results[0].timezone.offset_STD}`;
        document.getElementById(
          "stdSecond"
        ).innerHTML = `${data.results[0].timezone.offset_DST_seconds}`;
        document.getElementById(
          "dstsecond"
        ).innerHTML = `${data.results[0].timezone.offset_DST_seconds}`;
        document.getElementById(
          "country"
        ).innerHTML = `${data.results[0].country}`;
        document.getElementById(
          "postcode"
        ).innerHTML = `${data.results[0].postcode}`;
        document.getElementById("city").innerHTML = `${data.results[0].city}`;
        //   console.log(item.results[0].timezone.offset_STD);
      });
  });
}
showUserDetails();

function addressData() {
  const inputvalue = document.getElementById("address");
  if (inputvalue.value !== "") {
    const loc = document.getElementById("address").value;
    const Apikey = "a1e994b249764e929cde4c884d6fdc39";
    const url = `https://api.geoapify.com/v1/geocode/search?text=${loc}&apiKey=${Apikey}`;

    async function getData(url) {
      const responce = await fetch(url);
      data = await responce.json();

      console.log(data);
      document.getElementById(
        "timezone"
      ).innerHTML = `${data.features[0].properties.timezone.name}`;
      document.getElementById(
        "lat"
      ).innerHTML = `${data.features[0].properties.lat}`;
      document.getElementById(
        "lon"
      ).innerHTML = `${data.features[0].properties.lon}`;
      document.getElementById(
        "std1"
      ).innerHTML = `${data.features[0].properties.timezone.offset_STD}`;
      document.getElementById(
        "stdSecond1"
      ).innerHTML = `${data.features[0].properties.timezone.offset_STD_seconds}`;
      document.getElementById(
        "dst1"
      ).innerHTML = `${data.features[0].properties.timezone.offset_DST}`;
      document.getElementById(
        "dstsecond1"
      ).innerHTML = `${data.features[0].properties.timezone.offset_DST_seconds}`;
      document.getElementById(
        "country1"
      ).innerHTML = `${data.features[0].properties.country}`;
      document.getElementById(
        "postcode1"
      ).innerHTML = `${data.features[0].properties.postcode}`;
      document.getElementById(
        "city1"
      ).innerHTML = `${data.features[0].properties.city}`;
    }

    getData(url);
  } else if (inputvalue.value == "") {
    document.getElementById("success").innerText = "Please enter an address!";
    document.getElementById("success").style.color = "red";
  } else if (inputvalue.value !== "") {
    document.getElementById("success").innerHTML = "";
  }
}

function makingValuesEmpty() {
  document.getElementById("time").innerText = " ";
  document.getElementById("lati").innerText = " ";
  document.getElementById("lon").innerText = " ";

  document.getElementById("offst").innerText = " ";
  document.getElementById("stdse").innerText = " ";
  document.getElementById("dst").innerText = " ";
  document.getElementById("dstse").innerText = " ";

  document.getElementById("con").innerText = " ";
  document.getElementById("pincod").innerText = " ";
  document.getElementById("ct").innerText = " ";
}
