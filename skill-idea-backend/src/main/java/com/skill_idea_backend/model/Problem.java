package com.skill_idea_backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Problem {
    private String title;
    private String description;
    private String domain;
    private String[] skills;
}
