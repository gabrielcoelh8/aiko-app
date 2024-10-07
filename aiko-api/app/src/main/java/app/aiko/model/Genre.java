package app.aiko.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String genre;

    @ManyToMany
    private List<Post> post;

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public List<Post> getPost() {
        return post;
    }

    public void setPost(List<Post> post) {
        this.post = post;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Genre _genre)) return false;
        return Objects.equals(id, _genre.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
