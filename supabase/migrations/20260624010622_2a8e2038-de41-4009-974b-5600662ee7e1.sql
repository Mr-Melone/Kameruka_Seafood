
DROP POLICY "Anyone can create a booking" ON public.bookings;

CREATE POLICY "Public can submit valid bookings"
ON public.bookings FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 100
  AND length(trim(phone)) BETWEEN 5 AND 30
  AND length(trim(email)) BETWEEN 3 AND 255
  AND email LIKE '%@%.%'
  AND booking_date >= CURRENT_DATE
  AND party_size BETWEEN 1 AND 30
  AND (special_requests IS NULL OR length(special_requests) <= 500)
);
