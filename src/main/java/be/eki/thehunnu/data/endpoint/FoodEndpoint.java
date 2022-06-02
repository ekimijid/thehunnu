package be.eki.thehunnu.data.endpoint;

import be.eki.thehunnu.data.entity.Food;
import be.eki.thehunnu.data.repository.Foodrepository;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

import javax.annotation.security.PermitAll;
import java.util.Collections;
import java.util.List;

@Endpoint
@PermitAll
public class FoodEndpoint {
    private Foodrepository foodrepository;

    public FoodEndpoint(Foodrepository foodrepository) {
        this.foodrepository = foodrepository;
    }
    @Nonnull
    public FoodData getFoodData(){
        FoodData foodData=new FoodData();
        foodData.foods=foodrepository.findAll();
        return foodData;
    }

    @Nonnull
    public Food saveFood(Food food){

       return foodrepository.save(food);
    }
    public void deleteFood(Food food){
        foodrepository.delete(food);
    }

    public static class FoodData{
        @Nonnull
        public List<@Nonnull Food>foods= Collections.emptyList();
    }
}
