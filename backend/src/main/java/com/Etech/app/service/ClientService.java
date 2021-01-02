package com.Etech.app.service;

import com.Etech.app.model.Client;

public interface ClientService {
    Boolean isSignUp(String email);
    Boolean isSignUp(String email,String password);
    Client getClient(Long id);
    Client getClient(String email);
    Client addClient(Client cl);
}
