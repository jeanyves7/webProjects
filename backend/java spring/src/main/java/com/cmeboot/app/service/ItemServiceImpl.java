package com.cmeboot.app.service;

import com.cmeboot.app.model.Item;
import com.cmeboot.app.repository.ItemRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

    //autowiring the AllRestaurants Repository
    private final ItemRepository repository;
    public ItemServiceImpl(ItemRepository repository){
        this.repository=repository;
    }

    //method that return the paginated result by default
    @Override
    public Page<Item> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    //method that return the paginated result by type
    @Override
    public Page<Item> findType(String type, Pageable pageable) {
        return repository.findBytypeContaining(type,pageable);
    }

    //methode that return the paginated resulted result by name
    // it's a collection because we may have more than one restaurant that shares the same name but are in different location
    @Override
    public Page<Item> findName(String name, Pageable pageable) {
        return repository.findByNameStartingWithIgnoreCase(name,pageable);
    }

    //method to return the restaurant by its id
    @Override
    public Optional<Item> findId(Long id) {
        return repository.findById(id);
    }

}
