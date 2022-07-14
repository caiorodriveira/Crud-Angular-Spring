package com.caio.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.caio.crudspring.model.Curso;
import com.caio.crudspring.repositorio.CursoRepositorio;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	// método de exemplo
	@Bean
	CommandLineRunner initDataBase(CursoRepositorio cursoRepositorio) {
		return args -> {
			cursoRepositorio.deleteAll();
			Curso c = new Curso();
			c.setNome("Angular com spring");
			c.setCategoria("front-end");

			cursoRepositorio.save(c);
			
		};
	}
}
