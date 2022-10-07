CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "tasks" 
	("task", "completed") 
VALUES 
	('finish weekend challenge', 'false'),
	('feed my baby', 'true'),
	('complete group project', 'true'),
	('dance around the room', 'false'),
	('read an awesom book for 10 minutes', 'true'),
	('do yoga', 'false')