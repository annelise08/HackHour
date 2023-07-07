# Source: Ada Developer's Academy

# Ada is planning a roadtrip from Helena, Montana to Adiecon in Seattle, Washington (1000km). You will create a program that will help Ada determine how expensive each available electric vehicle is for a road trip.

# Each Vehicle has a range (an integer in km), a name (a string), and a rental price.

# The function accepts:
#  a list of vehicle_names, a list of strings
# vehicle_ranges, a list of integers where each integer represents the range of the corresponding fully charge vehicle from vehicle_names
# vehicle_rental_prices, a list of floats where each float represents the daily rental fee for a vehicle

# A Vehicle on the route must charge before exceeding its range.
# Fully Charging any vehicle is $5.00
# Print the name of the least expensive vehicle (cost/km) and the total amount it would cost to take it on a 1000 mile trip assuming a 3 day rental.

import math

def ev_roadtrip(vehicle_names, vehicle_ranges, vehicle_rental_prices):
    costs = {}
    # determine cost for each vehicle
    # store vehicle names and associated costs in dictionary
    for i, vehicle in enumerate(vehicle_names):
        costs[vehicle] = round(1000 / vehicle_ranges[i] * 5 + vehicle_rental_prices[i] * 3, 2)
    # sort dictionary by cost 
    sorted_costs = sorted(costs.items(), key=lambda x:x[1])
    # return lowest cost car
    lowest_price_car_name = sorted_costs[0][0]
    lowest_price = sorted_costs[0][1]
    return print(f"The least expensive vehicle is the {lowest_price_car_name} which will cost ${lowest_price} to take on the trip.")

ev_roadtrip(["Toyota Prius", "Leaf", "ID4"], [100, 200, 75], [50.00, 75.00, 100.00])