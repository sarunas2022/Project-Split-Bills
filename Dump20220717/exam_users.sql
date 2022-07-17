-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: exam
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `reg_timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jonas Jonaitis','jonas.jonaitis@gmail.com','$2b$10$flZbzFsakl7QSPOGIMOLrOkHF9IwNp.HlCl9apFgwF3BO9d/wnxuy','2022-07-14 15:46:42'),(2,'Šarūnas Grabauskas','sarunas.grabauskas@gmail.com','$2b$10$tcLl1E0nacf8c4OC.0hpbOMQ/XAkKaqneLzQi48RHiy7cDQov8RsO','2022-07-14 15:47:25'),(3,'admin','admin@admin.com','$2b$10$lrEFPXNSiSBOxQhC2VboFOy5Vv2yH.ZSHEcY4/ldEhLp0KDCsdcLW','2022-07-15 17:32:38'),(4,'fina','fina@fina.lt','$2b$10$iNBqu9MEU0cgUWaXa9ilD.JxnUaP8lRygWN6VXOyqGMTDEha3HxWe','2022-07-15 17:52:58'),(5,'finaaa','fina@fina.lt','$2b$10$pfy.2cAurWRc7jtg8YoGEO0LEkutMYZY4VFpNRNllu6tgIc40A94G','2022-07-15 18:02:53'),(6,'dddd','fina5@fina.lt','$2b$10$S9HD.rLb2Vy3Ulol4shrKOPdQP3kewOdwdFZQwGczFoWenrrDPBXK','2022-07-15 18:25:34'),(7,'Laimute','laimute@pastas.lt','$2b$10$/EsAhq6SHt2GYiMAPhPfMOo7wlU5HvkyNQLCqRWc60IwjuwBEv0oK','2022-07-15 21:06:32'),(8,'Laimute :)','laimute@pastas.lt','$2b$10$m4pI.abFRwIb4ynHwJT2guKgMJLzeXncG/zStppmVh04Ld4ISR8Gy','2022-07-15 21:10:47'),(9,'test','test@test.lt','$2b$10$6RzHA5CYvE5hnuPDuc818.QXlD9hrB49KiCxAWNpEUu9L5eRIZdp2','2022-07-16 11:36:19'),(10,'puma','puma@puma.lt','$2b$10$oXnhan7dGJHtXbCncHqb7ue2LzBvOvqf84V2C.WOlm9RcRp6e5usW','2022-07-16 12:37:11'),(11,'test','fina0@fina.lt','$2b$10$fOUQs3MrUOVq3NDKXygKVe6DBooBbI8yi2moMApQ.w2eoZ9tptSFS','2022-07-16 12:57:09'),(12,'hfgfhfk','fina01@fina.lt','$2b$10$zmtL/NjjLHBguyzBZwsk.u2eWuRQfHj6nFdAyKcPEC8Syc9LoGdz6','2022-07-16 13:00:37'),(13,'fina','fina00@fina.lt','$2b$10$dsXPMmN1N11ASdaUiHtw5eHRTVQBQVVCgYvJBsz5xQB9ldDcVxa/q','2022-07-16 14:30:04'),(14,'Fina','fina111@fina.lt','$2b$10$VCPxaTTlWKHXbIRIBGy0oeLFpdQxT87RR5fiE31Ujvz5U4LPve5wy','2022-07-17 06:43:17'),(15,'Šarūnas','saras@saras.lt','$2b$10$IrC7KCvvN6f6odkNsnxJp.mfc1uT66AWMdey8CVlnNvPb7cvsJ8Y2','2022-07-17 07:00:33'),(16,'admi','admi@admi.com','$2b$10$3EViA0jeGS2pZst2cQJXXOJ/9EBqJfEqFggZFBJIrgi.64LpMFQaK','2022-07-17 07:01:26'),(17,'sarunas','sarunas.grabakas@gmail.com','$2b$10$dAAbWwHNa5FXT6BUjI.yge9oTflSVbLXloHpDNyJXuNXj5zyMkKi2','2022-07-17 07:51:49'),(18,'Šarunas','sarass@saras.lt','$2b$10$6KaIn/wpYx1.zz336SfR4uucus79YwYpfc0T2bFxHe6Lkb05Q8zI6','2022-07-17 07:53:10'),(19,'kebabas','kebas@kebas.lt','$2b$10$P2jDUt1/M.03J.XdkFLdqejBed7t8uoLiWcjPgNEAgfbAwmRJlGI2','2022-07-17 10:48:28'),(20,'xzfasfas','saruns.grabauska@gmail.com','$2b$10$CpyMDP4P1vweV..o/fDVwewbZvmu6AWLpDFGRvHcQicb.oK6U6pL2','2022-07-17 11:29:25'),(21,'asasffasf','pastas@p.lt','$2b$10$9Qr0eipzLcoZOk3QVdD/NOmWlIC7wkgxjDpHJ1fIF4jKI8jwDjwf2','2022-07-17 11:30:36'),(22,'test','test1@test.com','$2b$10$yeXTYaoua8TRJrVYohDXXOwjDnEKIrOQ8obMX6S1hZByhPkaKvTZ2','2022-07-17 12:20:42'),(23,'test','test2@test.com','$2b$10$K5HSiBPWRQzq/9HlwxH6pOPWFa4RoeGDBdatfxMrg4da8DLqg0xMG','2022-07-17 12:34:22'),(24,'Saulute','saulute@gmail.com','$2b$10$aJYOzU78Yv4kivJDU5aHqeffv43NmjH5iRJ.Dm7orUrxHUSSUqx/m','2022-07-17 12:55:20'),(25,'zmonele','zmonele@susituok.lt','$2b$10$p9If1tzh6QABd/wSqepz/./opnVd4OHymx9MFXeKIVCA30/2NvixS','2022-07-17 13:02:37'),(26,'test','test100@test.lt','$2b$10$3puprgzz4xZc9yPY/O4MNe3XiHMx2LG1AaRZU8pU6Gt.v./Vn92TS','2022-07-17 16:25:30'),(27,'twfaefgwg','test10000@test.com','$2b$10$v.NV.jyoF95H3OzEFP1cW.Bh35YDTdzJAk60hqTElOGZz7H49GBIO','2022-07-17 16:30:29'),(28,'admi','admi@hh.com','$2b$10$8nUUGCEG.2ujRQX0MuLWMu7z1z0k/htqRJslz3jiJCrlO37e/c9sK','2022-07-17 16:36:07'),(29,'mmmm','mmm@mmm.com','$2b$10$Wzl85DZW9wTWCsN6wTX9LuGIx5w7JAthiw8SCZE4wnbu8SHRngg5q','2022-07-17 17:10:13'),(30,'test','test15@test.lt','$2b$10$RwTH4APdfL0mXl930hG1s.O.MNAFjRc1xn/SGvDuQni8NEWW24MCK','2022-07-17 18:06:47');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-17 21:27:43
