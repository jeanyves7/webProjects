package com.cmeboot.app.repository;


import com.cmeboot.app.model.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository<Client,Long> {
    Client findByIdC(Long id);
    Client findByEmail(String email);
    int countByEmail(String email);
    int countByEmailAndPassword(String email,String password);

}
