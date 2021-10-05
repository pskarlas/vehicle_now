// import axios from 'axios';

// const API_URL = 'https://prerelease.moqo.de/api_aggregator';

export class apiService {
  constructor() {
    // axios.defaults.headers.common['Authorisation'] = process.env.ACCESS_TOKEN
  }
  fetchVehicles(){
    // const url = `${API_URL}/vehicles`
    // return axios.get(url, {}).then(response => response.data)

    // The prerelease server does not accept CORS requests,
    // I am therefore mocking up a response
    let vehicles =  [
        {
            "id": 926143099,
            "license": "Charmander",
            "car_type": "mini_car",
            "fuel_type": "super_petrol",
            "transmission": null,
            "current_parking_hint": null,
            "allow_rfid_card_access": false,
            "distance": null,
            "label": "Pokémon First Generation",
            "vehicle_type": "car",
            "vehicle_categories": [
                {
                    "id": 1,
                    "name": "Mini"
                }
            ],
            "legal_documents": [
                {
                    "kind": "privacy_policy",
                    "title": "Privacy policy",
                    "url": "https://prerelease.moqo.de/privacy_policy?provider_id=1756559992"
                },
                {
                    "kind": "penalties",
                    "title": "Penalty catalogue",
                    "url": "https://prerelease.moqo.de/cars/926143099/penalties.pdf?locale=en"
                }
            ],
            "vehicle_usage_instructions_url": null,
            "location": {
                "city": "Aachen",
                "postcode": "52064",
                "street": "Vaalser Straße 17",
                "lat": 50.7704629151559,
                "lng": 6.07350297875746,
                "kind": "expected_pickup",
                "name": "[Tech-Challenge] Aachen Schanz",
                "center_lat": 50.7704629151559,
                "center_lng": 6.07350297875746,
                "radius": 41,
                "pickup_description": null,
                "return_description": null,
                "polygon": [
                    {
                        "lat": 50.77053949318942,
                        "lng": 6.073057651519775
                    },
                    {
                        "lat": 50.7702782617625,
                        "lng": 6.072993278503418
                    },
                    {
                        "lat": 50.770356292081765,
                        "lng": 6.074055433273316
                    },
                    {
                        "lat": 50.77070233801612,
                        "lng": 6.073771119117738
                    }
                ],
                "capacity_max": 3,
                "capacity_currently_free": null,
                "navigational_lat": null,
                "navigational_lng": null,
                "id": 1297770269
            },
            "cleanness": "good",
            "image": {
                "url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/926143099/05712af94f77122cbb395617cb3f831c.png",
                "medium_url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/926143099/medium_05712af94f77122cbb395617cb3f831c.png",
                "thumb_url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/926143099/thumb_05712af94f77122cbb395617cb3f831c.png"
            },
            "fuel": {
                "cents": 80,
                "value": "80",
                "formatted": "80 %"
            },
            "return_requirements": {
                "areas": [
                    {
                        "center": {
                            "city": "Aachen",
                            "postcode": "52064",
                            "street": "Vaalser Straße 17",
                            "lat": 50.7704629151559,
                            "lng": 6.07350297875746,
                            "kind": null,
                            "name": "[Tech-Challenge] Aachen Schanz",
                            "center_lat": 50.7704629151559,
                            "center_lng": 6.07350297875746,
                            "radius": 41,
                            "pickup_description": null,
                            "return_description": null,
                            "polygon": [
                                {
                                    "lat": 50.77053949318942,
                                    "lng": 6.073057651519775
                                },
                                {
                                    "lat": 50.7702782617625,
                                    "lng": 6.072993278503418
                                },
                                {
                                    "lat": 50.770356292081765,
                                    "lng": 6.074055433273316
                                },
                                {
                                    "lat": 50.77070233801612,
                                    "lng": 6.073771119117738
                                }
                            ],
                            "capacity_max": 3,
                            "capacity_currently_free": null,
                            "navigational_lat": null,
                            "navigational_lng": null,
                            "id": 1297770269
                        },
                        "max_distance": 41,
                        "hint_required": false,
                        "hint_examples": "",
                        "polygon": [
                            {
                                "lat": 50.77053949318942,
                                "lng": 6.073057651519775
                            },
                            {
                                "lat": 50.7702782617625,
                                "lng": 6.072993278503418
                            },
                            {
                                "lat": 50.770356292081765,
                                "lng": 6.074055433273316
                            },
                            {
                                "lat": 50.77070233801612,
                                "lng": 6.073771119117738
                            }
                        ]
                    },
                    {
                        "center": {
                            "city": "Aachen",
                            "postcode": "52064",
                            "street": "Bahnhofplatz 2a",
                            "lat": 50.7682238871194,
                            "lng": 6.09067195086932,
                            "kind": null,
                            "name": "[Tech-Challenge] Aachen Hbf",
                            "center_lat": 50.7682238871194,
                            "center_lng": 6.09067195086932,
                            "radius": 25,
                            "pickup_description": null,
                            "return_description": null,
                            "polygon": [
                                {
                                    "lat": 50.768293533797014,
                                    "lng": 6.090341806411744
                                },
                                {
                                    "lat": 50.76805943212632,
                                    "lng": 6.09044909477234
                                },
                                {
                                    "lat": 50.76816800116274,
                                    "lng": 6.091028451919556
                                },
                                {
                                    "lat": 50.76839531676669,
                                    "lng": 6.090862154960633
                                }
                            ],
                            "capacity_max": 3,
                            "capacity_currently_free": null,
                            "navigational_lat": null,
                            "navigational_lng": null,
                            "id": 1670927827
                        },
                        "max_distance": 25,
                        "hint_required": false,
                        "hint_examples": "",
                        "polygon": [
                            {
                                "lat": 50.768293533797014,
                                "lng": 6.090341806411744
                            },
                            {
                                "lat": 50.76805943212632,
                                "lng": 6.09044909477234
                            },
                            {
                                "lat": 50.76816800116274,
                                "lng": 6.091028451919556
                            },
                            {
                                "lat": 50.76839531676669,
                                "lng": 6.090862154960633
                            }
                        ]
                    }
                ],
                "fuel": 25,
                "doors": "closed",
                "central_lock": "locked",
                "keyfob": "in",
                "ignition": "off",
                "card_1": null,
                "card_2": null,
                "fuel_ignored_when_charging": false,
                "must_be_charging": null,
                "top_box": null,
                "seat_box": null
            },
            "cruising_range": {
                "source": "historical_estimation",
                "value": {
                    "cents": 254,
                    "value": "254.4",
                    "formatted": "254 km"
                }
            },
            "ev_charging": null,
            "minimum_pricing": {
                "from": "2021-10-04T14:00:00+02:00",
                "until": "2021-10-04T15:00:00+02:00",
                "km": 0,
                "km_to_charge": 0,
                "km_included": 0,
                "base_fee": {
                    "cents": 100,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "1.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "1.00"
                },
                "minimal_value_adjustment_charge": null,
                "to_pay_per_km": {
                    "cents": 10,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "0.10 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "0.10"
                },
                "km_charge": {
                    "cents": 0,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "0.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "0.00"
                },
                "total_to_pay": {
                    "cents": 300,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "3.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "3.00"
                },
                "details": [
                    {
                        "name": "free_duration",
                        "title": "Free 15 minutes",
                        "count": 1,
                        "to_pay_per_unit": {
                            "cents": 0,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "0.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "0.00"
                        },
                        "total": {
                            "cents": 0,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "0.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "0.00"
                        },
                        "km_included_per_unit": 0
                    },
                    {
                        "name": "hour",
                        "title": "Hourly tariff",
                        "count": 1,
                        "to_pay_per_unit": {
                            "cents": 200,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "2.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "2.00"
                        },
                        "total": {
                            "cents": 200,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "2.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "2.00"
                        },
                        "km_included_per_unit": 20
                    }
                ],
                "coupon": null
            },
            "available": null,
            "has_fuel_charge_card": false,
            "has_parking_card": false,
            "insurances": [],
            "minimum_age_insurance_requirement": 0,
            "bookable_extras": [],
            "vehicle_model": {
                "id": 876058636,
                "car_manufacturer_id": 418554408,
                "name": "First Generation",
                "created_at": "2020-07-13T12:27:13+02:00",
                "updated_at": "2020-07-13T12:27:13+02:00",
                "car_type": null,
                "tag_list": []
            }
        },
        {
            "id": 1281826808,
            "license": "Bulbasaur",
            "car_type": "mini_car",
            "fuel_type": "natural_gas",
            "transmission": null,
            "current_parking_hint": null,
            "allow_rfid_card_access": false,
            "distance": null,
            "label": "Pokémon First Generation",
            "vehicle_type": "car",
            "vehicle_categories": [
                {
                    "id": 1,
                    "name": "Mini"
                }
            ],
            "legal_documents": [
                {
                    "kind": "privacy_policy",
                    "title": "Privacy policy",
                    "url": "https://prerelease.moqo.de/privacy_policy?provider_id=1756559992"
                },
                {
                    "kind": "penalties",
                    "title": "Penalty catalogue",
                    "url": "https://prerelease.moqo.de/cars/1281826808/penalties.pdf?locale=en"
                }
            ],
            "vehicle_usage_instructions_url": null,
            "location": {
                "city": "Aachen",
                "postcode": "52064",
                "street": "Vaalser Straße 17",
                "lat": 50.7704629151559,
                "lng": 6.07350297875746,
                "kind": "expected_pickup",
                "name": "[Tech-Challenge] Aachen Schanz",
                "center_lat": 50.7704629151559,
                "center_lng": 6.07350297875746,
                "radius": 41,
                "pickup_description": null,
                "return_description": null,
                "polygon": [
                    {
                        "lat": 50.77053949318942,
                        "lng": 6.073057651519775
                    },
                    {
                        "lat": 50.7702782617625,
                        "lng": 6.072993278503418
                    },
                    {
                        "lat": 50.770356292081765,
                        "lng": 6.074055433273316
                    },
                    {
                        "lat": 50.77070233801612,
                        "lng": 6.073771119117738
                    }
                ],
                "capacity_max": 3,
                "capacity_currently_free": null,
                "navigational_lat": null,
                "navigational_lng": null,
                "id": 1297770269
            },
            "cleanness": "good",
            "image": {
                "url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/1281826808/b7ad0d4c86d8c92efc33e369fc062e5d.png",
                "medium_url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/1281826808/medium_b7ad0d4c86d8c92efc33e369fc062e5d.png",
                "thumb_url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/1281826808/thumb_b7ad0d4c86d8c92efc33e369fc062e5d.png"
            },
            "fuel": {
                "cents": 95,
                "value": "95",
                "formatted": "95 %"
            },
            "return_requirements": {
                "areas": [
                    {
                        "center": {
                            "city": "Aachen",
                            "postcode": "52064",
                            "street": "Bahnhofplatz 2a",
                            "lat": 50.7682238871194,
                            "lng": 6.09067195086932,
                            "kind": null,
                            "name": "[Tech-Challenge] Aachen Hbf",
                            "center_lat": 50.7682238871194,
                            "center_lng": 6.09067195086932,
                            "radius": 25,
                            "pickup_description": null,
                            "return_description": null,
                            "polygon": [
                                {
                                    "lat": 50.768293533797014,
                                    "lng": 6.090341806411744
                                },
                                {
                                    "lat": 50.76805943212632,
                                    "lng": 6.09044909477234
                                },
                                {
                                    "lat": 50.76816800116274,
                                    "lng": 6.091028451919556
                                },
                                {
                                    "lat": 50.76839531676669,
                                    "lng": 6.090862154960633
                                }
                            ],
                            "capacity_max": 3,
                            "capacity_currently_free": null,
                            "navigational_lat": null,
                            "navigational_lng": null,
                            "id": 1670927827
                        },
                        "max_distance": 25,
                        "hint_required": false,
                        "hint_examples": "",
                        "polygon": [
                            {
                                "lat": 50.768293533797014,
                                "lng": 6.090341806411744
                            },
                            {
                                "lat": 50.76805943212632,
                                "lng": 6.09044909477234
                            },
                            {
                                "lat": 50.76816800116274,
                                "lng": 6.091028451919556
                            },
                            {
                                "lat": 50.76839531676669,
                                "lng": 6.090862154960633
                            }
                        ]
                    },
                    {
                        "center": {
                            "city": "Aachen",
                            "postcode": "52064",
                            "street": "Vaalser Straße 17",
                            "lat": 50.7704629151559,
                            "lng": 6.07350297875746,
                            "kind": null,
                            "name": "[Tech-Challenge] Aachen Schanz",
                            "center_lat": 50.7704629151559,
                            "center_lng": 6.07350297875746,
                            "radius": 41,
                            "pickup_description": null,
                            "return_description": null,
                            "polygon": [
                                {
                                    "lat": 50.77053949318942,
                                    "lng": 6.073057651519775
                                },
                                {
                                    "lat": 50.7702782617625,
                                    "lng": 6.072993278503418
                                },
                                {
                                    "lat": 50.770356292081765,
                                    "lng": 6.074055433273316
                                },
                                {
                                    "lat": 50.77070233801612,
                                    "lng": 6.073771119117738
                                }
                            ],
                            "capacity_max": 3,
                            "capacity_currently_free": null,
                            "navigational_lat": null,
                            "navigational_lng": null,
                            "id": 1297770269
                        },
                        "max_distance": 41,
                        "hint_required": false,
                        "hint_examples": "",
                        "polygon": [
                            {
                                "lat": 50.77053949318942,
                                "lng": 6.073057651519775
                            },
                            {
                                "lat": 50.7702782617625,
                                "lng": 6.072993278503418
                            },
                            {
                                "lat": 50.770356292081765,
                                "lng": 6.074055433273316
                            },
                            {
                                "lat": 50.77070233801612,
                                "lng": 6.073771119117738
                            }
                        ]
                    }
                ],
                "fuel": 25,
                "doors": "closed",
                "central_lock": "locked",
                "keyfob": "in",
                "ignition": "off",
                "card_1": null,
                "card_2": null,
                "fuel_ignored_when_charging": false,
                "must_be_charging": null,
                "top_box": null,
                "seat_box": null
            },
            "cruising_range": {
                "source": null,
                "value": null
            },
            "ev_charging": null,
            "minimum_pricing": {
                "from": "2021-10-04T14:00:00+02:00",
                "until": "2021-10-04T15:00:00+02:00",
                "km": 0,
                "km_to_charge": 0,
                "km_included": 0,
                "base_fee": {
                    "cents": 100,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "1.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "1.00"
                },
                "minimal_value_adjustment_charge": null,
                "to_pay_per_km": {
                    "cents": 10,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "0.10 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "0.10"
                },
                "km_charge": {
                    "cents": 0,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "0.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "0.00"
                },
                "total_to_pay": {
                    "cents": 300,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "3.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "3.00"
                },
                "details": [
                    {
                        "name": "free_duration",
                        "title": "Free 15 minutes",
                        "count": 1,
                        "to_pay_per_unit": {
                            "cents": 0,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "0.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "0.00"
                        },
                        "total": {
                            "cents": 0,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "0.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "0.00"
                        },
                        "km_included_per_unit": 0
                    },
                    {
                        "name": "hour",
                        "title": "Hourly tariff",
                        "count": 1,
                        "to_pay_per_unit": {
                            "cents": 200,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "2.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "2.00"
                        },
                        "total": {
                            "cents": 200,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "2.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "2.00"
                        },
                        "km_included_per_unit": 20
                    }
                ],
                "coupon": null
            },
            "available": null,
            "has_fuel_charge_card": false,
            "has_parking_card": false,
            "insurances": [],
            "minimum_age_insurance_requirement": 0,
            "bookable_extras": [],
            "vehicle_model": {
                "id": 876058636,
                "car_manufacturer_id": 418554408,
                "name": "First Generation",
                "created_at": "2020-07-13T12:27:13+02:00",
                "updated_at": "2020-07-13T12:27:13+02:00",
                "car_type": null,
                "tag_list": []
            }
        },
        {
            "id": 1461849266,
            "license": "Squirtle",
            "car_type": "mini_car",
            "fuel_type": "hydrogen",
            "transmission": null,
            "current_parking_hint": null,
            "allow_rfid_card_access": false,
            "distance": null,
            "label": "Pokémon First Generation",
            "vehicle_type": "car",
            "vehicle_categories": [
                {
                    "id": 1,
                    "name": "Mini"
                }
            ],
            "legal_documents": [
                {
                    "kind": "privacy_policy",
                    "title": "Privacy policy",
                    "url": "https://prerelease.moqo.de/privacy_policy?provider_id=1756559992"
                },
                {
                    "kind": "penalties",
                    "title": "Penalty catalogue",
                    "url": "https://prerelease.moqo.de/cars/1461849266/penalties.pdf?locale=en"
                }
            ],
            "vehicle_usage_instructions_url": null,
            "location": {
                "city": "Aachen",
                "postcode": "52064",
                "street": "Vaalser Straße 17",
                "lat": 50.7704629151559,
                "lng": 6.07350297875746,
                "kind": "expected_pickup",
                "name": "[Tech-Challenge] Aachen Schanz",
                "center_lat": 50.7704629151559,
                "center_lng": 6.07350297875746,
                "radius": 41,
                "pickup_description": null,
                "return_description": null,
                "polygon": [
                    {
                        "lat": 50.77053949318942,
                        "lng": 6.073057651519775
                    },
                    {
                        "lat": 50.7702782617625,
                        "lng": 6.072993278503418
                    },
                    {
                        "lat": 50.770356292081765,
                        "lng": 6.074055433273316
                    },
                    {
                        "lat": 50.77070233801612,
                        "lng": 6.073771119117738
                    }
                ],
                "capacity_max": 3,
                "capacity_currently_free": null,
                "navigational_lat": null,
                "navigational_lng": null,
                "id": 1297770269
            },
            "cleanness": "good",
            "image": {
                "url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/1461849266/8c1ca2615728ea718028099e28bda95e.png",
                "medium_url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/1461849266/medium_8c1ca2615728ea718028099e28bda95e.png",
                "thumb_url": "https://cdn-uploads-prerelease.moqo.de/uploads/car/image/1461849266/thumb_8c1ca2615728ea718028099e28bda95e.png"
            },
            "fuel": {
                "cents": 95,
                "value": "95",
                "formatted": "95 %"
            },
            "return_requirements": {
                "areas": [
                    {
                        "center": {
                            "city": "Aachen",
                            "postcode": "52064",
                            "street": "Vaalser Straße 17",
                            "lat": 50.7704629151559,
                            "lng": 6.07350297875746,
                            "kind": null,
                            "name": "[Tech-Challenge] Aachen Schanz",
                            "center_lat": 50.7704629151559,
                            "center_lng": 6.07350297875746,
                            "radius": 41,
                            "pickup_description": null,
                            "return_description": null,
                            "polygon": [
                                {
                                    "lat": 50.77053949318942,
                                    "lng": 6.073057651519775
                                },
                                {
                                    "lat": 50.7702782617625,
                                    "lng": 6.072993278503418
                                },
                                {
                                    "lat": 50.770356292081765,
                                    "lng": 6.074055433273316
                                },
                                {
                                    "lat": 50.77070233801612,
                                    "lng": 6.073771119117738
                                }
                            ],
                            "capacity_max": 3,
                            "capacity_currently_free": null,
                            "navigational_lat": null,
                            "navigational_lng": null,
                            "id": 1297770269
                        },
                        "max_distance": 41,
                        "hint_required": false,
                        "hint_examples": "",
                        "polygon": [
                            {
                                "lat": 50.77053949318942,
                                "lng": 6.073057651519775
                            },
                            {
                                "lat": 50.7702782617625,
                                "lng": 6.072993278503418
                            },
                            {
                                "lat": 50.770356292081765,
                                "lng": 6.074055433273316
                            },
                            {
                                "lat": 50.77070233801612,
                                "lng": 6.073771119117738
                            }
                        ]
                    }
                ],
                "fuel": 25,
                "doors": "closed",
                "central_lock": "locked",
                "keyfob": "in",
                "ignition": "off",
                "card_1": null,
                "card_2": null,
                "fuel_ignored_when_charging": false,
                "must_be_charging": null,
                "top_box": null,
                "seat_box": null
            },
            "cruising_range": {
                "source": null,
                "value": null
            },
            "ev_charging": null,
            "minimum_pricing": {
                "from": "2021-10-04T14:00:00+02:00",
                "until": "2021-10-04T15:00:00+02:00",
                "km": 0,
                "km_to_charge": 0,
                "km_included": 0,
                "base_fee": {
                    "cents": 100,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "1.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "1.00"
                },
                "minimal_value_adjustment_charge": null,
                "to_pay_per_km": {
                    "cents": 10,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "0.10 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "0.10"
                },
                "km_charge": {
                    "cents": 0,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "0.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "0.00"
                },
                "total_to_pay": {
                    "cents": 300,
                    "currency": "EUR",
                    "currency_code": "€",
                    "formatted": "3.00 €",
                    "vat_rate": 1900,
                    "vat_status": "gross",
                    "value": "3.00"
                },
                "details": [
                    {
                        "name": "free_duration",
                        "title": "Free 15 minutes",
                        "count": 1,
                        "to_pay_per_unit": {
                            "cents": 0,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "0.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "0.00"
                        },
                        "total": {
                            "cents": 0,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "0.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "0.00"
                        },
                        "km_included_per_unit": 0
                    },
                    {
                        "name": "hour",
                        "title": "Hourly tariff",
                        "count": 1,
                        "to_pay_per_unit": {
                            "cents": 200,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "2.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "2.00"
                        },
                        "total": {
                            "cents": 200,
                            "currency": "EUR",
                            "currency_code": "€",
                            "formatted": "2.00 €",
                            "vat_rate": 1900,
                            "vat_status": "gross",
                            "value": "2.00"
                        },
                        "km_included_per_unit": 20
                    }
                ],
                "coupon": null
            },
            "available": null,
            "has_fuel_charge_card": false,
            "has_parking_card": false,
            "insurances": [],
            "minimum_age_insurance_requirement": 0,
            "bookable_extras": [],
            "vehicle_model": {
                "id": 876058636,
                "car_manufacturer_id": 418554408,
                "name": "First Generation",
                "created_at": "2020-07-13T12:27:13+02:00",
                "updated_at": "2020-07-13T12:27:13+02:00",
                "car_type": null,
                "tag_list": []
            }
        }
      ]
      return vehicles

  }


}
