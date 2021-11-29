-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: aprendematebd
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `usuariobe`
--

DROP TABLE IF EXISTS `usuariobe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuariobe` (
  `nombres` varchar(20) NOT NULL,
  `apellidos` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contra` varchar(20) NOT NULL,
  `grado` varchar(45) DEFAULT NULL,
  `edad` varchar(3) DEFAULT NULL,
  `idusuario` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariobe`
--

LOCK TABLES `usuariobe` WRITE;
/*!40000 ALTER TABLE `usuariobe` DISABLE KEYS */;
INSERT INTO `usuariobe` VALUES ('Marlon','Pardo','hfsgd@hotmail.com','dasd67Wfs','segundo','7',2),('Camilo','Prieto','dasd78@outlook.com','ydas78','primero','6',3),('Myriam','roncancio','lasdui67@hotmail.com','jd78as','Segundo','11',5),('Prueba','Apellido','root','root','Seleccione','6',6),('Alfonso','Mateus','alfonsito76@gmail.com','kasdh53Q12','Seleccione','10',8),('Emiliano','Pardo','hhkas67r@hotmail.com','12dasdhkqwW','Primero','6',9),('Carlos','Gutierrez','jlasd812@gmail.com','7921Tgasd','Seleccione','7',11),('Eliana','Ordonez','Monroy78@hotmail.com','78vadasdS','Tercero','8',17),('camilo','ardila','jldas7@hotmail.com','dasYas','Segundo','6',23),('Fabiola','Zuluaga','dkasd67@hotmail.com','67fasdasTas','Primero','5',30),('Eduardo','Ariza','jlkdjas56@gmail.com','789Ydasd','Seleccione','8',33),('Efrain','Gutierres','djlkasdu78@outlook.com','789sadhjdasU','Segundo','7',36),('Gabriel','mantill','uud778@hotmail.com','812hGdas','Preescolar','4',37),('Marcos','pardo','hduas67@hotmail.com','hhjkfdjYsad78','Segundo','4',40),('Catalina','Pe�a','jdksajdk@hotmail.com','897rGasd','Tercero','10',41),('robanfo','pop','Cepeda','El mensaje','pop','12',43),('Alfonso','Mateus','alfonsito76@gmail.com','kasdh53Q12','Seleccione','10',44);
/*!40000 ALTER TABLE `usuariobe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-13 20:56:19
