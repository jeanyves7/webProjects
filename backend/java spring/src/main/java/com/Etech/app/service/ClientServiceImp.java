package com.Etech.app.service;


import com.Etech.app.repository.ClientRepository;
import com.Etech.app.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImp implements ClientService {

    @Autowired
    ClientRepository clRepo;


    @Override
    public Boolean isSignUp(String email) {
        return clRepo.countByEmail(email) != 0;
    }

    @Override
    public Boolean isSignUp(String email, String password) {
        return clRepo.countByEmailAndPassword(email,password)!=0;
    }

    @Override
    public Client getClient(Long id) {
      return   clRepo.findByIdC(id);
    }

    @Override
    public Client getClient(String email) {
        return clRepo.findByEmail(email);
    }

    @Override
    public Client addClient(Client cl) {
        return clRepo.save(cl);

    }
}
