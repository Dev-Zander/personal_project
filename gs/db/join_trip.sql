UPDATE travelers SET traveler_joined = $1, traveler_id = $2
WHERE trip_id = $3 AND phone_number = $4;


