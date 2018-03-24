SELECT trips.id ,trips.trip_name,trips.trip_location, trips.trip_start, trips.trip_end,travelers.phone_number
FROM users
JOIN travelers ON travelers.phone_number = users.phone_number
JOIN trips ON travelers.trip_id = trips.id
WHERE travelers.traveler_joined is null
AND travelers.phone_number = $1