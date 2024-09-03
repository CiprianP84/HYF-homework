-- 1. Add a Task
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Eat munchies', 'After work, sit on the couch, relax and eat some snacks', '2024-09-01 20:00', NOW(), '2024-09-03', 2, 4);

-- 2. Change the Title of a Task
UPDATE task SET title = 'Eat more munchies' WHERE id = 35;

-- 3. Change a Task Due Date
UPDATE task SET due_date = '2024-09-05' WHERE id = 24;

-- 4. Change a Task Status
UPDATE task SET status_id = 3 WHERE id = 15;

-- 5. Mark a Task as Complete
UPDATE task
SET status_id = (SELECT id FROM status WHERE name LIKE '%done%')
WHERE id = 5;

-- 6. Delete a Task
DELETE FROM task WHERE id = 9;
