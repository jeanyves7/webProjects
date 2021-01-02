package com.Etech.app.service;

import com.Etech.app.model.Purchased;
import com.Etech.app.repository.purchasedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchasedServiceImp implements PurchasedService{

    @Autowired
    purchasedRepository purRepo;

    @Override
    public Purchased addItem(Purchased pur) {
        return purRepo.save(pur);
    }
}
