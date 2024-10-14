package app.aiko.domain;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Boolean isActive;

    private Date created_at;

    @OneToMany
    private List<User> followed;
}
