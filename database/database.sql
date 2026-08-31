CREATE DATABASE `courses` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- courses.courses definition

CREATE TABLE `courses` (
                           `id` int NOT NULL AUTO_INCREMENT,
                           `name` varchar(64) DEFAULT NULL,
                           `description` text,
                           `professor_id` int DEFAULT NULL,
                           PRIMARY KEY (`id`),
                           KEY `courses_professors_FK` (`professor_id`),
                           CONSTRAINT `courses_professors_FK` FOREIGN KEY (`professor_id`) REFERENCES `professors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- courses.professors definition

CREATE TABLE `professors` (
                              `id` int NOT NULL AUTO_INCREMENT,
                              `dni` varchar(64) DEFAULT NULL,
                              `name` varchar(64) DEFAULT NULL,
                              `lastname` varchar(64) DEFAULT NULL,
                              `email` varchar(128) DEFAULT NULL,
                              `profesion` varchar(128) DEFAULT NULL,
                              `phone` varchar(64) DEFAULT NULL,
                              PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- courses.students definition

CREATE TABLE `students` (
                            `id` int NOT NULL AUTO_INCREMENT,
                            `dni` varchar(64) DEFAULT NULL,
                            `name` varchar(64) DEFAULT NULL,
                            `lastname` varchar(64) DEFAULT NULL,
                            `email` varchar(128) DEFAULT NULL,
                            PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- courses.students_courses definition

CREATE TABLE `students_courses` (
                                    `course_id` int NOT NULL,
                                    `student_id` int NOT NULL,
                                    PRIMARY KEY (`course_id`,`student_id`),
                                    KEY `students_courses_students_FK` (`student_id`),
                                    CONSTRAINT `students_courses_courses_FK` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
                                    CONSTRAINT `students_courses_students_FK` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;