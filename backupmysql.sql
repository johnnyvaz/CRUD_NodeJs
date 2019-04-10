-- MySQL dump 10.14  Distrib 5.5.63-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: dados191n
-- ------------------------------------------------------
-- Server version	5.5.63-MariaDB-1ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `autores` (
  `aut_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `aut_dtcadastro` timestamp NULL DEFAULT NULL,
  `aut_nome` varchar(40) DEFAULT NULL,
  `aut_apelido` varchar(10) DEFAULT NULL,
  `aut_sexo` char(1) DEFAULT NULL,
  `aut_telefone` varchar(10) DEFAULT NULL,
  `aut_email` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`aut_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,NULL,'Fernando Chinaglia','Fernando','M','11-5205-49',''),(2,NULL,'Aguinaldo Aragon Fernandes','Aguinaldo','M','21-2568-15',''),(3,NULL,'Vladimir Ferraz de Abreu','Vladimir','M','11-2148-14',''),(4,NULL,'Willian Stallings','Stallings','M','','');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editoras`
--

DROP TABLE IF EXISTS `editoras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `editoras` (
  `edt_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `edt_dtcadastro` timestamp NULL DEFAULT NULL,
  `edt_nome` varchar(40) DEFAULT NULL,
  `edt_cidade` varchar(30) DEFAULT NULL,
  `edt_cep` char(9) DEFAULT NULL,
  `edt_estado` char(2) DEFAULT NULL,
  `edt_email` varchar(40) DEFAULT NULL,
  `edt_telefone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`edt_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editoras`
--

LOCK TABLES `editoras` WRITE;
/*!40000 ALTER TABLE `editoras` DISABLE KEYS */;
INSERT INTO `editoras` VALUES (1,NULL,'BRASPORT Livros e Multimídia Ltda','Rio de Janeiro','20270-280','RJ','editorial@brasport.com.br','21-2568-1415'),(2,NULL,'Pearson Education do Brasil','São Paulo','02712-100','SP','vendas@pearson.com','11-2178-8688'),(3,NULL,'Editoria Makron Books','São Paulo','05083-130','SP','editorial@mbooks.com.br','11-3641-5314'),(4,NULL,'Editora Ano Zero Ltda','Rio de Janeiro','22210-010','RJ','editorial@editoraanozero.com.br','11-205-4907');
/*!40000 ALTER TABLE `editoras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livros`
--

DROP TABLE IF EXISTS `livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `livros` (
  `liv_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `liv_dtcadastro` timestamp NULL DEFAULT NULL,
  `liv_titulo` varchar(50) DEFAULT NULL,
  `liv_edicao` varchar(10) DEFAULT NULL,
  `liv_isbn` varchar(20) DEFAULT NULL,
  `liv_ano` decimal(10,0) DEFAULT NULL,
  `aut_codigo` int(11) NOT NULL,
  `edt_codigo` int(11) NOT NULL,
  PRIMARY KEY (`liv_codigo`,`aut_codigo`,`edt_codigo`),
  KEY `fk_livros_autores` (`aut_codigo`),
  KEY `fk_livros_editoras1` (`edt_codigo`),
  CONSTRAINT `fk_livros_autores` FOREIGN KEY (`aut_codigo`) REFERENCES `autores` (`aut_codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_editoras1` FOREIGN KEY (`edt_codigo`) REFERENCES `editoras` (`edt_codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livros`
--

LOCK TABLES `livros` WRITE;
/*!40000 ALTER TABLE `livros` DISABLE KEYS */;
INSERT INTO `livros` VALUES (1,NULL,'Dominando o Delphi 7 - A Biblia','1ª Edição','853-46-1408-3',2001,3,1),(2,NULL,'Arquitetura e Organização de Computadores ','8ª Edição','978-85-7605-564-8',2010,2,1),(3,NULL,'Implantando a Governança de TI','4ª Edição','978-85-7452-658-4',2014,1,2),(4,NULL,'dBase III Plus - Master Informática','1ª Edição','84-88094-03-05',1992,4,1);
/*!40000 ALTER TABLE `livros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-26 21:44:20
