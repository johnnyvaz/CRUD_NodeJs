CREATE  TABLE IF NOT EXISTS `dados191n`.`livros` (
  `liv_codigo` INT NOT NULL AUTO_INCREMENT ,
  `liv_dtcadastro` TIMESTAMP NULL ,
  `liv_titulo` VARCHAR(50) NULL ,
  `liv_edicao` VARCHAR(10) NULL ,
  `liv_isbn`  VARCHAR(20) NULL,
  `liv_ano` DECIMAL(10,0) NULL ,
  `aut_codigo` INT NOT NULL ,
  `edt_codigo` INT NOT NULL ,
  PRIMARY KEY (`liv_codigo`, `aut_codigo`, `edt_codigo`) ,
  INDEX `fk_livros_autores` (`aut_codigo` ASC) ,
  INDEX `fk_livros_editoras1` (`edt_codigo` ASC) ,
  CONSTRAINT `fk_livros_autores`
    FOREIGN KEY (`aut_codigo` )
    REFERENCES `dados191n`.`autores` (`aut_codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_editoras1`
    FOREIGN KEY (`edt_codigo` )
    REFERENCES `dados191n`.`editoras` (`edt_codigo` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


insert into dados191n.livros 
		(liv_titulo, liv_edicao, liv_isbn, liv_ano, aut_codigo, edt_codigo) 
values 	('Dominando o Delphi 7 - A Biblia', '1ª Edição', '853-46-1408-3', '2001','3','1'),
		('Arquitetura e Organização de Computadores ', '8ª Edição', '978-85-7605-564-8', '2010','2','1'),
		('Implantando a Governança de TI', '4ª Edição', '978-85-7452-658-4', '2014','1','2'),
		('dBase III Plus - Master Informática', '1ª Edição', '84-88094-03-05', '1992','4','1');

		