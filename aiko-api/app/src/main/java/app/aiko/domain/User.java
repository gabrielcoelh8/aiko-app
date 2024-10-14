package app.aiko.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String fullname;

    @NotNull
    private String nickname;

    @NotNull
    private String password;

    @NotNull
    private String email;

    private String twitter;

    private Date created_at;

    @OneToMany
    private List<Post> posts;

    @OneToOne
    private LikePost likePost;

}
