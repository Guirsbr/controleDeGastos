-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ControleDeGastos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ControleDeGastos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ControleDeGastos` DEFAULT CHARACTER SET utf8 ;
USE `ControleDeGastos` ;

-- -----------------------------------------------------
-- Table `ControleDeGastos`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ControleDeGastos`.`usuario` ;

CREATE TABLE IF NOT EXISTS `ControleDeGastos`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ControleDeGastos`.`saldo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ControleDeGastos`.`saldo` ;

CREATE TABLE IF NOT EXISTS `ControleDeGastos`.`saldo` (
  `id_saldo` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `data_adicao` DATE NULL,
  `valor` FLOAT NULL,
  PRIMARY KEY (`id_saldo`, `id_usuario`),
  INDEX `FK_usuario_saldo_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `FK_usuario_saldo`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `ControleDeGastos`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ControleDeGastos`.`saida`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ControleDeGastos`.`saida` ;

CREATE TABLE IF NOT EXISTS `ControleDeGastos`.`saida` (
  `id_saida` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `data_saida` DATE NULL,
  `valor` FLOAT NULL,
  PRIMARY KEY (`id_saida`, `id_usuario`),
  INDEX `FK_saida_usuario_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `FK_saida_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `ControleDeGastos`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
