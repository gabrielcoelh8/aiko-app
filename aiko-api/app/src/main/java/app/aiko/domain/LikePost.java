package app.aiko.domain;

import jakarta.persistence.*;

@Entity
public class LikePost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Boolean isActive;

    @OneToOne
    private User user;

    @OneToOne
    private Post post;
}
