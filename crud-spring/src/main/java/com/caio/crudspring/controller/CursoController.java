package com.caio.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.caio.crudspring.model.Curso;
import com.caio.crudspring.repositorio.CursoRepositorio;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursoController {

    
    private final /*não altera instancia*/ CursoRepositorio cursoRepositorio;
    // public CursoController(CursoRepositorio cursoRepositorio) {
    //    this.cursoRepositorio = cursoRepositorio; //gerar costructor no source action
    // } gerado pelo lombok
    @GetMapping //@RequestMapping(method = RequestMethod.GET)
    public List<Curso> list(){
        return cursoRepositorio.findAll();
    }

}