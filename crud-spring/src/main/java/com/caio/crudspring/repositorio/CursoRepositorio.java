package com.caio.crudspring.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.caio.crudspring.model.Curso;



@Repository
public interface CursoRepositorio extends JpaRepository<Curso, Long> {
    
}
