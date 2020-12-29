package com.cmeboot.app.service;

import com.cmeboot.app.model.Client;
import com.cmeboot.app.model.isLogged;
import com.cmeboot.app.repository.IsLogedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IsLogedServiceImp {

    @Autowired
    IsLogedRepository isRepo;

    public isLogged addItem(isLogged cl){
        return isRepo.save(cl);
    }


    public isLogged checK(){
        List<isLogged> l= isRepo.findAll();
        if(l.size()!=0){
            return l.get(0);
        }else return null;
    }
    public void deleteAll(){
        isRepo.deleteAll();
    }
}
