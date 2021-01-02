package com.Etech.app.repository;

import com.Etech.app.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbakRepository extends JpaRepository<Feedback,Long> {

}
