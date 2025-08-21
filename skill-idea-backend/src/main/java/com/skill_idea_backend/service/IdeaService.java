package com.skill_idea_backend.service;

import com.skill_idea_backend.model.Idea;
import com.skill_idea_backend.repository.IdeaRepository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IdeaService {
    private final IdeaRepository ideaRepository;

    public List<Idea> getAllIdeas() {
        return ideaRepository.findAll();
    }

    public Idea saveIdea(Idea idea) {
        return ideaRepository.save(idea);
    }
}
