-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: garagem
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `garagem`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `garagem` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `garagem`;

--
-- Table structure for table `acessa`
--

DROP TABLE IF EXISTS `acessa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acessa` (
  `fk_usuario` int NOT NULL,
  `fk_guia` int NOT NULL,
  `data_acesso` datetime NOT NULL,
  PRIMARY KEY (`fk_usuario`,`fk_guia`,`data_acesso`),
  KEY `fk_guia` (`fk_guia`),
  CONSTRAINT `acessa_ibfk_1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `acessa_ibfk_2` FOREIGN KEY (`fk_guia`) REFERENCES `guia` (`id_guia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acessa`
--

LOCK TABLES `acessa` WRITE;
/*!40000 ALTER TABLE `acessa` DISABLE KEYS */;
/*!40000 ALTER TABLE `acessa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avaliacao`
--

DROP TABLE IF EXISTS `avaliacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacao` (
  `id_avaliacao` int NOT NULL AUTO_INCREMENT,
  `data` date DEFAULT NULL,
  `estrelas` tinyint NOT NULL,
  `descricao` text COLLATE utf8mb4_unicode_ci,
  `fk_entusiasta` int NOT NULL,
  `fk_oficina` int NOT NULL,
  PRIMARY KEY (`id_avaliacao`),
  KEY `fk_entusiasta` (`fk_entusiasta`),
  KEY `fk_oficina` (`fk_oficina`),
  CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`fk_entusiasta`) REFERENCES `entusiasta` (`id_entusiasta`),
  CONSTRAINT `avaliacao_ibfk_2` FOREIGN KEY (`fk_oficina`) REFERENCES `oficina` (`id_oficina`),
  CONSTRAINT `avaliacao_chk_1` CHECK ((`estrelas` between 1 and 5))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacao`
--

LOCK TABLES `avaliacao` WRITE;
/*!40000 ALTER TABLE `avaliacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dono_oficina`
--

DROP TABLE IF EXISTS `dono_oficina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dono_oficina` (
  `id_dono_oficina` int NOT NULL,
  `nome_responsavel` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_dono_oficina`),
  CONSTRAINT `dono_oficina_ibfk_1` FOREIGN KEY (`id_dono_oficina`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dono_oficina`
--

LOCK TABLES `dono_oficina` WRITE;
/*!40000 ALTER TABLE `dono_oficina` DISABLE KEYS */;
/*!40000 ALTER TABLE `dono_oficina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entusiasta`
--

DROP TABLE IF EXISTS `entusiasta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entusiasta` (
  `id_entusiasta` int NOT NULL,
  PRIMARY KEY (`id_entusiasta`),
  CONSTRAINT `entusiasta_ibfk_1` FOREIGN KEY (`id_entusiasta`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entusiasta`
--

LOCK TABLES `entusiasta` WRITE;
/*!40000 ALTER TABLE `entusiasta` DISABLE KEYS */;
/*!40000 ALTER TABLE `entusiasta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etapas`
--

DROP TABLE IF EXISTS `etapas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etapas` (
  `id_etapa` int NOT NULL AUTO_INCREMENT,
  `numero` int DEFAULT NULL,
  `titulo` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descricao` text COLLATE utf8mb4_unicode_ci,
  `documentos_necessarios` text COLLATE utf8mb4_unicode_ci,
  `valor` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fk_legalizacao` int NOT NULL,
  PRIMARY KEY (`id_etapa`),
  KEY `fk_legalizacao` (`fk_legalizacao`),
  CONSTRAINT `etapas_ibfk_1` FOREIGN KEY (`fk_legalizacao`) REFERENCES `legalizacao` (`id_legalizacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etapas`
--

LOCK TABLES `etapas` WRITE;
/*!40000 ALTER TABLE `etapas` DISABLE KEYS */;
/*!40000 ALTER TABLE `etapas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fonte`
--

DROP TABLE IF EXISTS `fonte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fonte` (
  `id_fonte` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orgao` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `referencia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data_consulta` date DEFAULT NULL,
  PRIMARY KEY (`id_fonte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fonte`
--

LOCK TABLES `fonte` WRITE;
/*!40000 ALTER TABLE `fonte` DISABLE KEYS */;
/*!40000 ALTER TABLE `fonte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fotos`
--

DROP TABLE IF EXISTS `fotos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fotos` (
  `id_foto` int NOT NULL AUTO_INCREMENT,
  `imagem` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fk_oficina` int NOT NULL,
  PRIMARY KEY (`id_foto`),
  KEY `fk_oficina` (`fk_oficina`),
  CONSTRAINT `fotos_ibfk_1` FOREIGN KEY (`fk_oficina`) REFERENCES `oficina` (`id_oficina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fotos`
--

LOCK TABLES `fotos` WRITE;
/*!40000 ALTER TABLE `fotos` DISABLE KEYS */;
/*!40000 ALTER TABLE `fotos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guia`
--

DROP TABLE IF EXISTS `guia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guia` (
  `id_guia` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descricao` text COLLATE utf8mb4_unicode_ci,
  `categoria` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `custo_estimado` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `exige_regularizacao` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_guia`),
  CONSTRAINT `guia_chk_1` CHECK ((`exige_regularizacao` in (0,1)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guia`
--

LOCK TABLES `guia` WRITE;
/*!40000 ALTER TABLE `guia` DISABLE KEYS */;
/*!40000 ALTER TABLE `guia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `legalizacao`
--

DROP TABLE IF EXISTS `legalizacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `legalizacao` (
  `id_legalizacao` int NOT NULL AUTO_INCREMENT,
  `data_atualizacao` date DEFAULT NULL,
  `fk_guia` int NOT NULL,
  PRIMARY KEY (`id_legalizacao`),
  KEY `fk_guia` (`fk_guia`),
  CONSTRAINT `legalizacao_ibfk_1` FOREIGN KEY (`fk_guia`) REFERENCES `guia` (`id_guia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `legalizacao`
--

LOCK TABLES `legalizacao` WRITE;
/*!40000 ALTER TABLE `legalizacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `legalizacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oficina`
--

DROP TABLE IF EXISTS `oficina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oficina` (
  `id_oficina` int NOT NULL AUTO_INCREMENT,
  `nome_fantasia` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `razao_social` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cnpj` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descricao` text COLLATE utf8mb4_unicode_ci,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `horarios` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cep` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logradouro` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `numero` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `complemento` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fk_dono_oficina` int NOT NULL,
  PRIMARY KEY (`id_oficina`),
  KEY `fk_dono_oficina` (`fk_dono_oficina`),
  CONSTRAINT `oficina_ibfk_1` FOREIGN KEY (`fk_dono_oficina`) REFERENCES `dono_oficina` (`id_dono_oficina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oficina`
--

LOCK TABLES `oficina` WRITE;
/*!40000 ALTER TABLE `oficina` DISABLE KEYS */;
/*!40000 ALTER TABLE `oficina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `possui`
--

DROP TABLE IF EXISTS `possui`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `possui` (
  `fk_etapa` int NOT NULL,
  `fk_fonte` int NOT NULL,
  PRIMARY KEY (`fk_etapa`,`fk_fonte`),
  KEY `fk_fonte` (`fk_fonte`),
  CONSTRAINT `possui_ibfk_1` FOREIGN KEY (`fk_etapa`) REFERENCES `etapas` (`id_etapa`),
  CONSTRAINT `possui_ibfk_2` FOREIGN KEY (`fk_fonte`) REFERENCES `fonte` (`id_fonte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `possui`
--

LOCK TABLES `possui` WRITE;
/*!40000 ALTER TABLE `possui` DISABLE KEYS */;
/*!40000 ALTER TABLE `possui` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preferencias`
--

DROP TABLE IF EXISTS `preferencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferencias` (
  `id_preferencia` int NOT NULL AUTO_INCREMENT,
  `idioma` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tamanho_letra` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cor` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fonte` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fk_usuario` int NOT NULL,
  PRIMARY KEY (`id_preferencia`),
  UNIQUE KEY `fk_usuario` (`fk_usuario`),
  CONSTRAINT `preferencias_ibfk_1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferencias`
--

LOCK TABLES `preferencias` WRITE;
/*!40000 ALTER TABLE `preferencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `preferencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registra`
--

DROP TABLE IF EXISTS `registra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registra` (
  `fk_oficina` int NOT NULL,
  `fk_servico` int NOT NULL,
  PRIMARY KEY (`fk_oficina`,`fk_servico`),
  KEY `fk_servico` (`fk_servico`),
  CONSTRAINT `registra_ibfk_1` FOREIGN KEY (`fk_oficina`) REFERENCES `oficina` (`id_oficina`),
  CONSTRAINT `registra_ibfk_2` FOREIGN KEY (`fk_servico`) REFERENCES `servicos` (`id_servico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registra`
--

LOCK TABLES `registra` WRITE;
/*!40000 ALTER TABLE `registra` DISABLE KEYS */;
/*!40000 ALTER TABLE `registra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `id_servico` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descricao` text COLLATE utf8mb4_unicode_ci,
  `categoria` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_servico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cidade` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'garagem'
--

--
-- Dumping routines for database 'garagem'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-12 22:17:20
