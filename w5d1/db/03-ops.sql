-- Basic fetching

-- SELECT * FROM jokes;
-- SELECT * FROM authors;
-- SELECT age, name FROM parents;
-- SELECT brand FROM potatoes;
-- SELECT name FROM ninjas;

-- SELECT * FROM jokes ORDER BY question DESC;
-- SELECT * FROM jokes ORDER BY question DESC LIMIT 5;

-- SELECT * FROM jokes ORDER BY rating DESC, question ASC;

-- Filtering

-- SELECT * FROM jokes WHERE rating = 5;
-- SELECT * FROM jokes WHERE rating <= 3;
-- SELECT * FROM jokes WHERE question LIKE '% a %';
-- SELECT * FROM jokes WHERE question ILIKE '%what%';
-- SELECT * FROM jokes WHERE LOWER(question) LIKE '%what%';

-- SELECT * FROM jokes 
-- WHERE LOWER(question) LIKE '%what%' AND rating > 3
-- ORDER BY author_id;

-- Aggregate

-- SELECT count(question) FROM jokes;
-- SELECT rating, count(question) AS amount_of_jokes FROM jokes 
-- GROUP BY rating 
-- ORDER BY rating;

-- SELECT author_id, avg(rating) AS joke_rating FROM jokes
-- GROUP BY author_id
-- ORDER BY author_id;


-- Joining

-- SELECT jokes.question, jokes.answer , authors.* FROM jokes JOIN authors ON jokes.author_id = authors.id;

-- SELECT 
--   jokes.question, 
--   jokes.answer , 
--   authors.name
-- FROM jokes 
-- JOIN authors ON jokes.author_id = authors.id;

-- SELECT 
--   jokes.id AS joke_id,
--   jokes.*
-- FROM jokes 
-- JOIN authors ON jokes.author_id = authors.id;

-- SELECT name, avg(rating) AS joke_rating FROM jokes
-- JOIN authors ON jokes.author_id = authors.id
-- GROUP BY name
-- ORDER BY name;

-- SELECT author_id, avg(rating) AS joke_rating FROM jokes
-- GROUP BY author_id
-- HAVING avg(rating) >= 3
-- ORDER BY author_id;

SELECT question, answer
FROM jokes
WHERE author_id IN (
  SELECT author_id AS joke_rating FROM jokes
  GROUP BY author_id
  HAVING avg(rating) < 3
  ORDER BY author_id
)

