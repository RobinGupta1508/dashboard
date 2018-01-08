import { Component } from '@angular/core';
import { } from 'googlemaps';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    locality = '';
    city = '';
    state = '';
    stateResult = [];
    cityResult = [];
    localityResult = [];
    getLocality() {
        const x = new google.maps.places.AutocompleteService();
        const that = this;
        x.getPlacePredictions({
            input: this.state + " " + this.city + " " + this.locality,
            types: ['geocode'],
            componentRestrictions: { country: 'in' }
        }, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let u = 0; u < results.length; u++) {
                    if (that.localityResult.indexOf(results[u].description) === -1) {
                        that.localityResult.push(results[u].description.split(',')[0]);
                    }

                }

            }
        })
    }





    getState() {
        const x = new google.maps.places.AutocompleteService();
        const that = this;
        x.getPlacePredictions({
            input: this.state,
            types: ['geocode'],
            componentRestrictions: { country: 'in' }
        }, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let u = 0; u < results.length; u++) {
                    if (that.stateResult.indexOf(results[u].description) === -1) {
                        that.stateResult.push(results[u].description.split(',')[0]);
                    }

                }

            }
        })
    }


    getCity() {
        const x = new google.maps.places.AutocompleteService();
        const that = this;
        x.getPlacePredictions({
            input: this.state + this.city,
            types: ['geocode'],
            componentRestrictions: { country: 'in' }
        }, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let u = 0; u < results.length; u++) {
                    if (that.cityResult.indexOf(results[u].description) === -1) {
                        that.cityResult.push(results[u].description.split(',')[0]);
                    }

                }

            }
        })
    }

}
