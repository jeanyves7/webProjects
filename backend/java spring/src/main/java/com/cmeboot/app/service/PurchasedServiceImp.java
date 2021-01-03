package com.cmeboot.app.service;

import com.cmeboot.app.model.Cart;
import com.cmeboot.app.model.Purchased;
import com.cmeboot.app.repository.purchasedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
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
