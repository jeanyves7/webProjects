package com.cmeboot.app.repository;

import com.cmeboot.app.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbakRepository extends JpaRepository<Feedback,Long> {

}
