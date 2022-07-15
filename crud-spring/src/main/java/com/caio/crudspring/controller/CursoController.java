package com.caio.crudspring.controller;

import java.util.List;

import javax.persistence.Entity;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.caio.crudspring.model.Curso;
import com.caio.crudspring.repositorio.CursoRepositorio;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursoController {

    
    private final /*não altera instancia*/ CursoRepositorio cursoRepositorio;

     //gerar costructor no source action - ou gerar pelo lombock
    @GetMapping //@RequestMapping(method = RequestMethod.GET)
    public List<Curso> list(){
        return cursoRepositorio.findAll();
    }

    @PostMapping //@RequestMapping(method = RequestMethod.GET)
    @ResponseStatus(code = HttpStatus.CREATED)
    public Curso create(@RequestBody Curso curso){//spring vai pegar o registro do form e mapear com o model do java
        // System.out.println(curso.getNome());
        return cursoRepositorio.save(curso);//salva informações no bd

        // return ResponseEntity.status(HttpStatus.CREATED) //retorna o status de criado
        // .body(cursoRepositorio.save(curso)); //ResponseEntity<Curso> no public
    }

}
