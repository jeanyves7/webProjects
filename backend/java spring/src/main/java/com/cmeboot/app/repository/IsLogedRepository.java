package com.cmeboot.app.repository;

import com.cmeboot.app.model.Client;
import com.cmeboot.app.model.isLogged;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IsLogedRepository extends JpaRepository<isLogged,Long> {

}
