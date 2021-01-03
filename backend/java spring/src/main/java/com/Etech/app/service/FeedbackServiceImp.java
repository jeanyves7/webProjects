package com.Etech.app.service;

import com.Etech.app.model.Feedback;
import com.Etech.app.repository.FeedbakRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackServiceImp  {

    @Autowired
    FeedbakRepository feedRepo;

    public Feedback addFeed(Feedback fb){
        return feedRepo.save(fb);
    }
}
