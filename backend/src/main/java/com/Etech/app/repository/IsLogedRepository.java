package com.Etech.app.repository;

import com.Etech.app.model.isLogged;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IsLogedRepository extends JpaRepository<isLogged,Long> {

}
