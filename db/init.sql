-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: crossroadsdb
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about_aboutbanner`
--

DROP TABLE IF EXISTS `about_aboutbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutbanner`
--

LOCK TABLES `about_aboutbanner` WRITE;
/*!40000 ALTER TABLE `about_aboutbanner` DISABLE KEYS */;
INSERT INTO `about_aboutbanner` VALUES (1,'about_banner/aboutbg.webp','<h4><strong style=\"color: rgb(255, 255, 255);\">About Us</strong></h4>');
/*!40000 ALTER TABLE `about_aboutbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_abouthighlights`
--

DROP TABLE IF EXISTS `about_abouthighlights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_abouthighlights` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_abouthighlights`
--

LOCK TABLES `about_abouthighlights` WRITE;
/*!40000 ALTER TABLE `about_abouthighlights` DISABLE KEYS */;
INSERT INTO `about_abouthighlights` VALUES (1,'<h6><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">ABOUT US</span></h6>','<h2><span style=\"color: rgb(0, 51, 77);\">At </span><strong style=\"color: rgb(249, 146, 10);\">Crossroads</strong></h2><h2><span style=\"color: rgb(0, 51, 77);\">We tailor our guidance</span></h2>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally. Our experts are with our students every step of the way, ensuring that they reach their educational goals and embark on successful careers.</span></p>','about-us');
/*!40000 ALTER TABLE `about_abouthighlights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutmissionvision`
--

DROP TABLE IF EXISTS `about_aboutmissionvision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutmissionvision` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mission_image` varchar(100) DEFAULT NULL,
  `mission_title` varchar(500) DEFAULT NULL,
  `mission_description` varchar(2000) DEFAULT NULL,
  `order` int NOT NULL,
  `video` varchar(100) DEFAULT NULL,
  `video_thumbnail_image` varchar(100) DEFAULT NULL,
  `vision_description` varchar(2000) DEFAULT NULL,
  `vision_image` varchar(100) DEFAULT NULL,
  `vision_title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutmissionvision`
--

LOCK TABLES `about_aboutmissionvision` WRITE;
/*!40000 ALTER TABLE `about_aboutmissionvision` DISABLE KEYS */;
INSERT INTO `about_aboutmissionvision` VALUES (1,'about_mission_vision/ourvision.webp','<h6><span style=\"color: rgb(0, 51, 77);\">Our</span> <strong style=\"color: rgb(249, 146, 10);\">Vision</strong></h6>','<p><span style=\"color: rgb(128, 128, 128);\">To be a world leader in empowering students to achieve their academic and career aspirations by providing unparalleled guidance and access to world-class education opportunities across the globe.</span></p>',0,'about_mission_vision/dummyvideo_u3nZsh3.mp4','about_mission_vision/about_whychooseus.webp','<p><span style=\"color: rgb(128, 128, 128);\">Our mission is to inspire and support students in their pursuit of international education, offering personalized guidance, comprehensive &amp; dedicated services thereby, ensuring they are well-prepared for success in a globalized world.</span></p>','about_mission_vision/ourmision.webp','<h6><span style=\"color: rgb(0, 51, 77);\">Our</span> <strong style=\"color: rgb(249, 146, 10);\">Vision</strong></h6>');
/*!40000 ALTER TABLE `about_aboutmissionvision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutourvalues`
--

DROP TABLE IF EXISTS `about_aboutourvalues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutourvalues` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutourvalues`
--

LOCK TABLES `about_aboutourvalues` WRITE;
/*!40000 ALTER TABLE `about_aboutourvalues` DISABLE KEYS */;
INSERT INTO `about_aboutourvalues` VALUES (1,'our_values/ourmision.webp','<p>Test</p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</span></p>'),(2,'our_values/ourmision_3yGZT2O.webp','<p>Test</p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</span></p>'),(3,'our_values/ourmision_sd0tyas.webp','<p>Test</p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</span></p>'),(4,'our_values/ourmision_UySSJKz.webp','<p>Test</p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</span></p>'),(5,'our_values/ourmision_uelWV7c.webp','<p>Test</p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</span></p>'),(6,'our_values/ourmision_sX48Mzb.webp','<p>Test</p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</span></p>');
/*!40000 ALTER TABLE `about_aboutourvalues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutourvaluestitle`
--

DROP TABLE IF EXISTS `about_aboutourvaluestitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutourvaluestitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutourvaluestitle`
--

LOCK TABLES `about_aboutourvaluestitle` WRITE;
/*!40000 ALTER TABLE `about_aboutourvaluestitle` DISABLE KEYS */;
INSERT INTO `about_aboutourvaluestitle` VALUES (1,'<h2><span style=\"color: rgb(0, 51, 77);\">Our </span><span style=\"color: rgb(249, 146, 10);\">Values</span></h2>');
/*!40000 ALTER TABLE `about_aboutourvaluestitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_abouttailorguidance`
--

DROP TABLE IF EXISTS `about_abouttailorguidance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_abouttailorguidance` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_abouttailorguidance`
--

LOCK TABLES `about_abouttailorguidance` WRITE;
/*!40000 ALTER TABLE `about_abouttailorguidance` DISABLE KEYS */;
INSERT INTO `about_abouttailorguidance` VALUES (1,'<h2><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 51, 77);\">At</span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(0, 51, 77);\"> </strong><strong style=\"background-color: rgb(255, 255, 255); color: rgb(249, 146, 10);\">Crossroads</strong></h2><h2><span style=\"color: rgb(0, 51, 77); background-color: rgb(255, 255, 255);\">we tailor our guidance</span></h2>','<p><span style=\"color: oklch(0.446 0.03 256.802); background-color: rgb(255, 255, 255);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally. Our experts are with our students every step of the way, ensuring that they reach their educational goals and embark on successful careers.</span></p>');
/*!40000 ALTER TABLE `about_abouttailorguidance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutwhycrossroads`
--

DROP TABLE IF EXISTS `about_aboutwhycrossroads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutwhycrossroads` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `list_title` varchar(500) DEFAULT NULL,
  `list_description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutwhycrossroads`
--

LOCK TABLES `about_aboutwhycrossroads` WRITE;
/*!40000 ALTER TABLE `about_aboutwhycrossroads` DISABLE KEYS */;
INSERT INTO `about_aboutwhycrossroads` VALUES (1,'<p><span style=\"color: rgb(249, 146, 10);\">Wide Range of Courses</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Explore a diverse selection of programs, including MBBS, Bachelor\'s, Master\'s, and Diplomas across various fields such as Nursing, Engineering, and Management, available in multiple countries.</span><span class=\"ql-cursor\">﻿</span></p>'),(2,'<p><span style=\"color: rgb(249, 146, 10);\">Global Study Destinations</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Choose to study in the country that best suits your aspirations. We offer services in India, Germany, the UK, the USA, Australia, Canada, France, New Zealand, Slovakia, Austria, Finland, and many more.</span></p>'),(3,'<p><span style=\"color: rgb(249, 146, 10);\">Supporting You on Your Journey</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Receive dedicated, high-quality guidance and support to ensure a strong start to a rewarding career.</span></p>'),(4,'<p><span style=\"color: rgb(249, 146, 10);\">Experienced Service Providers:</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Access opportunities for 100% tuition-free education, with stipends exceeding 1 lakh INR per month, and the freedom to earn while you learn.</span></p>'),(6,'<p><span style=\"color: rgb(249, 146, 10);\">Results Driven</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">At Crossroads, we are committed to delivering results. Over the years, we have successfully met the varied learning needs of our students, empowering them to realize their aspirations.</span></p>');
/*!40000 ALTER TABLE `about_aboutwhycrossroads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_aboutwhycrossroadstitle`
--

DROP TABLE IF EXISTS `about_aboutwhycrossroadstitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_aboutwhycrossroadstitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `highlights` varchar(2000) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_aboutwhycrossroadstitle`
--

LOCK TABLES `about_aboutwhycrossroadstitle` WRITE;
/*!40000 ALTER TABLE `about_aboutwhycrossroadstitle` DISABLE KEYS */;
INSERT INTO `about_aboutwhycrossroadstitle` VALUES (1,'<h2><strong style=\"color: rgb(255, 255, 255);\">Why</strong><strong> </strong><strong style=\"color: rgb(249, 146, 10);\">Crossroads?</strong></h2>','<p><span style=\"color: rgb(255, 255, 255);\">Whether you aspire to study abroad or pursue a career overseas, Crossroads is your trusted partner. As one of the leading overseas education consultants in Kochi, we take great pride in offering a wide array of study opportunities and career options, both within India and on the global stage.</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">At Crossroads, we’ve been passionately committed to shaping the futures of students since our establishment in 2008. With over a decade of experience, we’ve remained steadfast in our mission to provide quality education that acknowledges the unique potential of each student, empowering them to achieve their dreams. Our team is dedicated to staying ahead of the curve, consistently offering the latest and most promising educational opportunities in partnership with our esteemed associates. We recognize that every student is unique, with individual strengths and aspirations. At Crossroads, we tailor our guidance to help each student unlock their full potential and pursue their ambitions through carefully selected courses in prestigious institutions around the world.</span></p>','about_why_choose_us/about_whychooseus.webp');
/*!40000 ALTER TABLE `about_aboutwhycrossroadstitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=341 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add user',6,'add_user'),(22,'Can change user',6,'change_user'),(23,'Can delete user',6,'delete_user'),(24,'Can view user',6,'view_user'),(25,'Can add home banner',7,'add_homebanner'),(26,'Can change home banner',7,'change_homebanner'),(27,'Can delete home banner',7,'delete_homebanner'),(28,'Can view home banner',7,'view_homebanner'),(29,'Can add service highlights',8,'add_servicehighlights'),(30,'Can change service highlights',8,'change_servicehighlights'),(31,'Can delete service highlights',8,'delete_servicehighlights'),(32,'Can view service highlights',8,'view_servicehighlights'),(33,'Can add about highlights',9,'add_abouthighlights'),(34,'Can change about highlights',9,'change_abouthighlights'),(35,'Can delete about highlights',9,'delete_abouthighlights'),(36,'Can view about highlights',9,'view_abouthighlights'),(37,'Can add course listing',10,'add_courselisting'),(38,'Can change course listing',10,'change_courselisting'),(39,'Can delete course listing',10,'delete_courselisting'),(40,'Can view course listing',10,'view_courselisting'),(41,'Can add popular courses',11,'add_popularcourses'),(42,'Can change popular courses',11,'change_popularcourses'),(43,'Can delete popular courses',11,'delete_popularcourses'),(44,'Can view popular courses',11,'view_popularcourses'),(45,'Can add free education country',12,'add_freeeducationcountry'),(46,'Can change free education country',12,'change_freeeducationcountry'),(47,'Can delete free education country',12,'delete_freeeducationcountry'),(48,'Can view free education country',12,'view_freeeducationcountry'),(49,'Can add free education title',13,'add_freeeducationtitle'),(50,'Can change free education title',13,'change_freeeducationtitle'),(51,'Can delete free education title',13,'delete_freeeducationtitle'),(52,'Can view free education title',13,'view_freeeducationtitle'),(53,'Can add free education courses',14,'add_freeeducationcourses'),(54,'Can change free education courses',14,'change_freeeducationcourses'),(55,'Can delete free education courses',14,'delete_freeeducationcourses'),(56,'Can view free education courses',14,'view_freeeducationcourses'),(57,'Can add news events',15,'add_newsevents'),(58,'Can change news events',15,'change_newsevents'),(59,'Can delete news events',15,'delete_newsevents'),(60,'Can view news events',15,'view_newsevents'),(61,'Can add news events title',16,'add_newseventstitle'),(62,'Can change news events title',16,'change_newseventstitle'),(63,'Can delete news events title',16,'delete_newseventstitle'),(64,'Can view news events title',16,'view_newseventstitle'),(65,'Can add testimonial image',17,'add_testimonialimage'),(66,'Can change testimonial image',17,'change_testimonialimage'),(67,'Can delete testimonial image',17,'delete_testimonialimage'),(68,'Can view testimonial image',17,'view_testimonialimage'),(69,'Can add testimonial video',18,'add_testimonialvideo'),(70,'Can change testimonial video',18,'change_testimonialvideo'),(71,'Can delete testimonial video',18,'delete_testimonialvideo'),(72,'Can view testimonial video',18,'view_testimonialvideo'),(73,'Can add testimonial title',19,'add_testimonialtitle'),(74,'Can change testimonial title',19,'change_testimonialtitle'),(75,'Can delete testimonial title',19,'delete_testimonialtitle'),(76,'Can view testimonial title',19,'view_testimonialtitle'),(77,'Can add about banner',20,'add_aboutbanner'),(78,'Can change about banner',20,'change_aboutbanner'),(79,'Can delete about banner',20,'delete_aboutbanner'),(80,'Can view about banner',20,'view_aboutbanner'),(81,'Can add about mission vision',21,'add_aboutmissionvision'),(82,'Can change about mission vision',21,'change_aboutmissionvision'),(83,'Can delete about mission vision',21,'delete_aboutmissionvision'),(84,'Can view about mission vision',21,'view_aboutmissionvision'),(85,'Can add about courses offered',22,'add_aboutcoursesoffered'),(86,'Can change about courses offered',22,'change_aboutcoursesoffered'),(87,'Can delete about courses offered',22,'delete_aboutcoursesoffered'),(88,'Can view about courses offered',22,'view_aboutcoursesoffered'),(89,'Can add about courses offered title',23,'add_aboutcoursesofferedtitle'),(90,'Can change about courses offered title',23,'change_aboutcoursesofferedtitle'),(91,'Can delete about courses offered title',23,'delete_aboutcoursesofferedtitle'),(92,'Can view about courses offered title',23,'view_aboutcoursesofferedtitle'),(93,'Can add about tailor guidance',24,'add_abouttailorguidance'),(94,'Can change about tailor guidance',24,'change_abouttailorguidance'),(95,'Can delete about tailor guidance',24,'delete_abouttailorguidance'),(96,'Can view about tailor guidance',24,'view_abouttailorguidance'),(97,'Can add about why crossroads',25,'add_aboutwhycrossroads'),(98,'Can change about why crossroads',25,'change_aboutwhycrossroads'),(99,'Can delete about why crossroads',25,'delete_aboutwhycrossroads'),(100,'Can view about why crossroads',25,'view_aboutwhycrossroads'),(101,'Can add about why crossroads title',26,'add_aboutwhycrossroadstitle'),(102,'Can change about why crossroads title',26,'change_aboutwhycrossroadstitle'),(103,'Can delete about why crossroads title',26,'delete_aboutwhycrossroadstitle'),(104,'Can view about why crossroads title',26,'view_aboutwhycrossroadstitle'),(105,'Can add about our values',27,'add_aboutourvalues'),(106,'Can change about our values',27,'change_aboutourvalues'),(107,'Can delete about our values',27,'delete_aboutourvalues'),(108,'Can view about our values',27,'view_aboutourvalues'),(109,'Can add about our values title',23,'add_aboutourvaluestitle'),(110,'Can change about our values title',23,'change_aboutourvaluestitle'),(111,'Can delete about our values title',23,'delete_aboutourvaluestitle'),(112,'Can view about our values title',23,'view_aboutourvaluestitle'),(113,'Can add testimonial banner',28,'add_testimonialbanner'),(114,'Can change testimonial banner',28,'change_testimonialbanner'),(115,'Can delete testimonial banner',28,'delete_testimonialbanner'),(116,'Can view testimonial banner',28,'view_testimonialbanner'),(117,'Can add testimonial image',29,'add_testimonialimage'),(118,'Can change testimonial image',29,'change_testimonialimage'),(119,'Can delete testimonial image',29,'delete_testimonialimage'),(120,'Can view testimonial image',29,'view_testimonialimage'),(121,'Can add testimonial video',30,'add_testimonialvideo'),(122,'Can change testimonial video',30,'change_testimonialvideo'),(123,'Can delete testimonial video',30,'delete_testimonialvideo'),(124,'Can view testimonial video',30,'view_testimonialvideo'),(125,'Can add testimonial listing image',31,'add_testimoniallistingimage'),(126,'Can change testimonial listing image',31,'change_testimoniallistingimage'),(127,'Can delete testimonial listing image',31,'delete_testimoniallistingimage'),(128,'Can view testimonial listing image',31,'view_testimoniallistingimage'),(129,'Can add testimonial tabs',32,'add_testimonialtabs'),(130,'Can change testimonial tabs',32,'change_testimonialtabs'),(131,'Can delete testimonial tabs',32,'delete_testimonialtabs'),(132,'Can view testimonial tabs',32,'view_testimonialtabs'),(133,'Can add testimonial listing video',33,'add_testimoniallistingvideo'),(134,'Can change testimonial listing video',33,'change_testimoniallistingvideo'),(135,'Can delete testimonial listing video',33,'delete_testimoniallistingvideo'),(136,'Can view testimonial listing video',33,'view_testimoniallistingvideo'),(137,'Can add documentation assistance banner',34,'add_documentationassistancebanner'),(138,'Can change documentation assistance banner',34,'change_documentationassistancebanner'),(139,'Can delete documentation assistance banner',34,'delete_documentationassistancebanner'),(140,'Can view documentation assistance banner',34,'view_documentationassistancebanner'),(141,'Can add language lab banner',35,'add_languagelabbanner'),(142,'Can change language lab banner',35,'change_languagelabbanner'),(143,'Can delete language lab banner',35,'delete_languagelabbanner'),(144,'Can view language lab banner',35,'view_languagelabbanner'),(145,'Can add country service banner',36,'add_countryservicebanner'),(146,'Can change country service banner',36,'change_countryservicebanner'),(147,'Can delete country service banner',36,'delete_countryservicebanner'),(148,'Can view country service banner',36,'view_countryservicebanner'),(149,'Can add course service banner',37,'add_courseservicebanner'),(150,'Can change course service banner',37,'change_courseservicebanner'),(151,'Can delete course service banner',37,'delete_courseservicebanner'),(152,'Can view course service banner',37,'view_courseservicebanner'),(153,'Can add blog banner',38,'add_blogbanner'),(154,'Can change blog banner',38,'change_blogbanner'),(155,'Can delete blog banner',38,'delete_blogbanner'),(156,'Can view blog banner',38,'view_blogbanner'),(157,'Can add documentation assistance tab',39,'add_documentationassistancetab'),(158,'Can change documentation assistance tab',39,'change_documentationassistancetab'),(159,'Can delete documentation assistance tab',39,'delete_documentationassistancetab'),(160,'Can view documentation assistance tab',39,'view_documentationassistancetab'),(161,'Can add documentation assistance listing',40,'add_documentationassistancelisting'),(162,'Can change documentation assistance listing',40,'change_documentationassistancelisting'),(163,'Can delete documentation assistance listing',40,'delete_documentationassistancelisting'),(164,'Can view documentation assistance listing',40,'view_documentationassistancelisting'),(165,'Can add language lab listing',41,'add_languagelablisting'),(166,'Can change language lab listing',41,'change_languagelablisting'),(167,'Can delete language lab listing',41,'delete_languagelablisting'),(168,'Can view language lab listing',41,'view_languagelablisting'),(169,'Can add destination',42,'add_destination'),(170,'Can change destination',42,'change_destination'),(171,'Can delete destination',42,'delete_destination'),(172,'Can view destination',42,'view_destination'),(173,'Can add destination dedicated page',43,'add_destinationdedicatedpage'),(174,'Can change destination dedicated page',43,'change_destinationdedicatedpage'),(175,'Can delete destination dedicated page',43,'delete_destinationdedicatedpage'),(176,'Can view destination dedicated page',43,'view_destinationdedicatedpage'),(177,'Can add destination dedicated key fact',44,'add_destinationdedicatedkeyfact'),(178,'Can change destination dedicated key fact',44,'change_destinationdedicatedkeyfact'),(179,'Can delete destination dedicated key fact',44,'delete_destinationdedicatedkeyfact'),(180,'Can view destination dedicated key fact',44,'view_destinationdedicatedkeyfact'),(181,'Can add destination dedicated intake information',45,'add_destinationdedicatedintakeinformation'),(182,'Can change destination dedicated intake information',45,'change_destinationdedicatedintakeinformation'),(183,'Can delete destination dedicated intake information',45,'delete_destinationdedicatedintakeinformation'),(184,'Can view destination dedicated intake information',45,'view_destinationdedicatedintakeinformation'),(185,'Can add destination dedicated choose list',46,'add_destinationdedicatedchooselist'),(186,'Can change destination dedicated choose list',46,'change_destinationdedicatedchooselist'),(187,'Can delete destination dedicated choose list',46,'delete_destinationdedicatedchooselist'),(188,'Can view destination dedicated choose list',46,'view_destinationdedicatedchooselist'),(189,'Can add destination dedicated choose title',47,'add_destinationdedicatedchoosetitle'),(190,'Can change destination dedicated choose title',47,'change_destinationdedicatedchoosetitle'),(191,'Can delete destination dedicated choose title',47,'delete_destinationdedicatedchoosetitle'),(192,'Can view destination dedicated choose title',47,'view_destinationdedicatedchoosetitle'),(193,'Can add destination dedicated assistance',48,'add_destinationdedicatedassistance'),(194,'Can change destination dedicated assistance',48,'change_destinationdedicatedassistance'),(195,'Can delete destination dedicated assistance',48,'delete_destinationdedicatedassistance'),(196,'Can view destination dedicated assistance',48,'view_destinationdedicatedassistance'),(197,'Can add contact banner',49,'add_contactbanner'),(198,'Can change contact banner',49,'change_contactbanner'),(199,'Can delete contact banner',49,'delete_contactbanner'),(200,'Can view contact banner',49,'view_contactbanner'),(201,'Can add info hub',50,'add_infohub'),(202,'Can change info hub',50,'change_infohub'),(203,'Can delete info hub',50,'delete_infohub'),(204,'Can view info hub',50,'view_infohub'),(205,'Can add terms conditions banner',51,'add_termsconditionsbanner'),(206,'Can change terms conditions banner',51,'change_termsconditionsbanner'),(207,'Can delete terms conditions banner',51,'delete_termsconditionsbanner'),(208,'Can view terms conditions banner',51,'view_termsconditionsbanner'),(209,'Can add privacy policy banner',52,'add_privacypolicybanner'),(210,'Can change privacy policy banner',52,'change_privacypolicybanner'),(211,'Can delete privacy policy banner',52,'delete_privacypolicybanner'),(212,'Can view privacy policy banner',52,'view_privacypolicybanner'),(213,'Can add terms conditions content',53,'add_termsconditionscontent'),(214,'Can change terms conditions content',53,'change_termsconditionscontent'),(215,'Can delete terms conditions content',53,'delete_termsconditionscontent'),(216,'Can view terms conditions content',53,'view_termsconditionscontent'),(217,'Can add privacy policy content',54,'add_privacypolicycontent'),(218,'Can change privacy policy content',54,'change_privacypolicycontent'),(219,'Can delete privacy policy content',54,'delete_privacypolicycontent'),(220,'Can view privacy policy content',54,'view_privacypolicycontent'),(221,'Can add news events banner',55,'add_newseventsbanner'),(222,'Can change news events banner',55,'change_newseventsbanner'),(223,'Can delete news events banner',55,'delete_newseventsbanner'),(224,'Can view news events banner',55,'view_newseventsbanner'),(225,'Can add gallery banner',56,'add_gallerybanner'),(226,'Can change gallery banner',56,'change_gallerybanner'),(227,'Can delete gallery banner',56,'delete_gallerybanner'),(228,'Can view gallery banner',56,'view_gallerybanner'),(229,'Can add news events tab',57,'add_newseventstab'),(230,'Can change news events tab',57,'change_newseventstab'),(231,'Can delete news events tab',57,'delete_newseventstab'),(232,'Can view news events tab',57,'view_newseventstab'),(233,'Can add news events listing',58,'add_newseventslisting'),(234,'Can change news events listing',58,'change_newseventslisting'),(235,'Can delete news events listing',58,'delete_newseventslisting'),(236,'Can view news events listing',58,'view_newseventslisting'),(237,'Can add news events recap',59,'add_newseventsrecap'),(238,'Can change news events recap',59,'change_newseventsrecap'),(239,'Can delete news events recap',59,'delete_newseventsrecap'),(240,'Can view news events recap',59,'view_newseventsrecap'),(241,'Can add gallery create',60,'add_gallerycreate'),(242,'Can change gallery create',60,'change_gallerycreate'),(243,'Can delete gallery create',60,'delete_gallerycreate'),(244,'Can view gallery create',60,'view_gallerycreate'),(245,'Can add gallery add video',61,'add_galleryaddvideo'),(246,'Can change gallery add video',61,'change_galleryaddvideo'),(247,'Can delete gallery add video',61,'delete_galleryaddvideo'),(248,'Can view gallery add video',61,'view_galleryaddvideo'),(249,'Can add gallery add image',62,'add_galleryaddimage'),(250,'Can change gallery add image',62,'change_galleryaddimage'),(251,'Can delete gallery add image',62,'delete_galleryaddimage'),(252,'Can view gallery add image',62,'view_galleryaddimage'),(253,'Can add blog post',63,'add_blogpost'),(254,'Can change blog post',63,'change_blogpost'),(255,'Can delete blog post',63,'delete_blogpost'),(256,'Can view blog post',63,'view_blogpost'),(257,'Can add blog banner',64,'add_blogbanner'),(258,'Can change blog banner',64,'change_blogbanner'),(259,'Can delete blog banner',64,'delete_blogbanner'),(260,'Can view blog banner',64,'view_blogbanner'),(261,'Can add blog post',65,'add_blogpost'),(262,'Can change blog post',65,'change_blogpost'),(263,'Can delete blog post',65,'delete_blogpost'),(264,'Can view blog post',65,'view_blogpost'),(265,'Can add banner blog',66,'add_bannerblog'),(266,'Can change banner blog',66,'change_bannerblog'),(267,'Can delete banner blog',66,'delete_bannerblog'),(268,'Can view banner blog',66,'view_bannerblog'),(269,'Can add blog posts',67,'add_blogposts'),(270,'Can change blog posts',67,'change_blogposts'),(271,'Can delete blog posts',67,'delete_blogposts'),(272,'Can view blog posts',67,'view_blogposts'),(273,'Can add free education country',68,'add_freeeducationcountry'),(274,'Can change free education country',68,'change_freeeducationcountry'),(275,'Can delete free education country',68,'delete_freeeducationcountry'),(276,'Can view free education country',68,'view_freeeducationcountry'),(277,'Can add free education title',69,'add_freeeducationtitle'),(278,'Can change free education title',69,'change_freeeducationtitle'),(279,'Can delete free education title',69,'delete_freeeducationtitle'),(280,'Can view free education title',69,'view_freeeducationtitle'),(281,'Can add free education dedicated page',70,'add_freeeducationdedicatedpage'),(282,'Can change free education dedicated page',70,'change_freeeducationdedicatedpage'),(283,'Can delete free education dedicated page',70,'delete_freeeducationdedicatedpage'),(284,'Can view free education dedicated page',70,'view_freeeducationdedicatedpage'),(285,'Can add free education country dedicated page',71,'add_freeeducationcountrydedicatedpage'),(286,'Can change free education country dedicated page',71,'change_freeeducationcountrydedicatedpage'),(287,'Can delete free education country dedicated page',71,'delete_freeeducationcountrydedicatedpage'),(288,'Can view free education country dedicated page',71,'view_freeeducationcountrydedicatedpage'),(289,'Can add free education country dedicated page key fact listing',72,'add_freeeducationcountrydedicatedpagekeyfactlisting'),(290,'Can change free education country dedicated page key fact listing',72,'change_freeeducationcountrydedicatedpagekeyfactlisting'),(291,'Can delete free education country dedicated page key fact listing',72,'delete_freeeducationcountrydedicatedpagekeyfactlisting'),(292,'Can view free education country dedicated page key fact listing',72,'view_freeeducationcountrydedicatedpagekeyfactlisting'),(293,'Can add free education country dedicated page key fact title',73,'add_freeeducationcountrydedicatedpagekeyfacttitle'),(294,'Can change free education country dedicated page key fact title',73,'change_freeeducationcountrydedicatedpagekeyfacttitle'),(295,'Can delete free education country dedicated page key fact title',73,'delete_freeeducationcountrydedicatedpagekeyfacttitle'),(296,'Can view free education country dedicated page key fact title',73,'view_freeeducationcountrydedicatedpagekeyfacttitle'),(297,'Can add free education country dedicated page requirements listing',74,'add_freeeducationcountrydedicatedpagerequirementslisting'),(298,'Can change free education country dedicated page requirements listing',74,'change_freeeducationcountrydedicatedpagerequirementslisting'),(299,'Can delete free education country dedicated page requirements listing',74,'delete_freeeducationcountrydedicatedpagerequirementslisting'),(300,'Can view free education country dedicated page requirements listing',74,'view_freeeducationcountrydedicatedpagerequirementslisting'),(301,'Can add free education country dedicated page requirements title',75,'add_freeeducationcountrydedicatedpagerequirementstitle'),(302,'Can change free education country dedicated page requirements title',75,'change_freeeducationcountrydedicatedpagerequirementstitle'),(303,'Can delete free education country dedicated page requirements title',75,'delete_freeeducationcountrydedicatedpagerequirementstitle'),(304,'Can view free education country dedicated page requirements title',75,'view_freeeducationcountrydedicatedpagerequirementstitle'),(305,'Can add free education country dedicated page other options listing',76,'add_freeeducationcountrydedicatedpageotheroptionslisting'),(306,'Can change free education country dedicated page other options listing',76,'change_freeeducationcountrydedicatedpageotheroptionslisting'),(307,'Can delete free education country dedicated page other options listing',76,'delete_freeeducationcountrydedicatedpageotheroptionslisting'),(308,'Can view free education country dedicated page other options listing',76,'view_freeeducationcountrydedicatedpageotheroptionslisting'),(309,'Can add free education country dedicated page other options title',77,'add_freeeducationcountrydedicatedpageotheroptionstitle'),(310,'Can change free education country dedicated page other options title',77,'change_freeeducationcountrydedicatedpageotheroptionstitle'),(311,'Can delete free education country dedicated page other options title',77,'delete_freeeducationcountrydedicatedpageotheroptionstitle'),(312,'Can view free education country dedicated page other options title',77,'view_freeeducationcountrydedicatedpageotheroptionstitle'),(313,'Can add free education courses',78,'add_freeeducationcourses'),(314,'Can change free education courses',78,'change_freeeducationcourses'),(315,'Can delete free education courses',78,'delete_freeeducationcourses'),(316,'Can view free education courses',78,'view_freeeducationcourses'),(317,'Can add free course detail page banner',79,'add_freecoursedetailpagebanner'),(318,'Can change free course detail page banner',79,'change_freecoursedetailpagebanner'),(319,'Can delete free course detail page banner',79,'delete_freecoursedetailpagebanner'),(320,'Can view free course detail page banner',79,'view_freecoursedetailpagebanner'),(321,'Can add Free Course Detail Page Tab Content',80,'add_freecoursedetailpagetabcontent'),(322,'Can change Free Course Detail Page Tab Content',80,'change_freecoursedetailpagetabcontent'),(323,'Can delete Free Course Detail Page Tab Content',80,'delete_freecoursedetailpagetabcontent'),(324,'Can view Free Course Detail Page Tab Content',80,'view_freecoursedetailpagetabcontent'),(325,'Can add Free Course Detail Page Why Choose Item',81,'add_freecoursedetailpagewhychoose'),(326,'Can change Free Course Detail Page Why Choose Item',81,'change_freecoursedetailpagewhychoose'),(327,'Can delete Free Course Detail Page Why Choose Item',81,'delete_freecoursedetailpagewhychoose'),(328,'Can view Free Course Detail Page Why Choose Item',81,'view_freecoursedetailpagewhychoose'),(329,'Can add Free Course Detail Page Why Choose Title',82,'add_freecoursedetailpagewhychoosetitle'),(330,'Can change Free Course Detail Page Why Choose Title',82,'change_freecoursedetailpagewhychoosetitle'),(331,'Can delete Free Course Detail Page Why Choose Title',82,'delete_freecoursedetailpagewhychoosetitle'),(332,'Can view Free Course Detail Page Why Choose Title',82,'view_freecoursedetailpagewhychoosetitle'),(333,'Can add Free Course Detail Page Tab',83,'add_freecoursedetailpagetab'),(334,'Can change Free Course Detail Page Tab',83,'change_freecoursedetailpagetab'),(335,'Can delete Free Course Detail Page Tab',83,'delete_freecoursedetailpagetab'),(336,'Can view Free Course Detail Page Tab',83,'view_freecoursedetailpagetab'),(337,'Can add Social Media',84,'add_socialmedia'),(338,'Can change Social Media',84,'change_socialmedia'),(339,'Can delete Social Media',84,'delete_socialmedia'),(340,'Can view Social Media',84,'view_socialmedia');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authapp_user`
--

DROP TABLE IF EXISTS `authapp_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authapp_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `email` varchar(254) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `username` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authapp_user`
--

LOCK TABLES `authapp_user` WRITE;
/*!40000 ALTER TABLE `authapp_user` DISABLE KEYS */;
INSERT INTO `authapp_user` VALUES (3,'pbkdf2_sha256$870000$sEo4XUBBBjZ54WZJuq7wZy$8K6LXsCTNcQiN8G3LNHaBohXhdkDZ58d5SpDLTyGEPI=',NULL,1,'Crossroads','Career Consultants Pvt. Ltd',1,1,'2025-04-02 18:07:16.176582','ajayrenjith08@gmail.com','avatars/image.jpeg','Admin');
/*!40000 ALTER TABLE `authapp_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authapp_user_groups`
--

DROP TABLE IF EXISTS `authapp_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authapp_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `authapp_user_groups_user_id_group_id_532435ff_uniq` (`user_id`,`group_id`),
  KEY `authapp_user_groups_group_id_361087d7_fk_auth_group_id` (`group_id`),
  CONSTRAINT `authapp_user_groups_group_id_361087d7_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `authapp_user_groups_user_id_aad8a001_fk_authapp_user_id` FOREIGN KEY (`user_id`) REFERENCES `authapp_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authapp_user_groups`
--

LOCK TABLES `authapp_user_groups` WRITE;
/*!40000 ALTER TABLE `authapp_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `authapp_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authapp_user_user_permissions`
--

DROP TABLE IF EXISTS `authapp_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authapp_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `authapp_user_user_permis_user_id_permission_id_d73ed934_uniq` (`user_id`,`permission_id`),
  KEY `authapp_user_user_pe_permission_id_ea3ff82e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `authapp_user_user_pe_permission_id_ea3ff82e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `authapp_user_user_pe_user_id_fb111ce4_fk_authapp_u` FOREIGN KEY (`user_id`) REFERENCES `authapp_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authapp_user_user_permissions`
--

LOCK TABLES `authapp_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `authapp_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `authapp_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs_bannerblog`
--

DROP TABLE IF EXISTS `blogs_bannerblog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs_bannerblog` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs_bannerblog`
--

LOCK TABLES `blogs_bannerblog` WRITE;
/*!40000 ALTER TABLE `blogs_bannerblog` DISABLE KEYS */;
INSERT INTO `blogs_bannerblog` VALUES (1,'blog_image/banner_png_result.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Blogs</strong></h1>');
/*!40000 ALTER TABLE `blogs_bannerblog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs_blogposts`
--

DROP TABLE IF EXISTS `blogs_blogposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs_blogposts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `date_manual` varchar(255) DEFAULT NULL,
  `description` longtext,
  `content` longtext,
  `link` varchar(250) DEFAULT NULL,
  `dedicated_page_title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs_blogposts`
--

LOCK TABLES `blogs_blogposts` WRITE;
/*!40000 ALTER TABLE `blogs_blogposts` DISABLE KEYS */;
INSERT INTO `blogs_blogposts` VALUES (1,'blog_posts/detailedpagebanner_9QAAnEn.webp','<p><span class=\"ql-size-large\">What to Expect from Overseas Education Consultants in Kochi: A Step-by-Step Process</span></p>',NULL,'<p><span style=\"color: rgb(128, 128, 128);\">Feb 28, 2025</span></p>','<p>Are you dreaming of studying abroad but feeling overwhelmed with the choices and process? Choosing the right overseas education consultant can make or break your plans. Here\'s a user-friendly guide to help you choose the best consultants for your unique needs.</p>','<h3><span style=\"color: rgb(0, 51, 77);\">Start with Research</span></h3><h3><br></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Google search for overseas education consultants in Kochi.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Read reviews: Check out Google reviews, testimonials, and student success stories.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Visit websites: Look at their services, success rates, and partnerships with universities.</span></li></ol><p><br></p><h3><span style=\"color: rgb(0, 51, 77);\">Check Their Credentials</span></h3><h3><br></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Accreditation: Ensure they\'re accredited by relevant educational bodies.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Experience: Look for a proven track record of accomplishments.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Certifications: Verify their certifications and affiliations.</span></li></ol><p><br></p><h3><span style=\"color: rgb(0, 51, 77);\">Evaluate Their Services</span></h3><h3><br></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Personalized counseling to understand your aspirations.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">University Selection: Guidance in choosing the right university based on your profile.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Application Assistance: Help with documentation and submission.</span></li></ol><p><br></p><h3><span style=\"color: rgb(0, 51, 77);\">Consider Their Network</span></h3><h3><br></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">University Connections: Consultants with a wide network can offer more options.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Alumni Network: A strong alumni network means better support and insights.</span></li></ol><p><br></p><h3><span style=\"color: rgb(0, 51, 77);\">Transparency Is Key</span></h3><h3><br></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Fee Structure: Ensure there are no hidden charges.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Process Clarity: Clear explanation of each step in the process.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Success Rate: Ask for their success rate and track record.</span></li></ol><p><br></p><h3><span style=\"color: rgb(0, 51, 77);\">Location and Accessibility</span></h3><h3><br></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Local Office: Having a local office makes it easier for face-to-face consultations.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Online Presence: A strong online presence indicates they\'re up-to-date.</span></li></ol><p><br></p><h3><span style=\"color: rgb(0, 51, 77);\">Ask the Right Questions</span></h3><h3><br></h3><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Experience: How long has the company been in the market?</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Success Stories: Can they provide references from past students?</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Services Offered: What\'s included in their package?</span></li></ol><p><br></p><h3><span style=\"color: rgb(0, 51, 77);\">Student Support Services</span></h3><p><br></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Visa Assistance: Help with visa applications and interview preparation.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.373 0.034 259.733);\">Pre-Departure Briefing: Guidance on what to expect before leaving.</span></li></ol>','what-to-expect-from-overseas-education-consultants-in-kochi-a-step-by-step-process','<h1><strong style=\"color: rgb(255, 255, 255);\">What to Expect from Overseas Education Consultants in Kochi: A Step-by-Step Process</strong></h1>');
/*!40000 ALTER TABLE `blogs_blogposts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_contactbanner`
--

DROP TABLE IF EXISTS `contact_contactbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_contactbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_contactbanner`
--

LOCK TABLES `contact_contactbanner` WRITE;
/*!40000 ALTER TABLE `contact_contactbanner` DISABLE KEYS */;
INSERT INTO `contact_contactbanner` VALUES (1,'contact_banner/Contact_Us_2_result.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Contact Us</strong></h1>');
/*!40000 ALTER TABLE `contact_contactbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_infohub`
--

DROP TABLE IF EXISTS `contact_infohub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_infohub` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` longtext,
  `phone` longtext,
  `email` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_infohub`
--

LOCK TABLES `contact_infohub` WRITE;
/*!40000 ALTER TABLE `contact_infohub` DISABLE KEYS */;
INSERT INTO `contact_infohub` VALUES (1,'<p><span style=\"color: rgb(128, 128, 128);\">Crossroads Career Consultants Pvt. Ltd, Level 3, Oberon Mall, Edapally, Kochi, Kerala 682024</span></p>','<p><a href=\"tel:+91 95396 88800\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit; background-color: oklch(0.967 0.003 264.542);\">+91 95396 88800</a></p><p><a href=\"tel:+91 95396 88800\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: oklch(0.967 0.003 264.542); color: inherit;\">+91 95396 88800</a></p>','<p><a href=\"mailto:info@crossroadsge.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: oklch(0.967 0.003 264.542); color: rgb(128, 128, 128);\">info@crossroadsge.com</a></p>');
/*!40000 ALTER TABLE `contact_infohub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_courselisting`
--

DROP TABLE IF EXISTS `courses_courselisting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses_courselisting` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext,
  `image` varchar(100) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  `popular_course_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `courses_courselisting_link_2a887e07_uniq` (`link`),
  KEY `courses_courselistin_popular_course_id_5f7fc6ac_fk_courses_p` (`popular_course_id`),
  KEY `courses_cou_link_dd4e92_idx` (`link`),
  CONSTRAINT `courses_courselistin_popular_course_id_5f7fc6ac_fk_courses_p` FOREIGN KEY (`popular_course_id`) REFERENCES `courses_popularcourses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_courselisting`
--

LOCK TABLES `courses_courselisting` WRITE;
/*!40000 ALTER TABLE `courses_courselisting` DISABLE KEYS */;
INSERT INTO `courses_courselisting` VALUES (3,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">MBBS</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs</span></p>','course_images/Mask_Group_1112x.webp','mbbs',0,10),(4,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Ausbildung</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs</span></p>','course_images/Mask_Group_1122x.webp','ausbildung',0,10),(5,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Master’s</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs</span></p>','course_images/Mask_Group_1152x.webp','masters',0,13),(6,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Bachelor’s</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs</span></p>','course_images/Mask_Group_1142x.webp','bachelors',0,11),(7,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Healthcare Programs</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs</span></p>','course_images/Mask_Group_1162x.webp','healthcare-programs',0,10),(8,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Nursing</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs</span></p>','course_images/Mask_Group_1132x.webp','nursing',0,10);
/*!40000 ALTER TABLE `courses_courselisting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_freecoursedetailpagebanner`
--

DROP TABLE IF EXISTS `courses_freecoursedetailpagebanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses_freecoursedetailpagebanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `banner_image` varchar(100) DEFAULT NULL,
  `banner_title` longtext,
  `course_listing_id` bigint DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `courses_freecoursede_course_listing_id_69fc58d0_fk_courses_c` (`course_listing_id`),
  CONSTRAINT `courses_freecoursede_course_listing_id_69fc58d0_fk_courses_c` FOREIGN KEY (`course_listing_id`) REFERENCES `courses_courselisting` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_freecoursedetailpagebanner`
--

LOCK TABLES `courses_freecoursedetailpagebanner` WRITE;
/*!40000 ALTER TABLE `courses_freecoursedetailpagebanner` DISABLE KEYS */;
INSERT INTO `courses_freecoursedetailpagebanner` VALUES (1,'course_page_images/MBBSBg.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">MBBS</strong></h1>',3,0),(2,'course_page_images/ausbildung_a_result.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Ausbildung</strong></h1>',4,0);
/*!40000 ALTER TABLE `courses_freecoursedetailpagebanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_freecoursedetailpagetab`
--

DROP TABLE IF EXISTS `courses_freecoursedetailpagetab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses_freecoursedetailpagetab` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tab_name` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  `course_listing_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `courses_freecoursede_course_listing_id_33bfd674_fk_courses_c` (`course_listing_id`),
  CONSTRAINT `courses_freecoursede_course_listing_id_33bfd674_fk_courses_c` FOREIGN KEY (`course_listing_id`) REFERENCES `courses_courselisting` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_freecoursedetailpagetab`
--

LOCK TABLES `courses_freecoursedetailpagetab` WRITE;
/*!40000 ALTER TABLE `courses_freecoursedetailpagetab` DISABLE KEYS */;
INSERT INTO `courses_freecoursedetailpagetab` VALUES (1,'India',0,3),(2,'Aboard',0,3);
/*!40000 ALTER TABLE `courses_freecoursedetailpagetab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_freecoursedetailpagetabcontent`
--

DROP TABLE IF EXISTS `courses_freecoursedetailpagetabcontent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses_freecoursedetailpagetabcontent` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `background_image` varchar(100) DEFAULT NULL,
  `content` longtext,
  `order` int NOT NULL,
  `tab_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `courses_freecoursede_tab_id_96a78ec2_fk_courses_f` (`tab_id`),
  CONSTRAINT `courses_freecoursede_tab_id_96a78ec2_fk_courses_f` FOREIGN KEY (`tab_id`) REFERENCES `courses_freecoursedetailpagetab` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_freecoursedetailpagetabcontent`
--

LOCK TABLES `courses_freecoursedetailpagetabcontent` WRITE;
/*!40000 ALTER TABLE `courses_freecoursedetailpagetabcontent` DISABLE KEYS */;
INSERT INTO `courses_freecoursedetailpagetabcontent` VALUES (1,'course_tab_images/ausbildung_b_result-C4ucecrg_0fo7T1m.webp','<h6><span style=\"color: rgb(0, 51, 77); background-color: oklch(0.967 0.003 264.542);\">Overview</span></h6><p><br></p><p><span style=\"color: rgb(0, 51, 77); background-color: oklch(0.967 0.003 264.542);\">The Bachelor of Medicine, Bachelor of Surgery (MBBS) is one of the most sought-after undergraduate degrees in the medical field, leading to careers as doctors, surgeons, and specialists in various fields of medicine. In India, the MBBS program is a five-and-a-half-year course, including a one-year compulsory rotating internship. This program is regulated by the National Medical Commission (NMC), which ensures that medical colleges meet stringent academic standards to maintain the quality of medical education.</span></p>',0,1),(2,'course_tab_images/Ausbildung_A_result-UcAEwyV4_SUKA6i2.webp','<p><span style=\"background-color: oklch(0.967 0.003 264.542); color: rgb(0, 51, 77);\">Program Details</span></p><p><br></p><p><span style=\"background-color: oklch(0.967 0.003 264.542); color: rgb(0, 51, 77);\">The MBBS program is designed to provide students with a robust foundation in medical sciences, clinical practices, and professional ethics. To pursue an MBBS in India, students must qualify for the National Eligibility cum Entrance Test (NEET-UG). This highly competitive exam is the gateway to all MBBS programs in India, both government and private.</span></p><p><br></p>',0,1),(3,'course_tab_images/ausbildung_b_result-C4ucecrg_f4Ufb40.webp','<p><span style=\"background-color: oklch(0.967 0.003 264.542); color: rgb(0, 51, 77);\">Overview</span></p><p><br></p><p><span style=\"background-color: oklch(0.967 0.003 264.542); color: rgb(0, 51, 77);\">Medical colleges abroad are renowned for their high-quality education, advanced technology, and cutting-edge infrastructure. These institutions provide students with hands-on experience and a solid foundation in practical knowledge, which can greatly enhance their medical expertise. Additionally, MBBS graduates from foreign universities have the opportunity to explore diverse career paths beyond clinical practice, such as research, teaching, and various administrative roles within the healthcare sector. Positions such as medical officers, health inspectors, and disease control officers are just a few examples of the avenues open to those with an MBBS degree.</span></p><p><br></p>',0,2),(4,'course_tab_images/Ausbildung_A_result-UcAEwyV4_zH9a8iu.webp','<p><span style=\"background-color: oklch(0.967 0.003 264.542); color: rgb(0, 51, 77);\">Why Study Abroad</span></p><p><br></p><p><span style=\"background-color: oklch(0.967 0.003 264.542); color: rgb(0, 51, 77);\">In India, competition for MBBS seats is extremely high, and securing a top rank in the NEET exam is challenging due to the limited number of seats available in Indian medical colleges. Many students, therefore, consider studying abroad as an attractive alternative. Numerous countries accept NEET scores for admission to their medical schools, allowing Indian students to pursue their dream careers on a global platform.</span></p><p><br></p>',0,2);
/*!40000 ALTER TABLE `courses_freecoursedetailpagetabcontent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_freecoursedetailpagewhychoose`
--

DROP TABLE IF EXISTS `courses_freecoursedetailpagewhychoose`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses_freecoursedetailpagewhychoose` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext,
  `order` int NOT NULL,
  `course_listing_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `courses_freecoursede_course_listing_id_32159901_fk_courses_c` (`course_listing_id`),
  CONSTRAINT `courses_freecoursede_course_listing_id_32159901_fk_courses_c` FOREIGN KEY (`course_listing_id`) REFERENCES `courses_courselisting` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_freecoursedetailpagewhychoose`
--

LOCK TABLES `courses_freecoursedetailpagewhychoose` WRITE;
/*!40000 ALTER TABLE `courses_freecoursedetailpagewhychoose` DISABLE KEYS */;
INSERT INTO `courses_freecoursedetailpagewhychoose` VALUES (1,'<p><strong style=\"color: rgb(249, 146, 10);\">Affordable Education</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">MBBS programs in India offer high-quality education at a fraction of the cost compared to many international institutions.</span></p>',0,3);
/*!40000 ALTER TABLE `courses_freecoursedetailpagewhychoose` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_freecoursedetailpagewhychoosetitle`
--

DROP TABLE IF EXISTS `courses_freecoursedetailpagewhychoosetitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses_freecoursedetailpagewhychoosetitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `course_listing_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `courses_freecoursede_course_listing_id_df5df340_fk_courses_c` (`course_listing_id`),
  CONSTRAINT `courses_freecoursede_course_listing_id_df5df340_fk_courses_c` FOREIGN KEY (`course_listing_id`) REFERENCES `courses_courselisting` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_freecoursedetailpagewhychoosetitle`
--

LOCK TABLES `courses_freecoursedetailpagewhychoosetitle` WRITE;
/*!40000 ALTER TABLE `courses_freecoursedetailpagewhychoosetitle` DISABLE KEYS */;
INSERT INTO `courses_freecoursedetailpagewhychoosetitle` VALUES (2,'<h2><span class=\"ql-size-large\" style=\"color: oklch(0.967 0.003 264.542);\">Why Choose </span><span class=\"ql-size-large\" style=\"color: rgb(249, 146, 10);\">Ausbildung</span><span class=\"ql-size-large\" style=\"color: oklch(0.967 0.003 264.542);\"> from India?</span></h2>',3);
/*!40000 ALTER TABLE `courses_freecoursedetailpagewhychoosetitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_freeeducationcourses`
--

DROP TABLE IF EXISTS `courses_freeeducationcourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses_freeeducationcourses` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `course_image` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext,
  `link` varchar(100) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `courses_freeeducationcourses_link_68265ec4_uniq` (`link`),
  KEY `courses_fre_link_5f8286_idx` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_freeeducationcourses`
--

LOCK TABLES `courses_freeeducationcourses` WRITE;
/*!40000 ALTER TABLE `courses_freeeducationcourses` DISABLE KEYS */;
INSERT INTO `courses_freeeducationcourses` VALUES (1,'free_courses/MBBS-first.webp','<h2><strong style=\"color: rgb(249, 146, 10);\">MBBS Abroad</strong></h2>','<p><span style=\"color: rgb(255, 255, 255);\">Embark on a transformative journey to become a globally recognized medical professional with Crossroads. Our carefully selected partner universities provide world-class MBBS programs featuring cutting-edge facilities, extensive clinical training, and internationally accredited curricula. With personalized guidance on university selection, application processes, and visa support, we ensure a seamless transition to studying abroad. Prepare for a rewarding career in clinical practice, medical research, or healthcare administration with opportunities to work in top hospitals and institutions worldwide</span></p>','mbbs',0),(2,'free_courses/Ausbildung_A_result.webp','<h2><strong style=\"color: rgb(249, 146, 10);\">Ausbuildung</strong></h2>','<p><span style=\"color: rgb(255, 255, 255);\">Discover Germany\'s renowned Ausbildung program through Crossroads, a perfect blend of theoretical education and practical training designed to launch your career in high-demand fields. Whether you\'re interested in healthcare, engineering, information technology, or hospitality, our expert team guides you through program selection, application, and visa processes. With Ausbildung, you\'ll gain hands-on experience in real-world settings, earn while you learn, and secure a pathway to long-term career success in Germany or beyond.</span></p>','ausbuildung',0);
/*!40000 ALTER TABLE `courses_freeeducationcourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses_popularcourses`
--

DROP TABLE IF EXISTS `courses_popularcourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses_popularcourses` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tab_name` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_popularcourses`
--

LOCK TABLES `courses_popularcourses` WRITE;
/*!40000 ALTER TABLE `courses_popularcourses` DISABLE KEYS */;
INSERT INTO `courses_popularcourses` VALUES (9,'<p>All Courses</p>',0),(10,'<p>Professional</p>',0),(11,'<p>Bachelor\'s</p>',0),(13,'<p>Master\'s</p>',0);
/*!40000 ALTER TABLE `courses_popularcourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_authapp_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_authapp_user_id` FOREIGN KEY (`user_id`) REFERENCES `authapp_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (20,'about','aboutbanner'),(22,'about','aboutcoursesoffered'),(9,'about','abouthighlights'),(21,'about','aboutmissionvision'),(27,'about','aboutourvalues'),(23,'about','aboutourvaluestitle'),(24,'about','abouttailorguidance'),(25,'about','aboutwhycrossroads'),(26,'about','aboutwhycrossroadstitle'),(1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(6,'authapp','user'),(38,'blog','blogbanner'),(63,'blog','blogpost'),(66,'blogs','bannerblog'),(64,'blogs','blogbanner'),(65,'blogs','blogpost'),(67,'blogs','blogposts'),(49,'contact','contactbanner'),(50,'contact','infohub'),(4,'contenttypes','contenttype'),(10,'courses','courselisting'),(79,'courses','freecoursedetailpagebanner'),(83,'courses','freecoursedetailpagetab'),(80,'courses','freecoursedetailpagetabcontent'),(81,'courses','freecoursedetailpagewhychoose'),(82,'courses','freecoursedetailpagewhychoosetitle'),(78,'courses','freeeducationcourses'),(11,'courses','popularcourses'),(29,'courses','testimonialimage'),(30,'courses','testimonialvideo'),(68,'free_education','freeeducationcountry'),(71,'free_education','freeeducationcountrydedicatedpage'),(72,'free_education','freeeducationcountrydedicatedpagekeyfactlisting'),(73,'free_education','freeeducationcountrydedicatedpagekeyfacttitle'),(76,'free_education','freeeducationcountrydedicatedpageotheroptionslisting'),(77,'free_education','freeeducationcountrydedicatedpageotheroptionstitle'),(74,'free_education','freeeducationcountrydedicatedpagerequirementslisting'),(75,'free_education','freeeducationcountrydedicatedpagerequirementstitle'),(70,'free_education','freeeducationdedicatedpage'),(69,'free_education','freeeducationtitle'),(62,'gallery','galleryaddimage'),(61,'gallery','galleryaddvideo'),(56,'gallery','gallerybanner'),(60,'gallery','gallerycreate'),(12,'home','freeeducationcountry'),(14,'home','freeeducationcourses'),(13,'home','freeeducationtitle'),(7,'home','homebanner'),(15,'home','newsevents'),(16,'home','newseventstitle'),(17,'home','testimonialimage'),(19,'home','testimonialtitle'),(18,'home','testimonialvideo'),(55,'news_and_events','newseventsbanner'),(58,'news_and_events','newseventslisting'),(59,'news_and_events','newseventsrecap'),(57,'news_and_events','newseventstab'),(52,'privacy_policy','privacypolicybanner'),(54,'privacy_policy','privacypolicycontent'),(36,'services','countryservicebanner'),(37,'services','courseservicebanner'),(42,'services','destination'),(48,'services','destinationdedicatedassistance'),(46,'services','destinationdedicatedchooselist'),(47,'services','destinationdedicatedchoosetitle'),(45,'services','destinationdedicatedintakeinformation'),(44,'services','destinationdedicatedkeyfact'),(43,'services','destinationdedicatedpage'),(34,'services','documentationassistancebanner'),(40,'services','documentationassistancelisting'),(39,'services','documentationassistancetab'),(35,'services','languagelabbanner'),(41,'services','languagelablisting'),(8,'services','servicehighlights'),(5,'sessions','session'),(84,'social_media','socialmedia'),(51,'terms_and_conditions','termsconditionsbanner'),(53,'terms_and_conditions','termsconditionscontent'),(28,'testimonials','testimonialbanner'),(31,'testimonials','testimoniallistingimage'),(33,'testimonials','testimoniallistingvideo'),(32,'testimonials','testimonialtabs');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2025-04-02 17:54:59.682251'),(2,'contenttypes','0002_remove_content_type_name','2025-04-02 17:54:59.781653'),(3,'auth','0001_initial','2025-04-02 17:55:00.058247'),(4,'auth','0002_alter_permission_name_max_length','2025-04-02 17:55:00.118640'),(5,'auth','0003_alter_user_email_max_length','2025-04-02 17:55:00.123884'),(6,'auth','0004_alter_user_username_opts','2025-04-02 17:55:00.131055'),(7,'auth','0005_alter_user_last_login_null','2025-04-02 17:55:00.138764'),(8,'auth','0006_require_contenttypes_0002','2025-04-02 17:55:00.140808'),(9,'auth','0007_alter_validators_add_error_messages','2025-04-02 17:55:00.144840'),(10,'auth','0008_alter_user_username_max_length','2025-04-02 17:55:00.151291'),(11,'auth','0009_alter_user_last_name_max_length','2025-04-02 17:55:00.158003'),(12,'auth','0010_alter_group_name_max_length','2025-04-02 17:55:00.173572'),(13,'auth','0011_update_proxy_permissions','2025-04-02 17:55:00.179367'),(14,'auth','0012_alter_user_first_name_max_length','2025-04-02 17:55:00.186289'),(15,'authapp','0001_initial','2025-04-02 17:55:00.507205'),(16,'admin','0001_initial','2025-04-02 17:55:00.649046'),(17,'admin','0002_logentry_remove_auto_add','2025-04-02 17:55:00.656449'),(18,'admin','0003_logentry_add_action_flag_choices','2025-04-02 17:55:00.666068'),(19,'home','0001_initial','2025-04-02 17:55:00.684845'),(20,'services','0001_initial','2025-04-02 17:55:00.708620'),(21,'sessions','0001_initial','2025-04-02 17:55:00.745196'),(22,'about','0001_initial','2025-04-03 11:24:53.766082'),(23,'about','0002_alter_abouthighlights_link','2025-04-03 13:49:26.548220'),(24,'courses','0001_initial','2025-04-03 17:11:20.653147'),(25,'courses','0002_remove_popularcourses_subtitle_and_more','2025-04-03 17:20:49.432859'),(26,'home','0002_freeeducationcountry_freeeducationtitle','2025-04-07 17:01:53.209689'),(27,'home','0003_freeeducationcourses','2025-04-08 15:01:29.862755'),(28,'home','0004_rename_link_text_freeeducationcourses_link','2025-04-08 15:23:30.135514'),(29,'home','0005_rename_image_freeeducationcourses_course_image','2025-04-08 15:27:06.275675'),(30,'home','0006_newsevents','2025-04-09 08:34:29.866254'),(31,'home','0007_newseventstitle_alter_freeeducationtitle_options_and_more','2025-04-09 13:49:22.886717'),(32,'home','0008_testimonialimage_testimonialvideo','2025-04-09 17:12:33.006804'),(33,'home','0009_alter_testimonialimage_description_and_more','2025-04-09 17:21:26.769810'),(34,'home','0010_testimonialtitle','2025-04-10 06:16:25.005067'),(35,'about','0003_aboutbanner','2025-04-11 20:58:21.854198'),(36,'about','0004_aboutmissionvision_remove_aboutbanner_apply_now_url_and_more','2025-04-11 21:11:17.540143'),(37,'home','0011_alter_homebanner_image','2025-04-11 21:11:17.545604'),(38,'about','0005_aboutcoursesoffered_aboutcoursesofferedtitle_and_more','2025-04-11 21:18:18.719760'),(39,'about','0006_rename_description_aboutmissionvision_mission_description_and_more','2025-04-11 22:31:41.866545'),(40,'home','0012_alter_testimonialvideo_video','2025-04-11 22:31:41.965927'),(41,'about','0007_abouttailorguidance_aboutwhycrossroads_and_more','2025-04-14 14:36:18.554409'),(42,'about','0008_aboutwhycrossroadstitle_highlights','2025-04-14 14:38:32.815020'),(43,'about','0009_aboutourvalues_and_more','2025-04-15 07:32:39.714040'),(44,'about','0010_aboutwhycrossroadstitle_image','2025-04-16 18:05:26.801523'),(45,'testimonials','0001_initial','2025-04-16 21:38:05.464012'),(46,'courses','0003_testimonialimage_testimonialvideo','2025-04-19 05:16:06.070859'),(47,'testimonials','0002_testimonialtabs_testimoniallistingvideo_and_more','2025-04-19 05:16:06.271749'),(48,'testimonials','0003_alter_testimoniallistingimage_name_and_more','2025-04-19 05:45:40.239663'),(49,'services','0002_documentationassistancebanner','2025-04-20 14:25:51.498667'),(50,'services','0003_languagelabbanner','2025-04-20 14:28:46.223178'),(51,'services','0004_countryservicebanner_courseservicebanner','2025-04-20 14:45:28.000815'),(52,'blog','0001_initial','2025-04-20 16:24:38.026845'),(53,'services','0005_documentationassistancetab_and_more','2025-04-21 08:06:53.736508'),(54,'services','0006_alter_documentationassistancelisting_image','2025-04-21 09:54:55.397249'),(55,'services','0007_languagelablisting','2025-04-21 12:38:24.487161'),(56,'services','0008_languagelablisting_main_title','2025-04-21 13:30:35.342597'),(57,'courses','0004_delete_testimonialimage_delete_testimonialvideo','2025-04-22 07:53:53.634795'),(58,'services','0009_remove_countryservicebanner_description_and_more','2025-04-22 08:03:45.007529'),(59,'services','0010_destination','2025-04-22 13:06:06.825410'),(60,'services','0011_alter_countryservicebanner_image_and_more','2025-04-24 15:27:37.541325'),(61,'services','0012_destinationdedicatedkeyfact_slug_and_more','2025-04-30 17:56:12.118054'),(62,'services','0013_destinationdedicatedchooselist_and_more','2025-05-04 15:34:54.408186'),(63,'services','0014_destinationdedicatedchoosetitle_image','2025-05-04 15:37:57.268523'),(64,'services','0015_destinationdedicatedintakeinformation_intake_information_title','2025-05-04 17:17:20.828176'),(65,'services','0016_remove_destinationdedicatedchooselist_slug_and_more','2025-05-05 06:38:19.750120'),(66,'services','0017_remove_destinationdedicatedpage_slug','2025-05-05 06:39:42.996651'),(67,'services','0018_alter_destinationdedicatedchooselist_subcategory','2025-05-05 08:07:29.158400'),(68,'services','0019_destinationdedicatedassistance','2025-05-05 16:21:27.832980'),(69,'contact','0001_initial','2025-05-06 08:08:32.131036'),(70,'contact','0002_infohub','2025-05-06 09:07:35.015048'),(71,'contact','0003_alter_infohub_email','2025-05-06 09:49:40.026477'),(72,'contact','0004_alter_infohub_phone','2025-05-06 09:54:41.758765'),(73,'contact','0005_alter_infohub_email','2025-05-06 09:56:05.470824'),(74,'contact','0006_alter_infohub_email_alter_infohub_phone','2025-05-06 09:59:01.736915'),(75,'privacy_policy','0001_initial','2025-05-06 11:11:46.695982'),(76,'terms_and_conditions','0001_initial','2025-05-06 11:11:46.730033'),(77,'privacy_policy','0002_privacypolicycontent','2025-05-06 11:59:47.946184'),(78,'terms_and_conditions','0002_termsconditionscontent','2025-05-06 11:59:47.973794'),(79,'news_and_events','0001_initial','2025-05-06 14:46:06.135891'),(80,'gallery','0001_initial','2025-05-06 15:00:30.573162'),(81,'news_and_events','0002_newseventstab_newseventslisting','2025-05-06 15:42:17.760444'),(82,'home','0013_delete_newsevents','2025-05-07 05:02:22.073639'),(83,'news_and_events','0003_alter_newseventslisting_link_and_more','2025-05-07 05:11:36.925744'),(84,'news_and_events','0004_alter_newseventslisting_image','2025-05-07 05:11:50.488464'),(85,'news_and_events','0005_newseventslisting_date','2025-05-07 06:06:18.647450'),(86,'news_and_events','0006_remove_newseventslisting_news_events_listing_and_more','2025-05-07 10:02:51.160134'),(87,'news_and_events','0007_newseventstab','2025-05-07 10:03:51.469935'),(88,'news_and_events','0007_alter_newseventslisting_title','2025-05-07 17:08:00.261995'),(89,'news_and_events','0008_newseventslisting_detailed_page_additional_information_and_more','2025-05-07 17:51:34.937415'),(90,'news_and_events','0009_newseventslisting_google_map_latitude_and_more','2025-05-07 20:12:24.685625'),(91,'news_and_events','0010_newseventsrecap','2025-05-08 05:56:44.720450'),(92,'gallery','0002_gallerycreate','2025-05-08 08:41:48.367145'),(93,'gallery','0003_alter_gallerycreate_year','2025-05-08 08:48:25.067735'),(94,'gallery','0004_alter_gallerycreate_year','2025-05-08 08:48:43.909310'),(95,'gallery','0005_alter_gallerycreate_year','2025-05-08 08:49:06.579956'),(96,'gallery','0006_galleryaddimage_galleryaddvideo','2025-05-08 09:35:15.562499'),(97,'blog','0002_blogpost','2025-05-08 11:15:12.905551'),(98,'blog','0003_blogpost_date_manual','2025-05-08 11:18:58.849187'),(99,'blog','0004_rename_contents_blogpost_content','2025-05-08 11:23:13.805271'),(100,'blog','0003_remove_blogpost_link','2025-05-08 13:21:58.169119'),(101,'blog','0004_blogpost_slug','2025-05-08 13:23:16.153125'),(102,'blog','0005_remove_blogpost_slug_blogpost_link','2025-05-08 14:19:55.300785'),(104,'blogs','0001_initial','2025-05-08 15:32:19.822738'),(105,'blogs','0002_bannerblog_blogposts_delete_blogbanner_and_more','2025-05-08 15:32:20.025078'),(106,'blogs','0003_blogposts_dedicated_page_title','2025-05-08 18:05:23.741082'),(107,'blogs','0004_alter_blogposts_dedicated_page_title','2025-05-08 18:09:58.492252'),(108,'home','0014_freeeducationcountry_link','2025-05-09 09:01:12.316038'),(109,'home','0015_delete_freeeducationcountry_and_more','2025-05-09 09:55:41.321513'),(110,'free_education','0001_initial','2025-05-10 14:48:15.104994'),(111,'free_education','0002_freeeducationdedicatedpage','2025-05-10 15:42:56.459967'),(112,'free_education','0003_alter_freeeducationcountry_country_image_and_more','2025-05-10 15:49:15.178413'),(113,'free_education','0004_alter_freeeducationcountrydedicatedpage_free_education_country','2025-05-10 16:00:28.444962'),(114,'free_education','0005_freeeducationcountrydedicatedpagekeyfactlisting_and_more','2025-05-10 17:14:28.877342'),(115,'free_education','0006_freeeducationcountrydedicatedpagerequirementslisting_and_more','2025-05-10 19:49:24.132033'),(116,'free_education','0007_freeeducationcountrydedicatedpageotheroptionslisting_and_more','2025-05-11 05:22:27.846259'),(117,'courses','0005_alter_courselisting_link','2025-05-11 08:47:22.589665'),(118,'courses','0006_freeeducationcourses_freecoursedetailpagebanner','2025-05-11 11:19:47.925089'),(119,'home','0016_delete_freeeducationcourses','2025-05-11 11:19:47.963530'),(120,'courses','0007_freecoursedetailpagebanner_course_listing_and_more','2025-05-11 12:15:30.644024'),(121,'courses','0008_alter_courselisting_options_and_more','2025-05-11 12:43:38.738305'),(122,'home','0017_remove_homebanner_contact_us_url_homebanner_link','2025-05-11 13:36:28.261509'),(123,'courses','0009_alter_freecoursedetailpagebanner_course_and_more','2025-05-11 15:20:20.303732'),(124,'courses','0010_alter_freecoursedetailpagebanner_options_and_more','2025-05-11 16:32:57.747899'),(125,'courses','0011_remove_freecoursedetailpagewhychoosetitle_course','2025-05-12 17:43:29.150270'),(126,'courses','0012_freecoursedetailpagewhychoosetitle_course','2025-05-12 17:44:31.430168'),(127,'courses','0013_remove_freecoursedetailpagebanner_course_and_more','2025-05-12 18:10:32.049734'),(128,'social_media','0001_initial','2025-05-12 20:52:45.203346');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('miy61s3ewkvqdsrxdho2cj0dowm8m4zj','.eJxVjMsOwiAQRf-FtSE8WmBcuu83kJkBpWogKe3K-O_apAvd3nPOfYmI21ri1vMS5yTOQovT70bIj1x3kO5Yb01yq-syk9wVedAup5by83K4fwcFe_nWVxuMt-x9QjaKFA8-uECkkCHpbDKM4Ixm4xyAdQTGA2nnR4BBJxzE-wPS1jb7:1u02RI:7ICBDQ11w0naXHtaGjCdVCwT8WDHnLweK76XlOHumdg','2025-04-16 18:03:48.475630');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationcountry`
--

DROP TABLE IF EXISTS `free_education_freeeducationcountry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationcountry` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `country_image` varchar(100) DEFAULT NULL,
  `country_name` varchar(255) DEFAULT NULL,
  `link` varchar(250) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationcountry`
--

LOCK TABLES `free_education_freeeducationcountry` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationcountry` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationcountry` VALUES (2,'free_education_country/austria_result_hMoCj5M.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Austria</span></p>','austria',0),(3,'free_education_country/germany_result_FeDMXK2.webp','<p><span style=\"color: rgb(0, 51, 77);\">Germany</span></p>','germany',0),(4,'free_education_country/slovakia.png','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Slovakia</strong></p>','slovakia',0),(5,'free_education_country/slovenia_result.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Slovenia</span></p>','slovenia',0),(6,'free_education_country/italy_result.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Italy</span></p>','italy',0);
/*!40000 ALTER TABLE `free_education_freeeducationcountry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationcountrydedicatedpage`
--

DROP TABLE IF EXISTS `free_education_freeeducationcountrydedicatedpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationcountrydedicatedpage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `banner_image` varchar(100) DEFAULT NULL,
  `banner_title` varchar(255) DEFAULT NULL,
  `free_education_country_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `free_education_freee_free_education_count_bd73f560_fk_free_educ` (`free_education_country_id`),
  CONSTRAINT `free_education_freee_free_education_count_bd73f560_fk_free_educ` FOREIGN KEY (`free_education_country_id`) REFERENCES `free_education_freeeducationcountry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationcountrydedicatedpage`
--

LOCK TABLES `free_education_freeeducationcountrydedicatedpage` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpage` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationcountrydedicatedpage` VALUES (1,'free_education_country/austriafree_result.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Austria</strong></h1>',2);
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationcountrydedicatedpagekeyfactlisting`
--

DROP TABLE IF EXISTS `free_education_freeeducationcountrydedicatedpagekeyfactlisting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationcountrydedicatedpagekeyfactlisting` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext,
  `free_education_country_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `free_education_freee_free_education_count_8ad13833_fk_free_educ` (`free_education_country_id`),
  CONSTRAINT `free_education_freee_free_education_count_8ad13833_fk_free_educ` FOREIGN KEY (`free_education_country_id`) REFERENCES `free_education_freeeducationcountry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationcountrydedicatedpagekeyfactlisting`
--

LOCK TABLES `free_education_freeeducationcountrydedicatedpagekeyfactlisting` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpagekeyfactlisting` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationcountrydedicatedpagekeyfactlisting` VALUES (1,'<p><strong style=\"color: rgb(0, 51, 77);\">No Tuition Fees</strong></p>','<p><span style=\"color: rgb(0, 51, 77);\">Public universities in Austria provide free tuition for both domestic and international students at undergraduate and postgraduate levels.</span></p>',2),(2,'<p><strong style=\"color: rgb(0, 51, 77);\">Support for Developing Countries</strong></p>','<p><span style=\"color: rgb(0, 51, 77);\">Many public universities offer tuition exemptions for students from developing countries, reducing financial barriers.</span></p>',2),(3,'<p><strong style=\"color: rgb(0, 51, 77);\">Scholarship Opportunities</strong></p>','<p><span style=\"color: rgb(0, 51, 77);\">A range of institutions and scholarship providers offer financial support to cover tuition fees, living expenses, and other costs.</span></p>',2),(4,'<p><strong style=\"color: rgb(0, 51, 77);\">Global Career Prospects</strong></p>','<p><span style=\"color: rgb(0, 51, 77);\">A degree from Austria opens doors to international careers in various fields.</span></p>',2),(5,'<p><strong style=\"color: rgb(0, 51, 77);\">Accessible Education</strong></p>','<p><span style=\"color: rgb(0, 51, 77);\">Scholarships and exemptions make education in Austria affordable and accessible for international students.</span></p>',2),(6,'<p><strong style=\"color: rgb(0, 51, 77);\">High-Quality Education</strong></p>','<p><span style=\"color: rgb(0, 51, 77);\">Austrian universities maintain rigorous academic standards, ensuring world-class education.</span></p>',2);
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpagekeyfactlisting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationcountrydedicatedpagekeyfacttitle`
--

DROP TABLE IF EXISTS `free_education_freeeducationcountrydedicatedpagekeyfacttitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationcountrydedicatedpagekeyfacttitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `key_fact_main_title` varchar(255) DEFAULT NULL,
  `free_education_country_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `free_education_freee_free_education_count_c4f7fc22_fk_free_educ` (`free_education_country_id`),
  CONSTRAINT `free_education_freee_free_education_count_c4f7fc22_fk_free_educ` FOREIGN KEY (`free_education_country_id`) REFERENCES `free_education_freeeducationcountry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationcountrydedicatedpagekeyfacttitle`
--

LOCK TABLES `free_education_freeeducationcountrydedicatedpagekeyfacttitle` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpagekeyfacttitle` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationcountrydedicatedpagekeyfacttitle` VALUES (1,'<h2><span style=\"color: rgb(0, 51, 77);\">Launch Your Future with Free Education in Austria</span></h2>',2);
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpagekeyfacttitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationcountrydedicatedpageotheroptions1146`
--

DROP TABLE IF EXISTS `free_education_freeeducationcountrydedicatedpageotheroptions1146`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationcountrydedicatedpageotheroptions1146` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `main_title` varchar(255) DEFAULT NULL,
  `free_education_country_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `free_education_freee_free_education_count_aa15cbe0_fk_free_educ` (`free_education_country_id`),
  CONSTRAINT `free_education_freee_free_education_count_aa15cbe0_fk_free_educ` FOREIGN KEY (`free_education_country_id`) REFERENCES `free_education_freeeducationcountry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationcountrydedicatedpageotheroptions1146`
--

LOCK TABLES `free_education_freeeducationcountrydedicatedpageotheroptions1146` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpageotheroptions1146` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationcountrydedicatedpageotheroptions1146` VALUES (1,'<h2><span style=\"color: rgb(0, 51, 77);\">Other Options for Free or Affordable Education Abroad</span></h2>',2);
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpageotheroptions1146` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationcountrydedicatedpageotheroptions9f2c`
--

DROP TABLE IF EXISTS `free_education_freeeducationcountrydedicatedpageotheroptions9f2c`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationcountrydedicatedpageotheroptions9f2c` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `list_title` varchar(255) DEFAULT NULL,
  `content` longtext,
  `free_education_country_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `free_education_freee_free_education_count_f03fb2d7_fk_free_educ` (`free_education_country_id`),
  CONSTRAINT `free_education_freee_free_education_count_f03fb2d7_fk_free_educ` FOREIGN KEY (`free_education_country_id`) REFERENCES `free_education_freeeducationcountry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationcountrydedicatedpageotheroptions9f2c`
--

LOCK TABLES `free_education_freeeducationcountrydedicatedpageotheroptions9f2c` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpageotheroptions9f2c` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationcountrydedicatedpageotheroptions9f2c` VALUES (1,'<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Nordic Countries</span></p>','<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(0, 51, 77);\">Norway: Offers completely tuition-free education for all students, regardless of nationality or level of study.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(0, 51, 77);\">Denmark, Sweden, Finland: Free education available only to EU/EEA &amp; Swiss students for bachelor\'s and master\'s programs.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(0, 51, 77);\">Non-EU/EEA students must pay tuition fees in Denmark, Sweden, and Finland.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(0, 51, 77);\">PhD programs across these countries are fully funded, often including a stipend.</span></li></ol>',2),(2,'<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Scholarship Friendly Countries</span></p>','<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(0, 51, 77);\">Countries like Greece, Japan, China, Switzerland, the Netherlands, and South Korea offer full scholarships for international students.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(0, 51, 77);\">Note: Scholarship availability and criteria vary by institution, so checking details is crucial.</span></li></ol>',2);
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpageotheroptions9f2c` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationcountrydedicatedpagerequirements161b`
--

DROP TABLE IF EXISTS `free_education_freeeducationcountrydedicatedpagerequirements161b`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationcountrydedicatedpagerequirements161b` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `list_title` varchar(255) DEFAULT NULL,
  `list_description` longtext,
  `free_education_country_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `free_education_freee_free_education_count_dc36e8d5_fk_free_educ` (`free_education_country_id`),
  CONSTRAINT `free_education_freee_free_education_count_dc36e8d5_fk_free_educ` FOREIGN KEY (`free_education_country_id`) REFERENCES `free_education_freeeducationcountry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationcountrydedicatedpagerequirements161b`
--

LOCK TABLES `free_education_freeeducationcountrydedicatedpagerequirements161b` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpagerequirements161b` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationcountrydedicatedpagerequirements161b` VALUES (1,'<p><strong style=\"color: rgb(249, 146, 10);\">Application Deadlines</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">For bachelor’s and diploma programs, students must register by September 5 for the winter semester and February 5 for the summer semester.</span></p>',2),(2,'<p><strong style=\"color: rgb(249, 146, 10);\">English Proficiency</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Many universities accept alternative English proficiency tests, and some may waive this requirement for students who have completed prior education in English.</span></p>',2);
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpagerequirements161b` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationcountrydedicatedpagerequirementsf70d`
--

DROP TABLE IF EXISTS `free_education_freeeducationcountrydedicatedpagerequirementsf70d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationcountrydedicatedpagerequirementsf70d` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `requirement_background_image` varchar(100) DEFAULT NULL,
  `requirement_title` varchar(255) DEFAULT NULL,
  `requirement_description` longtext,
  `content` longtext,
  `free_education_country_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `free_education_freee_free_education_count_6fa05728_fk_free_educ` (`free_education_country_id`),
  CONSTRAINT `free_education_freee_free_education_count_6fa05728_fk_free_educ` FOREIGN KEY (`free_education_country_id`) REFERENCES `free_education_freeeducationcountry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationcountrydedicatedpagerequirementsf70d`
--

LOCK TABLES `free_education_freeeducationcountrydedicatedpagerequirementsf70d` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpagerequirementsf70d` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationcountrydedicatedpagerequirementsf70d` VALUES (1,'free_education_country/BANNER_PNG_result.webp','<h2><span style=\"color: rgb(255, 255, 255);\">Want Free Education in Austria?</span></h2><h2><span style=\"color: rgb(255, 255, 255);\">Here\'s What You Need to </span><span style=\"color: rgb(249, 146, 10);\">Qualify</span></h2>','<p><span style=\"color: rgb(255, 255, 255);\">Public universities in Austria provide free tuition for both domestic and international students at the undergraduate and postgraduate levels, with additional tuition exemptions for students from developing countries.</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Public universities in Austria provide free tuition for both domestic and international students. However, students must pay a nominal student union membership fee and student accident insurance fee each semester. Scholarships are available to cover these and living expenses.</span></p>',2);
/*!40000 ALTER TABLE `free_education_freeeducationcountrydedicatedpagerequirementsf70d` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `free_education_freeeducationtitle`
--

DROP TABLE IF EXISTS `free_education_freeeducationtitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `free_education_freeeducationtitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `free_education_freeeducationtitle`
--

LOCK TABLES `free_education_freeeducationtitle` WRITE;
/*!40000 ALTER TABLE `free_education_freeeducationtitle` DISABLE KEYS */;
INSERT INTO `free_education_freeeducationtitle` VALUES (1,'<h2><span style=\"color: rgb(0, 51, 77);\">Free</span> <strong style=\"color: rgb(249, 146, 10);\">Education</strong></h2>','<p><span style=\"color: oklch(0.446 0.03 256.802);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally.</span></p>');
/*!40000 ALTER TABLE `free_education_freeeducationtitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_galleryaddimage`
--

DROP TABLE IF EXISTS `gallery_galleryaddimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_galleryaddimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `gallery_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gallery_galleryaddim_gallery_id_35f692bd_fk_gallery_g` (`gallery_id`),
  CONSTRAINT `gallery_galleryaddim_gallery_id_35f692bd_fk_gallery_g` FOREIGN KEY (`gallery_id`) REFERENCES `gallery_gallerycreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_galleryaddimage`
--

LOCK TABLES `gallery_galleryaddimage` WRITE;
/*!40000 ALTER TABLE `gallery_galleryaddimage` DISABLE KEYS */;
INSERT INTO `gallery_galleryaddimage` VALUES (1,'gallery_images/1_result.webp',1),(2,'gallery_images/2_result.webp',1),(3,'gallery_images/3_result.webp',2);
/*!40000 ALTER TABLE `gallery_galleryaddimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_galleryaddvideo`
--

DROP TABLE IF EXISTS `gallery_galleryaddvideo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_galleryaddvideo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `video` varchar(100) DEFAULT NULL,
  `gallery_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gallery_galleryaddvi_gallery_id_e810b21e_fk_gallery_g` (`gallery_id`),
  CONSTRAINT `gallery_galleryaddvi_gallery_id_e810b21e_fk_gallery_g` FOREIGN KEY (`gallery_id`) REFERENCES `gallery_gallerycreate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_galleryaddvideo`
--

LOCK TABLES `gallery_galleryaddvideo` WRITE;
/*!40000 ALTER TABLE `gallery_galleryaddvideo` DISABLE KEYS */;
INSERT INTO `gallery_galleryaddvideo` VALUES (1,'gallery_videos/3252424-uhd_3840_2160_25fps_1.mp4',1),(2,'gallery_videos/3252424-uhd_3840_2160_25fps_1_kb3J4aD.mp4',2);
/*!40000 ALTER TABLE `gallery_galleryaddvideo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_gallerybanner`
--

DROP TABLE IF EXISTS `gallery_gallerybanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_gallerybanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_gallerybanner`
--

LOCK TABLES `gallery_gallerybanner` WRITE;
/*!40000 ALTER TABLE `gallery_gallerybanner` DISABLE KEYS */;
INSERT INTO `gallery_gallerybanner` VALUES (1,'gallery_banner/banner.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Gallery</strong></h1>');
/*!40000 ALTER TABLE `gallery_gallerybanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_gallerycreate`
--

DROP TABLE IF EXISTS `gallery_gallerycreate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_gallerycreate` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `year` varchar(250) DEFAULT NULL,
  `link` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_gallerycreate`
--

LOCK TABLES `gallery_gallerycreate` WRITE;
/*!40000 ALTER TABLE `gallery_gallerycreate` DISABLE KEYS */;
INSERT INTO `gallery_gallerycreate` VALUES (1,'gallery_create/1_result.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Germany</strong></p>','<p><strong style=\"color: rgb(0, 51, 77);\">(2024)</strong></p>','germany'),(2,'gallery_create/2_result.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">France</strong></p>','<p><strong style=\"color: rgb(0, 51, 77);\">(2024)</strong></p>','france');
/*!40000 ALTER TABLE `gallery_gallerycreate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_homebanner`
--

DROP TABLE IF EXISTS `home_homebanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_homebanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `apply_now_url` varchar(200) DEFAULT NULL,
  `order` int NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link` (`link`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_homebanner`
--

LOCK TABLES `home_homebanner` WRITE;
/*!40000 ALTER TABLE `home_homebanner` DISABLE KEYS */;
INSERT INTO `home_homebanner` VALUES (1,'home_banner/ausbildung_b_result_qJVt4hQ.webp','<h1><span style=\"color: rgb(255, 255, 255);\">Discover </span><strong class=\"ql-size-huge\" style=\"color: rgb(249, 146, 10);\">Ausbildung</strong></h1><h1><span style=\"color: rgb(255, 255, 255);\">Dreams Take Wings</span></h1><h1><span style=\"color: rgb(255, 255, 255);\">Beyond Borders</span></h1>','<p><span style=\"color: rgb(255, 255, 255);\">Discover opportunities to study medicine abroad with our expert guidance and support.</span></p>',NULL,1,'ausbildung'),(2,'home_banner/Mask_Group_482x.webp','<h1><span style=\"color: rgb(255, 255, 255);\">Let your </span><strong class=\"ql-size-huge\" style=\"color: rgb(249, 146, 10);\">MBBS</strong></h1><h1><span style=\"color: rgb(255, 255, 255);\">Dreams Take Wings</span></h1><h1><span style=\"color: rgb(255, 255, 255);\">Beyond Borders</span></h1>','<p><span style=\"color: rgb(255, 255, 255);\">Pursue your MBBS degree abroad with confidence. </span></p>',NULL,0,'mbbs');
/*!40000 ALTER TABLE `home_homebanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_newseventstitle`
--

DROP TABLE IF EXISTS `home_newseventstitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_newseventstitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_newseventstitle`
--

LOCK TABLES `home_newseventstitle` WRITE;
/*!40000 ALTER TABLE `home_newseventstitle` DISABLE KEYS */;
INSERT INTO `home_newseventstitle` VALUES (1,'<h2><strong style=\"color: rgb(0, 51, 77);\">News &amp;</strong><strong> </strong><strong style=\"color: rgb(249, 146, 10);\">Events</strong></h2>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally.</span></p>');
/*!40000 ALTER TABLE `home_newseventstitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_testimonialimage`
--

DROP TABLE IF EXISTS `home_testimonialimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_testimonialimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `flag` varchar(100) DEFAULT NULL,
  `rating` int unsigned DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`),
  CONSTRAINT `home_testimonialimage_chk_1` CHECK ((`rating` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_testimonialimage`
--

LOCK TABLES `home_testimonialimage` WRITE;
/*!40000 ALTER TABLE `home_testimonialimage` DISABLE KEYS */;
INSERT INTO `home_testimonialimage` VALUES (1,'testimonial_images/Arunima_result.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Arunima</span></p>','flags/slovakia-12x.webp',NULL,'<p><span style=\"color: rgb(128, 128, 128);\">I had a good experience dealing with Crossroads. They assisted me with everything that was needed for my studies in Germany. Even helped me with travel assistance. Thanks to team Crossroads</span></p>'),(2,'testimonial_images/Aju_Anil_result.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Aju Anil</span></p>','flags/Australia.webp',NULL,'<p><span style=\"color: rgb(128, 128, 128);\">I had a very smooth experience in my journey to Germany for Au Pair. Thanks to the team at Crossroads. I didn’t know anything. They made everything easy for me. I had to just submit the documents that was requested and they did the rest. Also helped me with the pickup and stay in Germany. Thanks to the team for such a smooth and wonderful experience.</span><span class=\"ql-cursor\">﻿</span></p>'),(3,'testimonial_images/Aleena_susan_result.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Aleena Susan</span></p>','flags/Germany.webp',NULL,'<p><span style=\"color: rgb(128, 128, 128);\">Not many consultants assist with Ausbildung IT, so I was also a bit worried when I approached Crossroads. However, they made it a smooth process. I was able to attend the required interviews and got my offer and contract without any delay. Today when I am in Germany, I am thankful to the Crossroads team for making my journey possible.</span></p>');
/*!40000 ALTER TABLE `home_testimonialimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_testimonialtitle`
--

DROP TABLE IF EXISTS `home_testimonialtitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_testimonialtitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_testimonialtitle`
--

LOCK TABLES `home_testimonialtitle` WRITE;
/*!40000 ALTER TABLE `home_testimonialtitle` DISABLE KEYS */;
INSERT INTO `home_testimonialtitle` VALUES (1,'<h2><span style=\"color: rgb(0, 51, 77);\">What Our</span><strong> </strong><span style=\"color: rgb(249, 146, 10);\">Students Say</span></h2>','<p><span style=\"color: rgb(128, 128, 128);\">We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally.</span></p>');
/*!40000 ALTER TABLE `home_testimonialtitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_testimonialvideo`
--

DROP TABLE IF EXISTS `home_testimonialvideo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_testimonialvideo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `video` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `flag` varchar(100) NOT NULL,
  `rating` int unsigned DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`),
  CONSTRAINT `home_testimonialvideo_chk_1` CHECK ((`rating` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_testimonialvideo`
--

LOCK TABLES `home_testimonialvideo` WRITE;
/*!40000 ALTER TABLE `home_testimonialvideo` DISABLE KEYS */;
INSERT INTO `home_testimonialvideo` VALUES (2,'testimonial_videos/Video1.mp4','<p><span style=\"color: rgb(0, 51, 77);\">Dibin Mathew</span></p>','flags/Group_4772x_QjUudlI.webp',NULL,'<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is a dummy or placeholder text commonly used in graphic design.</span></p>'),(3,'testimonial_videos/SampleVideo_1280x720_1mb_nCnFPLN.mp4','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Divya Ajith</span></p>','flags/austria-12x.webp',NULL,'<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is a dummy or placeholder text commonly used in graphic design.</span></p>');
/*!40000 ALTER TABLE `home_testimonialvideo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news_and_events_newseventsbanner`
--

DROP TABLE IF EXISTS `news_and_events_newseventsbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_and_events_newseventsbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_and_events_newseventsbanner`
--

LOCK TABLES `news_and_events_newseventsbanner` WRITE;
/*!40000 ALTER TABLE `news_and_events_newseventsbanner` DISABLE KEYS */;
INSERT INTO `news_and_events_newseventsbanner` VALUES (1,'news_and_events_banner/banner.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">News and Events</strong></h1>');
/*!40000 ALTER TABLE `news_and_events_newseventsbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news_and_events_newseventslisting`
--

DROP TABLE IF EXISTS `news_and_events_newseventslisting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_and_events_newseventslisting` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(1500) DEFAULT NULL,
  `description` longtext,
  `image` varchar(100) DEFAULT NULL,
  `link` varchar(500) DEFAULT NULL,
  `order` int NOT NULL,
  `date` date DEFAULT NULL,
  `detailed_page_additional_information` longtext,
  `detailed_page_date` varchar(500) DEFAULT NULL,
  `detailed_page_description` longtext,
  `detailed_page_event_category` varchar(250) DEFAULT NULL,
  `detailed_page_event_location` varchar(1500) DEFAULT NULL,
  `detailed_page_image` varchar(100) DEFAULT NULL,
  `detailed_page_time` varchar(1500) DEFAULT NULL,
  `detailed_page_title` varchar(1500) DEFAULT NULL,
  `google_map_latitude` varchar(250) DEFAULT NULL,
  `google_map_longitude` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_and_events_newseventslisting`
--

LOCK TABLES `news_and_events_newseventslisting` WRITE;
/*!40000 ALTER TABLE `news_and_events_newseventslisting` DISABLE KEYS */;
INSERT INTO `news_and_events_newseventslisting` VALUES (1,'<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">How Overseas Education Consultants in Kochi Can Transform Your Future</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">In today’s globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...</span></p>','events_images/News1_result_yjo9ZgA.webp','how-overseas-education-consultants-in-kochi-can-transform-your-future',0,'2024-12-12','<p><span style=\"color: rgb(128, 128, 128);\">Additional information about the upcoming event. This section can include details such as agenda, speakers, or registration information.</span></p>','<p><span class=\"ql-size-large\">Oct 24, 2024</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">In today’s globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration</span></p>','<p><span class=\"ql-size-large\">Past Events</span></p>','<p><span class=\"ql-size-large\">Oberon Mall Parking, NH Bye Pass, Padivattom, Edappally, Ernakulam, Kerala 682024</span></p>','events_images/banner.webp','<p><span class=\"ql-size-large\">10:00 AM - 01:00 PM</span></p>','<h1><strong style=\"color: rgb(255, 255, 255);\">How Overseas Education Consultants in Kochi Can Transform Your Future</strong></h1>',NULL,NULL),(2,'<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">How to Choose the Best Overseas Education Consultants in Kochi for Your Needs</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">Are you dreaming of studying abroad but feeling overwhelmed with the choices and processes? Choosing the right overseas education consultant can make or break your plans</span></p>','events_images/News2_result_xBKq4FG.webp','how-to-choose-the-best-overseas-education-consultants-in-kochi-for-your-needs',0,'2024-12-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">What to Expect from Overseas Education Consultants in Kochi: A Step-by-Step Process</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">ls: We share a wealth of resources, including study guides, practice questions, and sample papers. These materials are curated to match the exam patterns and difficulty levels.</span></p>','events_images/News3_result_LvTNk7w.webp','what-to-expect-from-overseas-education-consultants-in-kochi-a-step-by-step-process',0,'2024-12-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">UK Admission Day Kochi</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span></p>','events_images/News1_result_1ZqSQhS.webp','uk-admission-day-kochi',0,'2025-05-30',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">International Education Fair Delhi</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span></p>','events_images/News2_result_zrEjeve.webp','international-education-fair-delhi',0,'2025-05-30','<p><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.446 0.03 256.802);\">Additional information about the upcoming event. This section can include details such as agenda, speakers, or registration information.</span></p>','<p><span class=\"ql-size-large\">May 30, 2025</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span></p>','<p><span class=\"ql-size-large\">Oberon Mall Parking, NH Bye Pass, Padivattom, Edappally, Ernakulam, Kerala 682024</span></p>','','events_images/banner_5kBjOiE.webp','<p><span class=\"ql-size-large\">10:00 AM - 01:00 PM</span></p>','<h1><strong style=\"color: rgb(255, 255, 255);\">International Education Fair Delhi</strong></h1>',NULL,NULL),(6,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Education Fair Trivandrum</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span></p>','events_images/News3_result_ZPhhs1C.webp','international-education-fair-trivandrum',0,'2025-05-30',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Austria Admission Day </span></p><p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Kochi</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span></p>','events_images/News4_result_68Brt9V.webp','austria-admission-day-kochi',0,'2025-05-30',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Education Fair Mumbai</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span></p>','events_images/News5_qFfLIIy.webp','international-education-fair-mumbai',0,'2025-05-30',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Italy Admission Day Kochi</span></p>','<p><span style=\"color: rgb(128, 128, 128);\">Lorem ipsum is simply dummy text of the printing and typesetting industry.</span></p>','events_images/News6_5UP4rY3.webp','italy-admission-day-kochi',0,'2025-05-09',NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `news_and_events_newseventslisting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news_and_events_newseventsrecap`
--

DROP TABLE IF EXISTS `news_and_events_newseventsrecap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_and_events_newseventsrecap` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `event_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `news_and_events_news_event_id_00dbb49a_fk_news_and_` (`event_id`),
  CONSTRAINT `news_and_events_news_event_id_00dbb49a_fk_news_and_` FOREIGN KEY (`event_id`) REFERENCES `news_and_events_newseventslisting` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_and_events_newseventsrecap`
--

LOCK TABLES `news_and_events_newseventsrecap` WRITE;
/*!40000 ALTER TABLE `news_and_events_newseventsrecap` DISABLE KEYS */;
INSERT INTO `news_and_events_newseventsrecap` VALUES (1,'events_recap_images/News3_result.webp',2),(2,'events_recap_images/News6.webp',2),(3,'events_recap_images/News5.webp',2),(4,'events_recap_images/News4_result.webp',2),(5,'events_recap_images/News2_result.webp',2),(6,'events_recap_images/News1_result.webp',2),(7,'events_recap_images/News7.webp',1);
/*!40000 ALTER TABLE `news_and_events_newseventsrecap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news_and_events_newseventstab`
--

DROP TABLE IF EXISTS `news_and_events_newseventstab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_and_events_newseventstab` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tab_name` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_and_events_newseventstab`
--

LOCK TABLES `news_and_events_newseventstab` WRITE;
/*!40000 ALTER TABLE `news_and_events_newseventstab` DISABLE KEYS */;
INSERT INTO `news_and_events_newseventstab` VALUES (1,'Upcoming Events',0),(2,'Past Events',0);
/*!40000 ALTER TABLE `news_and_events_newseventstab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `privacy_policy_privacypolicybanner`
--

DROP TABLE IF EXISTS `privacy_policy_privacypolicybanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `privacy_policy_privacypolicybanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `privacy_policy_privacypolicybanner`
--

LOCK TABLES `privacy_policy_privacypolicybanner` WRITE;
/*!40000 ALTER TABLE `privacy_policy_privacypolicybanner` DISABLE KEYS */;
INSERT INTO `privacy_policy_privacypolicybanner` VALUES (1,'privacy_policy_banner/PrivacyPolicy.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Privacy Policy</strong></h1>');
/*!40000 ALTER TABLE `privacy_policy_privacypolicybanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `privacy_policy_privacypolicycontent`
--

DROP TABLE IF EXISTS `privacy_policy_privacypolicycontent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `privacy_policy_privacypolicycontent` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `privacy_policy_privacypolicycontent`
--

LOCK TABLES `privacy_policy_privacypolicycontent` WRITE;
/*!40000 ALTER TABLE `privacy_policy_privacypolicycontent` DISABLE KEYS */;
INSERT INTO `privacy_policy_privacypolicycontent` VALUES (1,'<h2 class=\"ql-align-center\"><strong style=\"color: rgb(249, 146, 10);\">Your Privacy</strong><strong> </strong><strong style=\"color: rgb(0, 51, 77);\">Matters</strong></h2><h2 class=\"ql-align-center\"><br></h2><p class=\"ql-align-center\"><span style=\"color: rgb(128, 128, 128);\">At Crossroads, we are committed to protecting your personal information. Learn how we collect, use, and safeguard your data to ensure your trust and security.</span></p><p class=\"ql-align-center\"><br></p><p><span style=\"color: rgb(0, 51, 77);\">Last Updated: April 30, 2025</span></p><p><br></p><p><span style=\"color: rgb(128, 128, 128);\">This Privacy Policy explains how Crossroads collects, uses, discloses, and safeguards your information when you visit our website or use our services. By accessing or using our platform, you agree to the terms outlined in this policy.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">1. Information We Collect</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">We may collect the following types of information:</span></p><p><span style=\"color: rgb(128, 128, 128);\">Personal Information: Name, email address, phone number, and other contact details you provide when registering or contacting us.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Usage Data: Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Cookies and Tracking Technologies: We use cookies and similar technologies to enhance your experience and analyze usage patterns.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">2. How We Use Your Information</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">We use your information to:</span></p><p><span style=\"color: rgb(128, 128, 128);\">Provide, operate, and maintain our website and services.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Improve and personalize your experience.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Communicate with you, including responding to inquiries or sending updates.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Analyze usage trends to enhance our offerings.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Comply with legal obligations.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">3. How We Share Your Information</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">We do not sell your personal information. We may share it with:</span></p><p><span style=\"color: rgb(128, 128, 128);\">Service Providers: Third parties who assist us with website operations, analytics, or customer support, under confidentiality agreements.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Legal Requirements: When required by law or to protect our rights and safety.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">4. Your Choices and Rights</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">You have the right to:</span></p><p><span style=\"color: rgb(128, 128, 128);\">Access, update, or delete your personal information.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Opt-out of marketing communications.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Disable cookies through your browser settings, though this may affect functionality.</span></p><p><span style=\"color: rgb(128, 128, 128);\">To exercise these rights, contact us at </span><a href=\"mailto:info@crossroadsge.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(128, 128, 128);\">info@crossroadsge.com</a><span style=\"color: rgb(128, 128, 128);\">.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">5. Data Security</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">We implement reasonable security measures to protect your information from unauthorized access, loss, or misuse. However, no online transmission is fully secure, and we cannot guarantee absolute security.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">6. International Data Transfers</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">Your information may be transferred to and processed in countries outside your region. We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">7. Children\'s Privacy</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">Our services are not intended for individuals under the age of 13. We do not knowingly collect data from children. If we learn we have, we will delete it promptly.</span></p><p><br></p><p><strong style=\"color: rgb(0, 51, 77);\">8. Changes to This Policy</strong></p><p><span style=\"color: rgb(128, 128, 128);\">We may update this Privacy Policy periodically. Changes will be posted on this page with an updated \"Last Updated\" date. We encourage you to review this policy regularly.</span></p><p><br></p><p><strong style=\"color: rgb(0, 51, 77);\">9. Contact Us</strong></p><p><span style=\"color: rgb(128, 128, 128);\">If you have questions about this Privacy Policy, please contact us at:</span></p><p><br></p><p><span style=\"color: rgb(128, 128, 128);\">Email: </span><a href=\"mailto:info@crossroadsge.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(249, 146, 10);\">info@crossroadsge.com</a></p><p><span style=\"color: rgb(128, 128, 128);\">Phone: </span><a href=\"+91 95396 88800\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(249, 146, 10);\">+91 95396 88800</a></p><p><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(128, 128, 128);\">Thank you for trusting Crossroads with your information.</span></p><p><br></p>');
/*!40000 ALTER TABLE `privacy_policy_privacypolicycontent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_countryservicebanner`
--

DROP TABLE IF EXISTS `services_countryservicebanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_countryservicebanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_countryservicebanner`
--

LOCK TABLES `services_countryservicebanner` WRITE;
/*!40000 ALTER TABLE `services_countryservicebanner` DISABLE KEYS */;
INSERT INTO `services_countryservicebanner` VALUES (2,'country_service/banner.webp','<h4><strong style=\"color: rgb(255, 255, 255);\">Choose.Apply.Study</strong></h4>');
/*!40000 ALTER TABLE `services_countryservicebanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_courseservicebanner`
--

DROP TABLE IF EXISTS `services_courseservicebanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_courseservicebanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_courseservicebanner`
--

LOCK TABLES `services_courseservicebanner` WRITE;
/*!40000 ALTER TABLE `services_courseservicebanner` DISABLE KEYS */;
INSERT INTO `services_courseservicebanner` VALUES (1,'course_service_banner/Course_Page_result.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Courses</strong></h1>');
/*!40000 ALTER TABLE `services_courseservicebanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_destination`
--

DROP TABLE IF EXISTS `services_destination`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_destination` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `destination_image` varchar(100) DEFAULT NULL,
  `destination_name` varchar(255) DEFAULT NULL,
  `destination_description` varchar(2000) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_destination`
--

LOCK TABLES `services_destination` WRITE;
/*!40000 ALTER TABLE `services_destination` DISABLE KEYS */;
INSERT INTO `services_destination` VALUES (1,'country_service_banner/germany.png','<h4><span style=\"color: rgb(255, 255, 255);\">Germany</span></h4>','<p><span style=\"color: rgb(255, 255, 255);\">Study in Germany with tuition-free education at public universities. Excellent programs in engineering.</span></p>','germany',0),(2,'country_service/france.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">France</strong></h1>','<p><span style=\"color: rgb(255, 255, 255);\">Experience world-class education in France, home to prestigious universities and rich cultural heritage.</span></p>','france',0),(3,'country_service/Australia.webp','<p><strong style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Australia</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Australia offers high-quality education with globally recognized degrees.</span></p>','australia',0),(4,'country_service/canada.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Canada</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Canada provides excellent post-study work opportunities with welcoming immigration policies.</span></p>','canada',0),(5,'country_service/uk.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">UK</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">The UK boasts some of the world\'s oldest universities with short-duration programs.</span></p>','uk',0),(6,'country_service/USA_result.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">USA</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">The United States has the largest number of top-ranked universities.</span></p>','usa',0),(7,'country_service/netherlands.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Netherlands</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">The Netherlands offers many English-taught programs with international classrooms.</span></p>','netherlands',0),(8,'country_service/sweden.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Sweden<span class=\"ql-cursor\">﻿</span></span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Sweden is known for its innovative education system and focus on sustainability.</span></p>','sweden',0),(9,'country_service/newzealand.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">New Zealand</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">New Zealand offers safe study environments with accredited qualifications.</span></p>','newzealand',0),(10,'country_service/switzerland.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Switzerland</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Switzerland is renowned for hospitality management programs.</span></p>','switzerland',0),(11,'country_service/finland.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Finland</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Finland is known for its high-quality education and beautiful landscapes.</span></p>','finland',0),(12,'country_service/italy.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Italy</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Italy offers a rich cultural experience with renowned universities.</span></p>','italy',0),(13,'country_service/latvia.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Latvia</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Latvia provides affordable education with a mix of traditional and modern influences.</span></p>','latvia',0),(14,'country_service/malta.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Malta</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Malta offers a unique blend of cultures and high-quality education.</span></p>','malta',0),(15,'country_service/poland.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Poland</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Poland is known for its strong academic traditions and vibrant student life.</span></p>','poland',0),(16,'country_service/slovenia.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Slovenia</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Slovenia offers a diverse range of study programs with a rich cultural heritage.</span></p>','slovenia',0),(17,'country_service/slovakia.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Slovakia</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Slovakia offers a diverse range of study programs with a rich cultural heritage.</span></p>','slovakia',0),(18,'country_service/spain.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Spain</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Spain is famous for its vibrant culture and high-quality education.</span></p>','spain',0),(19,'country_service/ireland.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Ireland</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Ireland offers a diverse range of study programs with a rich cultural heritage.</span></p>','ireland',0),(20,'country_service/austria.webp','<p><strong class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Austria</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Bernhard offers a diverse range of study programs with a rich cultural heritage.</span><span class=\"ql-cursor\">﻿</span></p>','austria',0);
/*!40000 ALTER TABLE `services_destination` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_destinationdedicatedassistance`
--

DROP TABLE IF EXISTS `services_destinationdedicatedassistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_destinationdedicatedassistance` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `subcategory_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `services_destination_subcategory_id_745aeb68_fk_services_` (`subcategory_id`),
  CONSTRAINT `services_destination_subcategory_id_745aeb68_fk_services_` FOREIGN KEY (`subcategory_id`) REFERENCES `services_destinationdedicatedpage` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_destinationdedicatedassistance`
--

LOCK TABLES `services_destinationdedicatedassistance` WRITE;
/*!40000 ALTER TABLE `services_destinationdedicatedassistance` DISABLE KEYS */;
INSERT INTO `services_destinationdedicatedassistance` VALUES (1,'<h2><span style=\"color: rgb(249, 146, 10);\">Virtual Assistance</span> <span style=\"color: rgb(255, 255, 255);\">for Your Study Abroad Journey</span></h2>','<p><span style=\"color: rgb(255, 255, 255);\">If you can\'t come to our office, we can come to you virtually! Get expert counselling services from the comfort of your home or anywhere you are.</span></p>',2),(3,'<h2><span style=\"color: rgb(249, 146, 10);\">Virtual Assistance</span> <span style=\"color: rgb(255, 255, 255);\">for Your Study Abroad Journey</span></h2>','<p><span style=\"color: rgb(255, 255, 255);\">If you can\'t come to our office, we can come to you virtually! Get expert counselling services from the comfort of your home or anywhere you are.</span></p>',3),(4,'<h2><span style=\"color: rgb(249, 146, 10);\">Virtual Assistance</span> <span style=\"color: rgb(255, 255, 255);\">for Your Study Abroad Journey</span></h2>','<p><span style=\"color: rgb(255, 255, 255);\">If you can\'t come to our office, we can come to you virtually! Get expert counselling services from the comfort of your home or anywhere you are.</span></p>',4);
/*!40000 ALTER TABLE `services_destinationdedicatedassistance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_destinationdedicatedchooselist`
--

DROP TABLE IF EXISTS `services_destinationdedicatedchooselist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_destinationdedicatedchooselist` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `list_title` varchar(255) DEFAULT NULL,
  `list_description` varchar(2000) DEFAULT NULL,
  `subcategory_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `services_destination_subcategory_id_f417000a_fk_services_` (`subcategory_id`),
  CONSTRAINT `services_destination_subcategory_id_f417000a_fk_services_` FOREIGN KEY (`subcategory_id`) REFERENCES `services_destinationdedicatedpage` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_destinationdedicatedchooselist`
--

LOCK TABLES `services_destinationdedicatedchooselist` WRITE;
/*!40000 ALTER TABLE `services_destinationdedicatedchooselist` DISABLE KEYS */;
INSERT INTO `services_destinationdedicatedchooselist` VALUES (1,'<p><strong class=\"ql-size-large\" style=\"color: rgb(249, 146, 10);\">Germany Excels with Top Universities</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span></p>',2),(2,'<p><strong style=\"color: rgb(249, 146, 10);\" class=\"ql-size-large\">Diverse Study Programs</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Choose from a wide range of programs in various fields of study.</span></p>',2),(3,'<p><strong style=\"color: rgb(249, 146, 10);\" class=\"ql-size-large\">Research and Innovation</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Germany is a global leader in research and technological innovation.</span></p>',2),(4,'<p><strong style=\"color: rgb(249, 146, 10);\" class=\"ql-size-large\">Public University Scholarships</strong></p>','<p><span style=\"color: rgb(255, 255, 255);\">Many public universities offer scholarships to international students.</span></p>',2),(5,'<p><span style=\"color: rgb(249, 146, 10);\" class=\"ql-size-large\">Globally Respected Institutions and Courses</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Australia offers globally respected institutions and courses.</span></p>',3),(6,'<p><span class=\"ql-size-large\" style=\"color: rgb(249, 146, 10);\">Affordable Study Costs</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Study costs in Australia are competitive and affordable.</span></p>',3),(7,'<p><span style=\"color: rgb(249, 146, 10);\" class=\"ql-size-large\">Vibrant, Multicultural Lifestyle</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Experience a vibrant, multicultural lifestyle in Australia.</span></p>',3),(8,'<p><span class=\"ql-size-large\" style=\"color: rgb(249, 146, 10);\">Beautiful Climate and Natural Landscapes</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Enjoy Australia\'s beautiful climate and natural landscapes.</span></p>',3),(9,'<p><span class=\"ql-size-large\" style=\"color: rgb(249, 146, 10);\">Opportunities to Work While Studying</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">International students can work up to 40 hours every two weeks during academic sessions and full-time during breaks.</span></p>',3),(10,'<p><span style=\"color: rgb(249, 146, 10);\" class=\"ql-size-large\">Favorable Working Conditions</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Australia offers favorable working conditions for students.</span></p>',3),(12,'<h3><span style=\"color: rgb(249, 146, 10);\">Quality Education</span></h3>','<p><span style=\"color: rgb(255, 255, 255);\">Canada’s universities are globally recognized for academic excellence and research.</span></p>',4),(13,'<h3><span style=\"color: rgb(249, 146, 10);\">Work Opportunities</span></h3>','<p><span style=\"color: rgb(255, 255, 255);\">Students can work part-time during studies and access post-graduation work permits.</span><span class=\"ql-cursor\">﻿</span></p>',4),(15,'<h3><span style=\"color: rgb(249, 146, 10);\">Immigration Options</span></h3>','<p><span style=\"color: rgb(255, 255, 255);\">Graduates may apply for permanent residency through various immigration pathways.</span></p>',4),(16,'<h3><span style=\"color: rgb(249, 146, 10);\">Multicultural Society</span></h3>','<p><span style=\"color: rgb(255, 255, 255);\">Experience a diverse and inclusive environment in vibrant cities.</span></p>',4),(17,'<h3><span style=\"color: rgb(249, 146, 10);\">Stunning Landscapes</span></h3>','<p><span style=\"color: rgb(255, 255, 255);\">Explore Canada’s breathtaking mountains, lakes, and national parks.</span></p>',4),(18,'<h3><span style=\"color: rgb(249, 146, 10);\">High Quality of Life</span></h3>','<p><span style=\"color: rgb(255, 255, 255);\">Enjoy safe cities, excellent healthcare, and a welcoming atmosphere.</span></p>',4);
/*!40000 ALTER TABLE `services_destinationdedicatedchooselist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_destinationdedicatedchoosetitle`
--

DROP TABLE IF EXISTS `services_destinationdedicatedchoosetitle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_destinationdedicatedchoosetitle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `subcategory_id` bigint NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `services_destination_subcategory_id_05f39463_fk_services_` (`subcategory_id`),
  CONSTRAINT `services_destination_subcategory_id_05f39463_fk_services_` FOREIGN KEY (`subcategory_id`) REFERENCES `services_destinationdedicatedpage` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_destinationdedicatedchoosetitle`
--

LOCK TABLES `services_destinationdedicatedchoosetitle` WRITE;
/*!40000 ALTER TABLE `services_destinationdedicatedchoosetitle` DISABLE KEYS */;
INSERT INTO `services_destinationdedicatedchoosetitle` VALUES (1,'<h2><span style=\"color: rgb(255, 255, 255);\">Why Choose</span> <strong style=\"color: rgb(249, 146, 10);\">Germany?</strong></h2>','<p><span style=\"color: rgb(255, 255, 255);\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s</span></p>',2,'choose_background/Germany-education.webp'),(2,'<h2><strong style=\"color: rgb(255, 255, 255);\">Why choose</strong><strong> </strong><strong style=\"color: rgb(249, 146, 10);\">Australia?</strong></h2><p><br></p>','<p><span style=\"color: rgb(255, 255, 255);\">Studying in Australia offers not only a top-tier education but also enriching life experiences. Courses, from foundational to postgraduate levels, are designed with flexibility and a global outlook. International students can work up to 40 hours every two weeks during academic sessions and full-time during breaks.</span></p>',3,'choose_background/Germany-education_OrZExsu.webp'),(3,'<h2><strong style=\"color: rgb(255, 255, 255);\">Why choose</strong><strong> </strong><strong style=\"color: rgb(249, 146, 10);\">Canada?</strong></h2><p><br></p>','<p><span style=\"color: rgb(255, 255, 255);\">Canada offers a world-class education system, abundant work opportunities, and favorable immigration options. With its inclusive society and stunning natural beauty, Canada provides an ideal environment for academic and personal growth.</span></p>',4,'choose_background/Germany-education_DMUZTr8.webp');
/*!40000 ALTER TABLE `services_destinationdedicatedchoosetitle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_destinationdedicatedintakeinformation`
--

DROP TABLE IF EXISTS `services_destinationdedicatedintakeinformation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_destinationdedicatedintakeinformation` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `start_date` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `additional_information` varchar(255) DEFAULT NULL,
  `subcategory_id` bigint NOT NULL,
  `intake_information_title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `services_destination_subcategory_id_587b0139_fk_services_` (`subcategory_id`),
  CONSTRAINT `services_destination_subcategory_id_587b0139_fk_services_` FOREIGN KEY (`subcategory_id`) REFERENCES `services_destinationdedicatedpage` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_destinationdedicatedintakeinformation`
--

LOCK TABLES `services_destinationdedicatedintakeinformation` WRITE;
/*!40000 ALTER TABLE `services_destinationdedicatedintakeinformation` DISABLE KEYS */;
INSERT INTO `services_destinationdedicatedintakeinformation` VALUES (1,'<p><span style=\"color: rgb(255, 255, 255);\">Winter-Sept/Oct</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Summer-March/April</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Additional intakes (Feb/May/June) at some private universities.</span></p>',2,'<h2><span style=\"color: rgb(255, 255, 255);\">In</span><strong style=\"color: rgb(255, 255, 255);\">take</strong></h2>'),(2,'<p><span style=\"color: rgb(255, 255, 255);\">February</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">July</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Other intakes are available depending upon the courses</span></p>',3,'<h2><strong style=\"color: rgb(255, 255, 255);\">Intake</strong></h2>'),(3,'<p><span style=\"color: rgb(255, 255, 255);\">Fall Intake: September</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Winter Intake: January/February</span></p>','<p><span style=\"color: rgb(255, 255, 255);\">Summer Intake: May/June (limited programs)</span></p>',4,'<h2><strong style=\"color: rgb(255, 255, 255);\">Intake</strong></h2>');
/*!40000 ALTER TABLE `services_destinationdedicatedintakeinformation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_destinationdedicatedkeyfact`
--

DROP TABLE IF EXISTS `services_destinationdedicatedkeyfact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_destinationdedicatedkeyfact` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `subcategory_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `services_destination_subcategory_id_c9c2d6d3_fk_services_` (`subcategory_id`),
  CONSTRAINT `services_destination_subcategory_id_c9c2d6d3_fk_services_` FOREIGN KEY (`subcategory_id`) REFERENCES `services_destinationdedicatedpage` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_destinationdedicatedkeyfact`
--

LOCK TABLES `services_destinationdedicatedkeyfact` WRITE;
/*!40000 ALTER TABLE `services_destinationdedicatedkeyfact` DISABLE KEYS */;
INSERT INTO `services_destinationdedicatedkeyfact` VALUES (1,'<p><span class=\"ql-size-large\" style=\"color: rgb(128, 128, 128);\">Capital</span></p>','<p><strong>Berlin</strong></p>',2),(2,'<p><span style=\"color: oklch(0.446 0.03 256.802);\" class=\"ql-size-large\">Population</span></p>','<p><strong>85 Million</strong></p>',2),(3,'<p><span class=\"ql-size-large\" style=\"color: rgb(128, 128, 128);\">Language</span></p>','<p><strong>French</strong></p>',2),(4,'<p><span style=\"color: rgb(128, 128, 128);\">Capital</span><strong style=\"color: rgb(128, 128, 128);\"> </strong></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">Canberra</strong></p>',3),(6,'<p><span style=\"color: rgb(128, 128, 128);\">Population</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">26 Million</strong></p>',3),(7,'<p><span style=\"color: rgb(128, 128, 128);\">Language</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">English</strong></p>',3),(8,'<p><span style=\"color: oklch(0.446 0.03 256.802);\">International Students</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">343,400</strong></p>',3),(9,'<p><span style=\"color: oklch(0.446 0.03 256.802);\">Currency</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">Australian Dollar</strong></p>',3),(10,'<p><span style=\"color: rgb(128, 128, 128);\">GDP</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">$1.9 Trillion</strong></p>',3),(11,'<p><span style=\"color: oklch(0.446 0.03 256.802);\">Universities</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">43</strong></p>',3),(12,'<p><span style=\"color: rgb(128, 128, 128);\">Scholarships Upto</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">Varies by program</strong></p>',3),(13,'<p><span style=\"color: rgb(128, 128, 128);\">Capital</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">Ottawa</strong></p>',4),(14,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Population</span></h3>','<p><strong style=\"color: oklch(0.278 0.033 256.848);\">40 Million</strong></p>',4),(15,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Language</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">English, French</strong></p>',4),(16,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">International Students</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">800,000+</strong></p>',4),(17,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Currency</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">Canadian Dollar (CAD)</strong></p>',4),(19,'<h3><span style=\"color: rgb(128, 128, 128);\">GDP</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">$2.1 Trillion</strong></p>',4),(20,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Universities</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">100+</strong></p>',4),(21,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Scholarships Upto</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">CAD 20,000/Year</strong></p>',4),(22,'<p><span style=\"color: oklch(0.446 0.03 256.802);\">Capital</span></p>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">London</strong></p>',5),(23,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Population</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">67 Million</strong></p>',5),(24,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Language</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">English</strong></p>',5),(25,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">International Students</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">550,000+</strong></p>',5),(26,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Currency</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">Pound Sterling</strong></p>',5),(27,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">GDP</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">$3.8 Trillion</strong></p>',5),(28,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Universities</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">130+</strong></p>',5),(29,'<h3><span style=\"color: oklch(0.446 0.03 256.802);\">Scholarships Upto</span></h3>','<p><strong style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\">Varies by program</strong></p>',5);
/*!40000 ALTER TABLE `services_destinationdedicatedkeyfact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_destinationdedicatedpage`
--

DROP TABLE IF EXISTS `services_destinationdedicatedpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_destinationdedicatedpage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `banner_image` varchar(100) DEFAULT NULL,
  `banner_title` varchar(255) DEFAULT NULL,
  `banner_button_name` varchar(255) DEFAULT NULL,
  `banner_description` varchar(2000) DEFAULT NULL,
  `destination_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `services_destination_destination_id_56b7f65e_fk_services_` (`destination_id`),
  CONSTRAINT `services_destination_destination_id_56b7f65e_fk_services_` FOREIGN KEY (`destination_id`) REFERENCES `services_destination` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_destinationdedicatedpage`
--

LOCK TABLES `services_destinationdedicatedpage` WRITE;
/*!40000 ALTER TABLE `services_destinationdedicatedpage` DISABLE KEYS */;
INSERT INTO `services_destinationdedicatedpage` VALUES (1,'country_service/Germany-Banner.webp','<h4><strong style=\"color: rgb(255, 255, 255);\">France</strong></h4>','france','<p><span style=\"color: rgb(128, 128, 128);\">Germany, located in Western Europe, is renowned for its diverse landscapes, including forests, rivers, mountain ranges, and beaches along the North Sea. The country is celebrated for its impressive architecture and is known for being both safe and clean. Low crime rates and strict regulations help create a secure living environment. Cities are well-maintained with efficient waste management systems and public initiatives that ensure high levels of cleanliness.</span></p>',2),(2,'country_service/Germany-Banner_aGgsTIC.webp','<h4><strong style=\"color: rgb(255, 255, 255);\">Germany</strong></h4>','Talk to an Expert','<p><span style=\"color: rgb(128, 128, 128);\">Germany, located in Western Europe, is renowned for its diverse landscapes, including forests, rivers, mountain ranges, and beaches along the North Sea. The country is celebrated for its impressive architecture and is known for being both safe and clean. Low crime rates and strict regulations help create a secure living environment. Cities are well-maintained with efficient waste management systems and public initiatives that ensure high levels of cleanliness.</span></p>',1),(3,'country_service/Australia_result.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Study in Australia</strong></h1>','Talk to an Expert','<p><span style=\"color: rgb(128, 128, 128);\">Australia is renowned for its cultural diversity and is home to the world’s longest continuous civilization. Officially known as the Commonwealth of Australia, the country encompasses the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest nation in Oceania and ranks as the sixth-largest country globally. Australia is unique in that it is the only nation to occupy an entire continent and is also recognized as the largest island in the world.</span></p>',3),(4,'country_service/canada_result.webp','<h2><strong style=\"color: rgb(255, 255, 255);\">Study in Canada<span class=\"ql-cursor\">﻿</span></strong></h2>','Talk to an expert','<p><span style=\"color: rgb(128, 128, 128);\">With its varied landscapes of mountains, forests, and clear blue lakes, Canada consistently ranks as one of the world’s happiest countries. Known for its high standard of living, welcoming environment, and strong focus on diversity and inclusion, Canada is a top destination for international students seeking quality education and vibrant multicultural cities.</span></p>',4),(5,'country_service/Uk_result.webp','<h2><strong style=\"color: rgb(255, 255, 255);\">Study in UK<span class=\"ql-cursor\">﻿</span></strong></h2>','Talk to an expert','<p><span style=\"color: rgb(128, 128, 128);\">The United Kingdom, a prominent island nation in northwestern Europe, is celebrated for its rich cultural heritage, diversity, and dynamic society. London, the nation’s capital, is a global powerhouse in commerce, finance, and the arts. The UK’s population represents a vibrant mix of generations and cultural backgrounds, contributing to a multicultural society that thrives on inclusivity. Offering some of the best career and educational opportunities globally, along with one of the world’s most advanced healthcare systems, the UK stands out as an exceptional place to live, work, and grow.</span></p>',5);
/*!40000 ALTER TABLE `services_destinationdedicatedpage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_documentationassistancebanner`
--

DROP TABLE IF EXISTS `services_documentationassistancebanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_documentationassistancebanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_documentationassistancebanner`
--

LOCK TABLES `services_documentationassistancebanner` WRITE;
/*!40000 ALTER TABLE `services_documentationassistancebanner` DISABLE KEYS */;
INSERT INTO `services_documentationassistancebanner` VALUES (1,'documentation_assistance_banner/banner_png_cTxeZXg.webp','<h4><strong style=\"color: rgb(255, 255, 255);\">Documentation and Travel Assistance</strong></h4>','<p><span style=\"color: rgb(128, 128, 128);\">We provide comprehensive Travel &amp; Documentation Assistance to ensure a smooth and hassle-free experience. From certificate attestation and visa document preparation to certified translations and appointment scheduling, our expert team handles every detail with efficiency and accuracy. Additionally, we offer reliable travel support, including transportation, accommodation, and essential guidance, ensuring a safe and stress-free journey. With our dedicated services, students and professionals can confidently navigate their travel and documentation needs with ease.</span></p>');
/*!40000 ALTER TABLE `services_documentationassistancebanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_documentationassistancelisting`
--

DROP TABLE IF EXISTS `services_documentationassistancelisting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_documentationassistancelisting` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` longtext,
  `order` int NOT NULL,
  `tab_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `services_documentati_tab_id_2d020978_fk_services_` (`tab_id`),
  CONSTRAINT `services_documentati_tab_id_2d020978_fk_services_` FOREIGN KEY (`tab_id`) REFERENCES `services_documentationassistancetab` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_documentationassistancelisting`
--

LOCK TABLES `services_documentationassistancelisting` WRITE;
/*!40000 ALTER TABLE `services_documentationassistancelisting` DISABLE KEYS */;
INSERT INTO `services_documentationassistancelisting` VALUES (1,'documentation_assistance_listing/slide1.webp','<h2><strong style=\"color: rgb(0, 51, 77);\">Attestation assistance – Various certificates</strong></h2>','<p><span style=\"color: rgb(0, 51, 77);\">We provide professional and efficient support to expedite the attestation of your certificates. Certificate attestation is a crucial process that verifies the authenticity of a document through official government authorities. Attestation ensures that your certificate is genuine and is acknowledged by the relevant country, institution, or organization where it will be submitted.</span></p>',0,1),(2,'documentation_assistance_listing/slide2.webp','<h2><strong style=\"color: rgb(0, 51, 77);\">VISA document preparation assistance</strong></h2>','<p><span style=\"color: rgb(0, 51, 77);\">We provide comprehensive visa assistance, guiding you through every step from filling out applications to preparing documents, ensuring you meet the strict requirements of the visa offices for your chosen destination. Our team of seasoned professionals is well-equipped with the expertise needed to manage the entire visa file preparation process. From completing the application form to organizing all necessary documents, we aim to strengthen your application for a higher success rate. This allows us to deliver efficient and reliable visa preparation services with a focus on quick turnaround times.</span></p>',0,1),(3,'documentation_assistance_listing/slide5.webp','<h2><strong style=\"color: rgb(0, 51, 77);\">Transportation Support</strong></h2>','<p>Travel assistance involves offering support, services, and guidance to our students to ensure their journey is safe, convenient, and enjoyable. This includes various aspects such as transportation, accommodation, travel information, and emergency assistance. Our dedicated team ensures that students experience a smooth and secure trip from the start of their journey until they safely arrive at their chosen university.</p>',0,2);
/*!40000 ALTER TABLE `services_documentationassistancelisting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_documentationassistancetab`
--

DROP TABLE IF EXISTS `services_documentationassistancetab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_documentationassistancetab` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tab_name` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_documentationassistancetab`
--

LOCK TABLES `services_documentationassistancetab` WRITE;
/*!40000 ALTER TABLE `services_documentationassistancetab` DISABLE KEYS */;
INSERT INTO `services_documentationassistancetab` VALUES (1,'<p>Documentation Assistance</p>',0),(2,'<p>Travel Assistance</p>',0);
/*!40000 ALTER TABLE `services_documentationassistancetab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_languagelabbanner`
--

DROP TABLE IF EXISTS `services_languagelabbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_languagelabbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_languagelabbanner`
--

LOCK TABLES `services_languagelabbanner` WRITE;
/*!40000 ALTER TABLE `services_languagelabbanner` DISABLE KEYS */;
INSERT INTO `services_languagelabbanner` VALUES (1,'language_lab_banner/languagelabbanner.webp','<h4><strong style=\"color: rgb(255, 255, 255);\">Language Lab</strong></h4>','<p><span style=\"color: rgb(128, 128, 128);\">Languages are the foundation of human communication, bridging cultures and fostering understanding across diverse communauties. Mastery of multiple languages opens doors to global opportunities, enhances cognitive abilities, and deepens cultural appreciation. In an increasingly interconnected world, knowing different languages is essential for personal and professional growth, enabling individuals to connect with others, access a broader range of knowledge, and participate more fully in the global economy. Crossroads provides opportunities for an interactive learning environment designed to enhance language acquisition through technology-driven tools and resources. Learners can practice pronunciation, listening, speaking, and comprehension skills in a structured and engaging manner.</span></p>');
/*!40000 ALTER TABLE `services_languagelabbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_languagelablisting`
--

DROP TABLE IF EXISTS `services_languagelablisting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_languagelablisting` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `main_title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_languagelablisting`
--

LOCK TABLES `services_languagelablisting` WRITE;
/*!40000 ALTER TABLE `services_languagelablisting` DISABLE KEYS */;
INSERT INTO `services_languagelablisting` VALUES (1,'<h6><strong style=\"color: rgb(255, 255, 255);\">OET - Occupational English Test for Healthcare Professionals</strong></h6>','<p><span style=\"color: rgb(255, 255, 255);\">The OET is a specialized language assessment designed specifically for healthcare professionals who wish to register and practice in English-speaking countries. Covering 12 healthcare professions, including medicine, nursing, dentistry, and physiotherapy, OET evaluates the language and communication skills essential for effective practice in these fields. The exam is divided into four components: listening, reading, writing, and speaking, each tailored to reflect real healthcare scenarios.</span></p>','<p>OET - Occupational English Test for Healthcare Professionals</p>'),(2,'<h6><strong style=\"color: rgb(255, 255, 255);\">PTE - Pearson Test of English</strong></h6>','<p><span style=\"color: rgb(255, 255, 255);\">The PTE is a computer-based academic English language test ideal for non-native English speakers planning to study abroad. PTE offers a range of tests each designed to assess proficiency in reading, writing, listening, and speaking. These scenario-based exams provide a comprehensive evaluation of English language skills. PTE\'s rigorous assessment is recognized by universities and employers worldwide, making it a value credential for students seeking international opportunities.</span></p>','<p>PTE - Pearson Test of English</p>'),(3,'<h6><strong style=\"color: rgb(255, 255, 255);\">IELTS - The International English Language Testing System</strong></h6>','<p><span style=\"color: rgb(255, 255, 255);\">The IELTS is the world\'s most recognized English language proficiency test, essential for non-native speakers seeking higher education or migration opportunities in English-speaking countries. IELTS is widely accepted by academic institutions and employers across the globe as valid proof of English proficiency. With two main versions—IELTS Academic and IELTS General Training—this test ensures that candidates are well-prepared for the linguistic demands of a globalized world.</span></p>','<p>IELTS - The International English Language Testing System</p>'),(4,'<h6><strong style=\"color: rgb(255, 255, 255);\">German Language</strong></h6>','<p><span style=\"color: rgb(255, 255, 255);\">At Crossroads, we pride ourselves on offering top-tier German language courses through both online and offline formats, designed to suit the diverse needs of our students. Our team of highly experienced professionals are dedicated to helping you achieve fluency and reach your language learning goals. We provide comprehensive training across all proficiency levels—A1, A2, B1, B2, C1, and C2—tailored to students and professionals who aim to migrate to Germany for education or career advancement. Our courses equip you with the language skills necessary to excel in a German-speaking environment.</span></p>','<p>German Language</p>');
/*!40000 ALTER TABLE `services_languagelablisting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services_servicehighlights`
--

DROP TABLE IF EXISTS `services_servicehighlights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services_servicehighlights` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services_servicehighlights`
--

LOCK TABLES `services_servicehighlights` WRITE;
/*!40000 ALTER TABLE `services_servicehighlights` DISABLE KEYS */;
INSERT INTO `services_servicehighlights` VALUES (1,'services/image.webp','<p><strong style=\"color: rgb(0, 51, 77);\">Education</strong></p>','<p><span style=\"color: rgb(128, 128, 128);\">Personalized guidance for studying abroad, from university selection to application support.</span></p>',0),(2,'services/image_1.webp','<p><strong style=\"color: rgb(0, 51, 77);\">Migration</strong></p>','<p><span style=\"color: rgb(128, 128, 128);\">Comprehensive visa and settlement services for a smooth transition to your new country.</span></p>',2),(3,'services/Mask_Group_50.webp','<p><strong style=\"color: rgb(0, 51, 77);\">Job Assistance</strong></p>','<p><span style=\"color: rgb(128, 128, 128);\">Expert support for international careers, including job search, resumes, and visa guidance.</span></p>',1);
/*!40000 ALTER TABLE `services_servicehighlights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_media_socialmedia`
--

DROP TABLE IF EXISTS `social_media_socialmedia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_media_socialmedia` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_media_socialmedia`
--

LOCK TABLES `social_media_socialmedia` WRITE;
/*!40000 ALTER TABLE `social_media_socialmedia` DISABLE KEYS */;
INSERT INTO `social_media_socialmedia` VALUES (1,'https://www.facebook.com/CrossroadsOverseasEducation/','https://www.instagram.com/crossroads_ge/','https://www.linkedin.com/company/crossroads-career-consultants-pvt-ltd/','https://www.youtube.com/@CrossroadsGE/','9539588800');
/*!40000 ALTER TABLE `social_media_socialmedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terms_and_conditions_termsconditionsbanner`
--

DROP TABLE IF EXISTS `terms_and_conditions_termsconditionsbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terms_and_conditions_termsconditionsbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terms_and_conditions_termsconditionsbanner`
--

LOCK TABLES `terms_and_conditions_termsconditionsbanner` WRITE;
/*!40000 ALTER TABLE `terms_and_conditions_termsconditionsbanner` DISABLE KEYS */;
INSERT INTO `terms_and_conditions_termsconditionsbanner` VALUES (1,'terms_and_conditions_banner/Termsandconditions.webp','<h1><strong style=\"color: rgb(255, 255, 255);\">Terms and Conditions</strong></h1>');
/*!40000 ALTER TABLE `terms_and_conditions_termsconditionsbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terms_and_conditions_termsconditionscontent`
--

DROP TABLE IF EXISTS `terms_and_conditions_termsconditionscontent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terms_and_conditions_termsconditionscontent` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terms_and_conditions_termsconditionscontent`
--

LOCK TABLES `terms_and_conditions_termsconditionscontent` WRITE;
/*!40000 ALTER TABLE `terms_and_conditions_termsconditionscontent` DISABLE KEYS */;
INSERT INTO `terms_and_conditions_termsconditionscontent` VALUES (1,'<h2 class=\"ql-align-center\"><strong style=\"color: rgb(249, 146, 10);\">Our Terms</strong><strong style=\"color: rgb(0, 51, 77);\"> &amp; Conditions</strong></h2><p><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(128, 128, 128);\">Welcome to Crossroads. Please read these Terms and Conditions carefully to understand your rights and obligations when using our services.</span></p><p><br></p><p><span style=\"color: rgb(0, 51, 77);\">Last Updated: April 30, 2025</span></p><p><br></p><p><span style=\"color: rgb(128, 128, 128);\">These Terms and Conditions govern your use of the Crossroads website and services. By accessing or using our platform, you agree to be bound by these terms. If you do not agree, please do not use our services.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">1. Acceptance of Terms</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">By using our website or services, you confirm that you accept these Terms and Conditions and agree to comply with them. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">2. Services Provided</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">Crossroads provides educational guidance, course selection, and support services for students seeking international education. We reserve the right to modify or discontinue any services at our discretion.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">3. User Responsibilities</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">You agree to:</span></p><p><span style=\"color: rgb(128, 128, 128);\">Provide accurate and complete information when registering or using our services.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Use our services in compliance with all applicable laws.</span></p><p><span style=\"color: rgb(128, 128, 128);\">Not engage in any unauthorized or fraudulent activities.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">4. Payment and Fees</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">Certain services may require payment. Fees are outlined at the time of service enrollment. All payments are non-refundable unless otherwise stated. We accept no liability for payment disputes.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">5. Intellectual Property</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">All content on this website, including text, graphics, logos, and images, is the property of Crossroads or its licensors and is protected by copyright laws. You may not reproduce or distribute any content without our prior written consent.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">6. Limitation of Liability</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">Crossroads is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our liability is limited to the amount paid by you for the services.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">7. Termination</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">We reserve the right to terminate or suspend your access to our services at any time for breach of these terms or for any other reason, with or without notice.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">8. Governing Law</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">These Terms and Conditions are governed by the laws of India. Any disputes will be resolved in the courts of City, India.</span></p><p><br></p><h4><strong style=\"color: rgb(0, 51, 77);\">9. Contact Us</strong></h4><p><span style=\"color: rgb(128, 128, 128);\">If you have questions about these Terms and Conditions, please contact us at:</span></p><p><span style=\"color: rgb(128, 128, 128);\">Email: </span><a href=\"mailto:info@crossroadsge.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(249, 146, 10);\">info@crossroadsge.com</a></p><p><span style=\"color: rgb(128, 128, 128);\">Phone: </span><a href=\"+91 95396 88800\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(249, 146, 10);\">+91 95396 88800</a></p><p><br></p><p><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(128, 128, 128);\">Thank you for choosing Crossroads. We look forward to supporting your educational journey.</span></p>');
/*!40000 ALTER TABLE `terms_and_conditions_termsconditionscontent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonials_testimonialbanner`
--

DROP TABLE IF EXISTS `testimonials_testimonialbanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testimonials_testimonialbanner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonials_testimonialbanner`
--

LOCK TABLES `testimonials_testimonialbanner` WRITE;
/*!40000 ALTER TABLE `testimonials_testimonialbanner` DISABLE KEYS */;
INSERT INTO `testimonials_testimonialbanner` VALUES (1,'testimonial_banner/our_sucess_story.webp','<h4><strong style=\"color: rgb(255, 255, 255);\">Testimonials</strong></h4>');
/*!40000 ALTER TABLE `testimonials_testimonialbanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonials_testimoniallistingimage`
--

DROP TABLE IF EXISTS `testimonials_testimoniallistingimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testimonials_testimoniallistingimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `name` varchar(500) DEFAULT NULL,
  `flag` varchar(100) DEFAULT NULL,
  `rating` int unsigned DEFAULT NULL,
  `description` longtext,
  `order` int NOT NULL,
  `testimonials_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `testimonials_testimo_testimonials_id_ddfd4711_fk_testimoni` (`testimonials_id`),
  CONSTRAINT `testimonials_testimo_testimonials_id_ddfd4711_fk_testimoni` FOREIGN KEY (`testimonials_id`) REFERENCES `testimonials_testimonialtabs` (`id`),
  CONSTRAINT `testimonials_testimoniallistingimage_chk_1` CHECK ((`rating` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonials_testimoniallistingimage`
--

LOCK TABLES `testimonials_testimoniallistingimage` WRITE;
/*!40000 ALTER TABLE `testimonials_testimoniallistingimage` DISABLE KEYS */;
INSERT INTO `testimonials_testimoniallistingimage` VALUES (1,'testimonial_stories_images/Aleena_susan_result.webp','<p><span style=\"color: rgb(0, 51, 77);\" class=\"ql-size-large\">Aleena Susan </span></p>','flags/germany.png',4,'<p><span style=\"color: rgb(128, 128, 128);\">I had a very smooth experience in my journey to Germany for Au Pair. Thanks to the team at Crossroads. I didn’t know anything. They made everything easy for me. I had to just submit the documents that was requested and they did the rest. Also helped me with the pickup and stay in Germany. Thanks to the team for such a smooth and wonderful experience.</span></p>',0,1),(2,'testimonial_stories_images/Aju_Anil_result.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Aju Anil</span></p>','flags/canada.webp',5,'<p><span style=\"color: rgb(128, 128, 128);\">I had a good experience dealing with Crossroads. They assisted me with everything that was needed for my studies in Germany. Even helped me with travel assistance. Thanks to team Crossroads</span></p>',0,1),(3,'testimonial_stories_images/Aleesha_James_result.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Aleesha James</span></p>','flags/germany_w5Vh8Fy.png',5,'<p><span style=\"color: rgb(128, 128, 128);\">Not many consultants assist with Ausbildung IT, so I was also a bit worried when I approached Crossroads. However, they made it a smooth process. I was able to attend the required interviews and got my offer and contract without any delay. Today when I am in Germany, I am thankful to the Crossroads team for making my journey possible.</span></p>',0,1),(4,'testimonial_stories_images/Arunima_result.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Arunima</span></p>','flags/uk.webp',5,'<p><span style=\"color: rgb(128, 128, 128);\">Crossroads made my dream of studying abroad a reality. Their guidance on university applications and visa processes was invaluable. I faced a slight delay with my documentation, but their team was supportive and ensured everything was sorted. I’m now pursuing my engineering degree in Austria, thanks to Crossroads!</span></p>',0,1),(5,'testimonial_stories_images/Frijon_C_T_Varghese_result.webp','<p><span class=\"ql-size-large\" style=\"color: rgb(0, 51, 77);\">Frijon C T Varghese</span></p>','flags/finland.webp',5,'<p><span style=\"color: rgb(128, 128, 128);\">Crossroads made my dream of studying abroad a reality. Their guidance on university applications and visa processes was invaluable. I faced a slight delay with my documentation, but their team was supportive and ensured everything was sorted. I’m now pursuing my engineering degree in Austria, thanks to Crossroads!</span></p><p><br></p>',0,1);
/*!40000 ALTER TABLE `testimonials_testimoniallistingimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonials_testimoniallistingvideo`
--

DROP TABLE IF EXISTS `testimonials_testimoniallistingvideo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testimonials_testimoniallistingvideo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `video` varchar(100) DEFAULT NULL,
  `name` varchar(500) DEFAULT NULL,
  `flag` varchar(100) DEFAULT NULL,
  `rating` int unsigned DEFAULT NULL,
  `description` longtext,
  `order` int NOT NULL,
  `testimonials_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `testimonials_testimo_testimonials_id_905e7dbb_fk_testimoni` (`testimonials_id`),
  CONSTRAINT `testimonials_testimo_testimonials_id_905e7dbb_fk_testimoni` FOREIGN KEY (`testimonials_id`) REFERENCES `testimonials_testimonialtabs` (`id`),
  CONSTRAINT `testimonials_testimoniallistingvideo_chk_1` CHECK ((`rating` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonials_testimoniallistingvideo`
--

LOCK TABLES `testimonials_testimoniallistingvideo` WRITE;
/*!40000 ALTER TABLE `testimonials_testimoniallistingvideo` DISABLE KEYS */;
INSERT INTO `testimonials_testimoniallistingvideo` VALUES (1,'testimonial_stories_videos/Video2.mp4','<p><span style=\"background-color: oklch(0.967 0.003 264.542); color: oklch(0.278 0.033 256.848);\" class=\"ql-size-large\">Divya Ajith</span></p>','flags/austria.png',5,'<p><span style=\"color: rgb(128, 128, 128);\">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>',0,2);
/*!40000 ALTER TABLE `testimonials_testimoniallistingvideo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonials_testimonialtabs`
--

DROP TABLE IF EXISTS `testimonials_testimonialtabs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testimonials_testimonialtabs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tab_name` varchar(255) DEFAULT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonials_testimonialtabs`
--

LOCK TABLES `testimonials_testimonialtabs` WRITE;
/*!40000 ALTER TABLE `testimonials_testimonialtabs` DISABLE KEYS */;
INSERT INTO `testimonials_testimonialtabs` VALUES (1,'<p>Testimonials</p>',0),(2,'<p>Video Testimonials</p>',0);
/*!40000 ALTER TABLE `testimonials_testimonialtabs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-16 18:22:40
