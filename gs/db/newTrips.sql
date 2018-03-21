INSERT INTO "public"."trips" 
VALUES(DEFAULT) RETURNING "trip_name", "trip_start", "trip_end", "trip_location", "id", "created_by_id";
