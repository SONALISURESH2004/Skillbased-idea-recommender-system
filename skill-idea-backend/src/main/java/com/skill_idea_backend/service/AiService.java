package com.skill_idea_backend.service;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AiService {

    private final RestTemplate restTemplate = new RestTemplate();

    public String getAiIdeas(String skill) {
        String url = "http://localhost:11434/api/generate";

        String requestJson = String.format(
            "{ \"model\": \"phi3:3.8b\", \"prompt\": \"Suggest 3 innovative project ideas for a student skilled in %s\" }",
            skill
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>(requestJson, headers);

        return restTemplate.postForObject(url, entity, String.class);
    }
}
