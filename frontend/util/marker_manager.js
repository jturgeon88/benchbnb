

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      benchId: bench.id
    });

    this.markers[marker.benchId] = marker;
  }

  updateMarkers(benches) {
    benches.forEach(newBench => (
      this.createMarkerFromBench(newBench)
    ));
    console.log('time to update');
  }

}
