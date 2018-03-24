SELECT users.id, trips.id ,trips.trip_name,trips.trip_location, trips.trip_start, trips.trip_end,travelers.phone_number,travelers.traveler_id
FROM users
JOIN travelers ON travelers.phone_number = users.phone_number
JOIN trips ON travelers.trip_id = trips.id
WHERE travelers.traveler_id = $1