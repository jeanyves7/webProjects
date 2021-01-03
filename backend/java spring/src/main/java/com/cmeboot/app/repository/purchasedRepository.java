package com.cmeboot.app.repository;

import com.cmeboot.app.model.Cart;
import com.cmeboot.app.model.Purchased;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface purchasedRepository extends JpaRepository<Purchased,Long> {
    Purchased save(Purchased pur);
}
