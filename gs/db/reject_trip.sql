UPDATE travelers SET traveler_id = null, phone_number = null
WHERE trip_id = $1 AND phone_number = $2