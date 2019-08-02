#!flask/bin/python
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import requests
import json

app = Flask(__name__)
# app.config['CORS_HEADERS'] = "Content-Type"
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/v1/flights/getAllFlightInfo')
def index():

    response = []

    r = requests.get(
        "http://flightaware.ddns.net/dump1090-fa/data/aircraft.json"
    )
    flight_info = json.loads(r.text)
    aircraft = flight_info["aircraft"]
    print("Aircraft: " + str(len(aircraft)))
    for item in aircraft:
        aircraft_info = {}

        # ICAO Code
        if (item["hex"]):
            aircraft_info["ICAO"] = item["hex"]

        # Flight Number
        if (item.get("flight")):
            aircraft_info["Flight"] = item["flight"]
        else:
            aircraft_info["Flight"] = ""

        # Altitude Barometric
        if (item.get("alt_baro")):
            aircraft_info["Alt_Baro"] = item["alt_baro"]
        else:
            aircraft_info["Alt_Baro"] = ""

        # Altitude Geometric
        if (item.get("alt_geom")):
            aircraft_info["Alt_Geom"] = item["alt_geom"]
        else:
            aircraft_info["Alt_Geom"] = ""

        # Ground Speed
        if (item.get("gs")):
            aircraft_info["GS"] = item["gs"]
        else:
            aircraft_info["GS"] = ""

        # Indicated Air Speed
        if (item.get("ias")):
            aircraft_info["IAS"] = item["ias"]
        else:
            aircraft_info["IAS"] = ""

        # True Air Speed
        if (item.get("tas")):
            aircraft_info["TAS"] = item["tas"]
        else:
            aircraft_info["TAS"] = ""

        # Mach No
        if (item.get("mach")):
            aircraft_info["MACH"] = item["mach"]
        else:
            aircraft_info["MACH"] = ""

        # Track - True Track over ground in degrees (0-359)
        if (item.get("track")):
            aircraft_info["Track"] = item["track"]
        else:
            aircraft_info["Track"] = ""

        # Track Rate (Rate of track, degrees/second)
        if (item.get("track_rate")):
            aircraft_info["TrackRate"] = item["track_rate"]
        else:
            aircraft_info["TrackRate"] = ""

        # Roll - Degrees - Negative is left roll
        if (item.get("roll")):
            aircraft_info["Roll"] = item["roll"]
        else:
            aircraft_info["Roll"] = ""

        # Magnetic Heading - Degrees
        if (item.get("mag_heading")):
            aircraft_info["MagHeading"] = item["mag_heading"]
        else:
            aircraft_info["MagHeading"] = ""

        # True Heading - Degrees
        if (item.get("true_heading")):
            aircraft_info["TrueHeading"] = item["true_heading"]
        else:
            aircraft_info["TrueHeading"] = ""

        # Baro Rate of Change feet/min
        if (item.get("baro_rate")):
            aircraft_info["BaroRate"] = item["baro_rate"]
        else:
            aircraft_info["BaroRate"] = ""

        # Geometric Rate of CHange feet/min
        if (item.get("geom_rate")):
            aircraft_info["GeomRate"] = item["geom_rate"]
        else:
            aircraft_info["GeomRate"] = ""

        # Squawk Code
        if (item.get("squawk")):
            aircraft_info["Squawk"] = item["squawk"]
        else:
            aircraft_info["Squawk"] = ""

        # Emergency
        if (item.get("emergency")):
            aircraft_info["Emergency"] = item["emergency"]
        else:
            aircraft_info["Emergency"] = ""

        # Nav QNH Setting / Altimeter Setting QFE or QNH/QNE
        if (item.get("nav_qnh")):
            aircraft_info["NavQNH"] = item["nav_qnh"]
        else:
            aircraft_info["NavQNH"] = ""

        # Nav Altitude / Selected Altitude
        if (item.get("nav_altitude")):
            aircraft_info["NavAltitude"] = item["nav_altitude"]
        else:
            aircraft_info["NavAltitude"] = ""

        # Nav Heading / Selected Heading
        if (item.get("nav_heading")):
            aircraft_info["NavHeading"] = item["nav_heading"]
        else:
            aircraft_info["NavHeading"] = ""

        # Nav Modes - Set of engaged modes
        if (item.get("nav_modes")):
            aircraft_info["NavModes"] = item["nav_modes"]
        else:
            aircraft_info["NavModes"] = ""

        # Latitude and Longitude
        if (item.get("lat") and item.get("lon")):
            aircraft_info["Lat"] = item["lat"]
            aircraft_info["Lon"] = item["lon"]
        else:
            aircraft_info["Lat"] = ""
            aircraft_info["Lon"] = ""

        # Last Seen Position
        if (item.get("seen_pos")):
            aircraft_info["SeenPos"] = item["seen_pos"]
        else:
            aircraft_info["SeenPos"] = ""

        # Seen - How long since last message
        if (item.get("seen")):
            aircraft_info["Seen"] = item["seen"]
        else:
            aircraft_info["Seen"] = ""

        response.append(aircraft_info)
        api_response = jsonify(response)
        api_response.headers.add("Access-Control-Allow-Origin", "*")
    return 


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
