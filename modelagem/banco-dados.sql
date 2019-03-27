

CREATE SCHEMA IF NOT EXISTS `dados191n` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `dados191n` ;

-- -----------------------------------------------------
-- Table `dados191n`.`autores`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`autores` (
  `aut_codigo` INT NOT NULL AUTO_INCREMENT ,
  `aut_dtcadastro` TIMESTAMP NULL ,
  `aut_nome` VARCHAR(40) NULL ,
  `aut_apelido` VARCHAR(10) NULL ,
  `aut_sexo` CHAR(1) NULL ,
  `aut_telefone` VARCHAR(10) NULL ,
  `aut_email` VARCHAR(40) NULL ,
  PRIMARY KEY (`aut_codigo`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dados191n`.`editoras`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`editoras` (
  `edt_codigo` INT NOT NULL AUTO_INCREMENT ,
  `edt_dtcadastro` TIMESTAMP NULL ,
  `edt_nome` VARCHAR(40) NULL ,
  `edt_cidade` VARCHAR(30) NULL ,
  `edt_cep` CHAR(9) NULL ,
  `edt_estado` CHAR(2) NULL ,
  `edt_email` VARCHAR(40) NULL ,
  `edt_telefone` VARCHAR(15) NULL ,
  PRIMARY KEY (`edt_codigo`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dados191n`.`livros`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `dados191n`.`livros` (
  `liv_codigo` INT NOT NULL AUTO_INCREMENT ,
  `liv_dtcadastro` TIMESTAMP NULL ,
  `liv_titulo` VARCHAR(50) NULL ,
  `liv_edicao` VARCHAR(10) NULL ,
  `liv_ano` DECIMAL(10,0) NULL ,
  `autores_aut_codigo` INT NOT NULL ,
  `editoras_edt_codigo` INT NOT NULL ,
  PRIMARY KEY (`liv_codigo`, `autores_aut_codigo`, `editoras_edt_codigo`) ,
  INDEX `fk_livros_autores` (`autores_aut_codigo` ASC) ,
  INDEX `fk_livros_editoras1` (`editoras_edt_codigo` ASC) ,
  CONSTRAINT `fk_livros_autores`
    FOREIGN KEY (`autores_aut_codigo` )
    REFERENCES `dados191n`.`autores` (`aut_codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_editoras1`
    FOREIGN KEY (`editoras_edt_codigo` )
    REFERENCES `dados191n`.`editoras` (`edt_codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

