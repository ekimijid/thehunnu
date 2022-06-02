package be.eki.thehunnu.data.repository;

import be.eki.thehunnu.data.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Foodrepository extends JpaRepository<Food, Long> {
}
