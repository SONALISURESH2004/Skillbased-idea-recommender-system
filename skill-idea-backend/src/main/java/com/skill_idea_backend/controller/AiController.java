package com.skill_idea_backend.controller;

import com.skill_idea_backend.service.AiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    @GetMapping("/ideas")
    public String getAiIdeas(@RequestParam String skill) {
        return aiService.getAiIdeas(skill);
    }
}
