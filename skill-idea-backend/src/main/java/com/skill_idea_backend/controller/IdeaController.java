package com.skill_idea_backend.controller;

import com.skill_idea_backend.model.Idea;
import com.skill_idea_backend.service.IdeaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ideas")
@RequiredArgsConstructor
public class IdeaController {
    private final IdeaService ideaService;

    @GetMapping
    public List<Idea> getIdeas() {
        return ideaService.getAllIdeas();
    }

    @PostMapping
    public Idea createIdea(@RequestBody Idea idea) {
        return ideaService.saveIdea(idea);
    }
}
