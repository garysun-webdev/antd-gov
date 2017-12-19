/* eslint-disable */
import React, { Component } from "react";
import "./GoogleMap.css";

class GoogleMap extends Component {
  componentDidMount() {
    const location = {
      lat: this.props.lat,
      lng: this.props.lon
    };
    const map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: location
    });

    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h3 id="firstHeading" class="firstHeading">Contact me</h3>' +
      '<div id="bodyContent">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "Heritage Site.</p>" +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
      "(last visited June 22, 2009).</p>" +
      "</div>" +
      "</div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Hello World!"
    });

    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
  }

  render() {
    return <div ref="map" id="googlemap" />;
  }
}

export default GoogleMap;
