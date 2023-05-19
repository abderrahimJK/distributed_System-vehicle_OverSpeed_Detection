package ma.enset.abderrahim_ait_bouna.feign;

import ma.enset.abderrahim_ait_bouna.models.Vehicule;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "RADAR-SERVICE")
public interface VehiculeClientRepository {

    @GetMapping("/vehicules")
    List<Vehicule> getVehicules();


}
