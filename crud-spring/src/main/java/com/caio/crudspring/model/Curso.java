package com.caio.crudspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data // adiciona setters e gettes
@Entity // declara que a entidade é uma entidade com o mesmo nome da classe
// @Table(name = "nome_tabela") se ja exixtir uma tabela com nome diferente definir o nome
public class Curso { // Mesmo nome da tabela então não precisa usar @Table

    @Id //anotação que define a chave primária
    @GeneratedValue(strategy = GenerationType.AUTO) // gera o valor id automaticamente (auto_increment)
    private Long id;

    @Column(name = "nome",length = 200, nullable = false) 
    //acocia a coluna com o nome dado ao atributo no banco de dados | tamanho de caracteres | not null
    private String nome;
    
    
    @Column(name = "categoria",length = 10, nullable = false)
    private String categoria;

    
}
