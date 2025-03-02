package com.Etech.app.service;

import com.Etech.app.model.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

//this interface shows the methods that are available to the Restaurants service

public interface ItemService {

    Page<Item> findAll(Pageable pageable);
    Page<Item> findType(String type, Pageable pageable);
    Page<Item> findName(String name, Pageable pageable);

    Optional<Item> findId(Long id) ;
}
