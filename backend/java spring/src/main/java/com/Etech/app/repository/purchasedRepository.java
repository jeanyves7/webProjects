package com.Etech.app.repository;

import com.Etech.app.model.Purchased;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface purchasedRepository extends JpaRepository<Purchased,Long> {
    Purchased save(Purchased pur);
}
