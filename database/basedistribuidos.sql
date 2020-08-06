create database sistemasdistribuidos;
show databases;
use sistemasdistribuidos;
create table usuarios(
usuario varchar(99),
contraseña varchar(99)primary key,
nombre varchar(99));
show tables;
insert into usuarios values("juangarcia","distribuidos","carlos");
insert into usuarios values("sebasjoya","uptc","sebastian");
insert into usuarios values("tato","viancha","orlando");
insert into usuarios values("bohorquez","uptc","camilo");
select *from usuarios;
