INSERT INTO authors (name, description, funny) VALUES ('Francis', 'Oh boy, he is a teacher', true); 
INSERT INTO authors (name, funny, description) VALUES ('Paul', TRUE, 'A student in march01');
INSERT INTO authors (name, funny, description) VALUES ('Mike', TRUE, 'A student in march01');
INSERT INTO authors (name, funny, description) VALUES ('Kevin', TRUE, 'A student in apr26');
INSERT INTO authors (name, funny, description) VALUES ('Mark', TRUE, 'A student in apr26');
INSERT INTO authors (name, funny, description) VALUES ('Jamie', TRUE, 'A student in jun21');
INSERT INTO authors (name, funny, description) VALUES ('Afsan', TRUE, 'A student in jun21');

INSERT INTO
jokes (question, answer, rating, author_id)
VALUES
('Knock knock, whos there, to who', 'no, to whom',3, 1),
('How is a bouncer at a club like a dish soap?', 'They both DETER GENTS', 4, 2),
('What do you call a belt made out of watches?', 'A waist of time.', 5, 3),
('Im afraid for the calendar', 'Its days are numbered', 3, 4),
('I was so excited about spring...', 'I almost wet my plants', 4, 5),
('What is small, green and goes up and down?', 'A green pea in an elevator', 2, 4),
('Whats the object oriented way to get rich?', 'Inheritance', 2, 5),
('Why do programmers mix hallowen and christmas', 'because OCT 31 === DEC 25',1, 1),
('Whats brown and sticky?', 'a stick',5, 6),
('How do you know a jokes a dad joke?', 'It’s apparent',5, 7);

/*
INSERT INTO 
jokes (question, answer, rating, author_id) 
VALUES 
('Knock knock, whos there, to who', 'no, to whom',5, 1);

INSERT INTO 
jokes (question,answer,rating,author_id) 
VALUES
('How is a bouncer at a club like a dish soap?', 'They both DETER GENTS', 5, 1);
*/
